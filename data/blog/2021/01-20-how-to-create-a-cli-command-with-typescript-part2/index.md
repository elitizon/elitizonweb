---
title: Boost your productivity by creating your own CLI command with typescript and OCLIF (Part 2)
posttype: blog
date: 2021-01-20
published: true
cover: ./cover.jpeg
summary: This article is a part of a series that describes how you can leverage typescript, npm, npx, and node to boost your productivity by developing your own command-line interface commands. This article explains how to leverage OCLIF framework to craft a command that delights your end-user 😻.
category: nodejs, typescript, npm, npm, oclif
featured: true
coverCredit:
---

## Context

[OCLIF](https://oclif.io/) is a wonderful framework that makes it easy to develop a professional CLI command. Let's see how we can create a CLI command that will delight your end-user in less than 3 minutes.

The final project is published on [https://github.com/raphaelmansuy/matcha-stock](https://github.com/raphaelmansuy/matcha-stock)

Add a 🌟 on the project if you have enjoyed this tutorial ❤️

```bash
$ matcha-stock -symbol=MSFT
```

## Lets go ! 🚀

### Create a new command with OCLIF (30 seconds ⏰)

```bash
npx oclif single matcha-stock
cd matcha-stock
./bin.run
```

**Result:**

OCLIF generates a starting project for my command.

```
❯ npx oclif single matcha-stock

     _-----_     ╭──────────────────────────╮
    |       |    │      Time to build a     │
    |--(o)--|    │  single-command CLI with │
   `---------´   │  oclif! Version: 1.16.1  │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

 npm package name matcha-stock
? command bin name the CLI will export matcha-stock
? description A command to get stocks information
? author Raphael MANSUY @raphaelmansuy
? version 0.0.1
? license MIT
? Who is the GitHub owner of repository (https://github.com/OWNER/repo) raphaelmansuy
? What is the GitHub name of repository (https://github.com/owner/REPO) matcha-stock
? Select a package manager yarn
? TypeScript Yes
? Use eslint (linter for JavaScript and Typescript) Yes
? Use mocha (testing framework) Yes
```

**Code created by OCLIF**

```bash
├── README.md
├── bin
│   ├── run
│   └── run.cmd
├── package.json
├── src
│   └── index.ts
├── test
│   ├── index.test.ts
│   ├── mocha.opts
│   └── tsconfig.json
├── tsconfig.json
└── yarn.lock
```

**Content of `src/index.ts`**

```typescript
import { Command, flags } from "@oclif/command"

class MatchaStock extends Command {
  static description = "describe the command here"

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" })
  }

  static args = [{ name: "file" }]

  async run() {
    const { args, flags } = this.parse(MatchaStock)

    const name = flags.name ?? "world"
    this.log(`hello ${name} from ./src/index.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}

export = MatchaStock
```

✅ OCLIF has created a template class that represents the skeleton of my command.

**Starting from the generated code I can:**

- 💪 add **flags** such as **`--symbol`**
- 🏗 modify the behavior the **`run()`** method

### Add the support of the flag `--symbol` (40 seconds ⏰)

```typescript
import { Command, flags } from "@oclif/command"

class MatchaStock extends Command {
  static description =
    "A simple command to retrieve stock information from Yahoo Finance"

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    // Add Support of of -symbol flag
    // flag with a value (-s, --symbol=VALUE)
    symbol: flags.string({
      char: "s", // Alias for my flag
      description: "stock symbol to retrieve", // A description of the symbol flag
      required: true, // The flag symbol is required 👉 The command will abort of the flag is not provide
      helpValue: "MSFT" // An example of flag value (MSFT is the symbol for Microsoft)
    })
  }

  async run() {
    const { args, flags } = this.parse(MatchaStock)

    this.log(`Get Symbol=${flags.symbol} from ./src/index.ts`)
  }
}

export = MatchaStock
```

**I can now test my command**

✅ With no flag

```bash
./bin
```

**result**:

```bash
 ›   Error: Missing required flag:
 ›    -s, --symbol SYMBOL  stock symbol to retrieve
 ›   See more help with --help
```

✅ With flag -help

```bash
./bin -help
```

**result**:

```bash
❯ ./bin/run -help
A simple command to retrieve stock information from Yahoo Finance

USAGE
\$ matcha-stock

OPTIONS
-h, --help show CLI help
-s, --symbol=MSFT (required) stock symbol to retrieve
-v, --version show CLI version
```

✅ With flag `--symbol`

```bash
./bin --symbol GOOG
```

**result**:

```bash
❯ ./bin/run  -symbol=GOOG
Get Symbol=ymbol=GOOG from ./src/index.ts
```

### Add the business logic (60 seconds ⏰)

👉 Add [axios](https://github.com/axios/axios) as our http library.

```bash
yarn add axios
```

👉 Add the file `./src/getStock.ts`

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

👉 Modify the `src/index.ts` file such as:

```typescript
import { Command, flags } from "@oclif/command"
import { getSingleStockInfo } from "./getStocks"
class MatchaStock extends Command {
  static description = `A simple command to retrieve stock information from Yahoo Finance.\nA simple command to retrieve stock information from Yahoo Finance.\n\n Created with ❤️ by Elitizon (https://www.elitizon.com)`

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    // Add Support of of -symbol flag
    // flag with a value (-s, --symbol=VALUE)
    symbol: flags.string({
      char: "s", // Alias for my flag
      description: "stock symbol to retrieve", // A description of the symbol flag
      required: true, // The flag symbol is required 👉 The command will abort of the flag is not provide
      helpValue: "MSFT" // An example of flag value (MSFT is the symbol for Microsoft)
    })
  }

  async run() {
    const { flags } = this.parse(MatchaStock)
    const res = await getSingleStockInfo(flags.symbol)
    // Print the result as tabular
    console.table(res)
  }
}

export = MatchaStock
```

👉 Test the command

```bash
❯ ./bin/run  -s=MSFT
┌───────────────────────────────────┬─────────────────────────┐
│              (index)              │         Values          │
├───────────────────────────────────┼─────────────────────────┤
│             language              │         'en-US'         │
│              region               │          'US'           │
│             quoteType             │        'EQUITY'         │
│          quoteSourceName          │     'Delayed Quote'     │
│            triggerable            │          true           │
│             currency              │          'USD'          │
│    firstTradeDateMilliseconds     │      511108200000       │
│             priceHint             │            2            │
│            marketState            │       'POSTPOST'        │
│      postMarketChangePercent      │       0.31417143        │

```

### Publish the command to [NPM.org](https://www.npmjs.org) (30 seconds ⏰)

```code
npm publish

```

✅ The package is now published on [npm.org](https://www.npmjs.org) at [https://www.npmjs.com/package/matcha-stock](https://www.npmjs.com/package/matcha-stock)

- 👉 You must to change the name of the package if the package is already registered on [NPM](https://npmjs.com).
- 👉 The package version must be updated each time you publish

### Test your command (10 seconds ⏰)

```bash
npm install -g matcha-stock
matcha-stock -s=MSFT
```

## Conclusion

[OCLIF](https://oclif.io/) is an impressive framework. With OCLIF it's easy to create:

- Single-Command CLI
- Multi-command CLI

**Main features**:

- 🕺 Flag/Argument parsing
- 🚀 Super Speed
- 🏗 Include a CLI generator to speed the development of commands
  - Testing Helpers
  - Auto-Documentation
  - Plugins
  - Hooks

OCLIF is available on [Github](https://github.com/oclif) and maintened by [Matt Graham](https://twitter.com/mattgraham), [Paul Elliott](https://github.com/paulelliott) and [Chris Castle](https://github.com/crcastle) and funded by [Heroku](https://www.heroku.com) 🎉
