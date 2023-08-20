---
title: Boost your productivity by creating your own CLI command with typescript (Part 1)
posttype: blog
date: 2021-01-09
published: true
cover: ./cover.jpeg
summary: This article is a part of a series that describes how you can leverage typescript, npm, npx, and node to boost your productivity by developing your own command-line interface commands.
category: nodejs, typescript, npm, npm, cli
featured: true
coverCredit:
---

## Context

Your **daily productivity** can be **greatly improved** 🚀 if you can **automate** all the tasks you used to do.

Thanks to **node, npm, npx and typescript**: creating a **CLI command** and making it available on your system or globally has never been easier.

As an example, we will create a CLI command to get a stock value for a symbol. This command will be called **pique-sous** (as a reference to the Disney character "Uncle \$crooge" in french 😄 🦆)

```bash
$ pique-sous MSFT SFIX GOOG
```

Result:

```bash
Retrieving stock information for MSFT at date 2021-01-10T01:37:57.574Z
{
  language: 'en-US',
  region: 'US',
  quoteType: 'EQUITY',
  quoteSourceName: 'Delayed Quote',
  regularMarketOpen: 218.68,
  exchange: 'NMS',
  shortName: 'Microsoft Corporation',
  longName: 'Microsoft Corporation',
  messageBoardId: 'finmb_21835',
  exchangeTimezoneName: 'America/New_York',
  exchangeTimezoneShortName: 'EST',
  gmtOffSetMilliseconds: -18000000,
  market: 'us_market',
  esgPopulated: false,
  displayName: 'Microsoft',
  symbol: 'MSFT'
}

```

The final results in available at [https://github.com/raphaelmansuy/pique-sous](https://github.com/raphaelmansuy/pique-sous) and published at [https://www.npmjs.com/package/pique-sous](https://www.npmjs.com/package/pique-sous).

This article was originally published at [https://www.elitizon.com/](https://www.elitizon.com/)

## 🏗 **6 Easy steps to make it happen !**

## Step1 : creating a basic typescript project

✅ Create a directory called **pique-sous**

```bash
$ mkdir ./pique-sous
```

✅ create a file **index.ts** under **pique-sous**

```bash
$ cd ./pique-sous
$ touch ./index.ts
```

As a result, you should have:

```bash
pique-sous
└── index.ts
```

✅ Edit the **index.ts** and add a simple command for testing such as:

```typescript
const currentDateAndTime = new Date().toIsoString()

console.log(currentDateTime)
```

✅ Execute and test the file with ts-node

```bash

npx ts-node index.ts

```

> **npx** is a tool from the NPM registry allowing executing commands without installation
> **ts-node** is a node version supporting typescript directly

As a result you should have something like this:

```bash
2021-01-10T02:37:49.683Z
```

## Step2 : make the file executable

✅ Modify the **index.ts** file such as

```typescript
#!/usr/bin/env npx ts-node

const currentDateAndTime = new Date().toIsoString()

console.log(currentDateTime)
```

> The first line **#!/usr/bin/env npx ts-node** specifies that the file must be executed by npx and ts-node

✅ Add the **executable permission** to the **index.ts** file

```bash
$ chmod u+x ./index.ts
```

✅ Test the file

```bash
$ ./index.ts
```

Results:

```bash
$ ./index.ts
$ 2021-01-10T03:24:43.190Z
```

## Step 3: package the project

✅ Add package.json file

Inside the directory use the npm command to create a package.json file

```bash
$ npm init
```

Answer the questions:

```bash
package name: (pique-sous)
version: (1.0.0)
description: A simple package
entry point: (index.js) bin/index.js
test command:
git repository:
keywords:
author: raphael mansuy
license: (ISC) MIT
About to write to /Users/raphaelmansuy/Projects/Github/raphaelmansuy/ElitizonWeb/data/blog/2021/01-09-how-to-create-a-cli-command-with-typescript/steps/step01/pique-sous/package.json:

{
  "name": "pique-sous",
  "version": "1.0.0",
  "description": "A simple package",
  "main": "bin/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "raphael mansuy",
  "license": "MIT"
}
```

✅ Configure compilation from typescript to javascript

Create a file called **tsconfig.json** as follow:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2017",
    "lib": ["es2015"],
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "bin",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*", "src/types/*"]
    },
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  },
  "include": ["src/**/*"]
}
```

✅ Create a **src** directory and move the **index.ts** in the **./src** directory

```bash
$ mkdir ./src
$ mv ./index.ts ./src
```

Results:

```bash
.
├── package.json
├── src
│   └── index.ts
└── tsconfig.json

1 directory, 3 files

```

✅ Add typescript support for the compilation

```bash
$ yarn add typescript @types/node -D
```

Result:

```bash
yarn add v1.22.10
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 2 new dependencies.
info Direct dependencies
├─ @types/node@14.14.20
└─ typescript@4.1.3
info All dependencies
├─ @types/node@14.14.20
└─ typescript@4.1.3
✨  Done in 1.44s.
```

The **package.json** should look like this:

```json
{
  "name": "pique-sous",
  "version": "1.0.0",
  "description": "A simple package",
  "main": "bin/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "raphael mansuy",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^14.14.20",
    "typescript": "^4.1.3"
  }
}
```

✅ Edit the **package.json** as follow

👉 add "bin" entry with value "bin/index.js"
👉 add "build" command in "scripts"

```json
{
  "name": "pique-sous",
  "version": "1.0.0",
  "description": "A simple package",
  "main": "bin/index.js",
  "bin": "bin/index.js",
  "scripts": {
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "raphael mansuy",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^14.14.20",
    "typescript": "^4.1.3"
  }
}
```

✅ Edit the **index.ts** as follow

👉 replace npx ts-node by node because the result of the compilation by typescript compiler will be a javascript file

```typescript
#!/usr/bin/env node

const currentDateTime = new Date().toISOString()

console.log(currentDateTime)
```

✅ Build

```bash
yarn build
```

Results:

```bash
yarn run v1.22.10
$ tsc
✨  Done in 1.66s.
```

The bin directory contains now the outcome of the compilation process:

```bash
$ tree ./bin
./bin
├── index.js
└── index.js.map

0 directories, 2 files
```

✅ Make **./bin/index.js** executable

```bash
chmod u+x ./bin/index.js
```

✅ Test the result

```bash
./bin/index.js
```

Result:

```bash
❯ pique-sous
2021-01-10T04:33:08.303Z
```

## Step 4: publish the command locally

🔥 The command can now be made available for use locally:

```bash
$ yarn link --global
```

Result:

```bash
yarn link v1.22.10
success Registered "pique-sous".
info You can now run `yarn link "pique-sous"` in the projects where you want to use this package and it will be used instead.
✨  Done in 0.04s.
```

🎉 💪 We can now use the command from everywhere

```bash
❯ pique-sous
2021-01-10T05:45:10.586Z
```

🌈 🙈 We can unregister the command with:

```bash
$ yarn unlink --global
```

## Step 5: publish the cli command on www.npmjs.org

👉 First, you need to signup and create an account on [https://www.npmjs.com/](https://www.npmjs.com/)
👉 🧨 You need to be sure that the name of your package is not taken on npmjs.com, the name of the package in the package.json must be modified it the name already exists on npm.

Type the following command in the base directory:

```bash
$ npm publish
```

Enter your npm credentials

Result:

```bash
npm notice
npm notice 📦  pique-sous@1.0.0
npm notice === Tarball Contents ===
npm notice 133B bin/index.js
npm notice 198B bin/index.js.map
npm notice 372B package.json
npm notice 100B src/index.ts
npm notice 364B tsconfig.json
npm notice === Tarball Details ===
npm notice name:          pique-sous
npm notice version:       1.0.0
npm notice filename:      pique-sous-1.0.0.tgz
npm notice package size:  810 B
npm notice unpacked size: 1.2 kB
npm notice shasum:        6c8aea7b85c125a2d9dbbeec81d15ef94b07240a
npm notice integrity:     sha512-ozbnViT18DSUI[...]FquBcXBSV8f2g==
npm notice total files:   5
npm notice
```

**Your command is now published on npm** and be installed or executed from everywhere.

Example:

Execution without formal installation:

```bash
npx pique-sous
```

Or global installation:

```bash
npm install -g pique-sous
```

## Step 6: Add Yahoo finance get stocks information

✅ Install axios library

```bash
yarn add axios
```

✅ Add file ./src/getStock.ts

```typescript
import axios from "axios"

export const getSingleStockInfo = async (stock: string) => {
  if (!stock) {
    throw new Error("Stock symbol argument required")
  }

  if (typeof stock !== "string") {
    throw new Error(
      `Invalid argument type for stock argument. Required: string. Found: ${typeof stock}`
    )
  }

  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stock}`

  const res = await axios.get(url)

  const { data } = res
  if (
    !data ||
    !data.quoteResponse ||
    !data.quoteResponse.result ||
    data.quoteResponse.result.length === 0
  ) {
    throw new Error(`Error retrieving info for symbol ${stock}`)
  }

  const quoteResponse = data.quoteResponse.result[0]

  return quoteResponse
}
```

✅ Add file "./src/getVersion.ts"

```typescript
import * as fs from "fs"
import * as Path from "path"

export const getVersion = () => {
  const packageJSONPath = Path.resolve(__dirname, "../package.json")
  const content = fs.readFileSync(packageJSONPath, { encoding: "utf8" })
  const config = JSON.parse(content)
  return config.version
}
```

✅ Modify ./src/index.ts

```typescript
#!/usr/bin/env node

import { getSingleStockInfo } from "./getStock"
import { getVersion } from "./getVersion"

/**
 *  return the arguments of the command except node and index.ts
 */
const getArgs = () => {
  // We retrieve all the command argumnts except the first 2
  const args = process.argv.slice(2)
  return args
}

/**
 * Command Help
 */
const printCommandHelp = () => {
  const version = getVersion()
  const help = `
pique-sous (version: ${version})

A simple command to retrieve stock information.

Example:

$ pique-sous MSFT SFIX GOOG

`
  console.log(help)
}

const symbols = getArgs()

// Print help if no arguments
if (symbols.length === 0) {
  printCommandHelp()
  getVersion()
  process.exit(0)
}

const now = new Date().toISOString()

// Call the yahoo API for each symbol and display the result on the console
symbols.forEach((symbol) => {
  console.log(`Retrieving stock information for ${symbol} at date ${now}`)
  getSingleStockInfo(symbol).then(console.log)
})
```

✅ Increment the version number in package.json to 1.1.0 ("version")

```json
{
  "devDependencies": {
    "@types/axios": "^0.14.0",
    "@types/node": "^14.14.20"
  },
  "name": "pique-sous",
  "version": "1.1.0",
  "description": "A simple command to retrieve stock information",
  "main": "./bin/index.js",
  "dependencies": {
    "axios": "^0.21.1",
    "typescript": "^4.1.3"
  },
  "bin": "bin/index.js",
  "scripts": {
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["cli", "node", "typescript", "npm", "stock", "yahoo finance"],
  "contributors": ["raphaelmansuy"],
  "repository": {
    "url": "https://github.com/raphaelmansuy/pique-sous.git",
    "type": ""
  },
  "author": {
    "email": "raphael.mansuy@gmail.com",
    "name": "raphaelmansuy"
  },
  "license": "MIT"
}
```

✅ Build a new version

```bash
$ yarn build
```

✅ Test locally

Publish the component:

```bash
$ yarn link --global
```

✅ Execute

```bash
$ pique-sous MSFT
```

Result:

```bash
Retrieving stock information for MSFT at date 2021-01-10T06:11:41.305Z
{
  language: 'en-US',
  region: 'US',
  quoteType: 'EQUITY',
  quoteSourceName: 'Delayed Quote',
  triggerable: true,
  currency: 'USD',
  exchange: 'NMS',
  shortName: 'Microsoft Corporation',
  longName: 'Microsoft Corporation',
  messageBoardId: 'finmb_21835',
  exchangeTimezoneName: 'America/New_York',
  exchangeTimezoneShortName: 'EST',
  gmtOffSetMilliseconds: -18000000,

  ...
```

🔥🔥🔥 The package can now be republished on **npm** 💪.
