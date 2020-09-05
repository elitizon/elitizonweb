---
title: How to query Shopify with the GraphQL API and Insomnia
posttype: blog
date: 2020-09-04
summary: Shopify provides a complete GraphQL API to access and modify stored in the back-office. This article explores how to query Shopify with an API Client such as Insomnia
published: true
cover: ./cover.jpg
category: Development
featured: true
coverCredit: Raphaël MANSUY
---

## What problem do we solve

[Shopify](https://www.shopify.com) provides an API that can be used to implement:

- A mobile application connected to a Shopify Front Store
- An integration pipeline with an external system such as a product management systems (PIM) or an enterprise resource planning (ERP)

**The** **Shopify API is proposed with 2 flavors:**

- [REST](https://shopify.dev/concepts/graphql)
- [GraphQL](https://graphql.org/)

GraphQL is now Shopify's technology of choice for building API. This article describes how to query Shopify with GraphQL using [Insomnia Core](https://insomnia.rest/) a powerful API client developed by the company [Kong](https://konghq.com/)

### The graphQL API

The Shopify test API is available at this **EndPoint**:

```bash
https://shopify.dev/tools/graphiql-admin-api
```

This endpoint can be used to experiment and play with Shopify GraphQL API.

![i.png](./images/i.png)

 Below a GraphQL query that returns the first 10 products:

```graphql
{
  products(first: 2) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        handle
        descriptionHtml
      }
    }
  }
}
```

Result:

```json
{
  "data": {
    "products": {
      "pageInfo": {
        "hasNextPage": true,
        "hasPreviousPage": false
      },
      "edges": [
        {
          "cursor": "eyJsYXN0X2lkIjoxOTc0MjA4Mjk5MDMwLCJsYXN0X3ZhbHVlIjoiMTk3NDIwODI5OTAzMCJ9",
          "node": {
            "handle": "rough-snowflake-camisole",
            "descriptionHtml": ""
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjoxOTc0MjA4MzMxNzk4LCJsYXN0X3ZhbHVlIjoiMTk3NDIwODMzMTc5OCJ9",
          "node": {
            "handle": "wandering-thunder-blouse",
            "descriptionHtml": ""
          }
        }
      ]
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 4,
      "actualQueryCost": 4,
      "throttleStatus": {
        "maximumAvailable": 1000,
        "currentlyAvailable": 996,
        "restoreRate": 50
      }
    }
  }
}
```

The [GraphQL API in Shopify](https://shopify.dev/docs/admin-api/graphql/getting-started#the-graphql-endpoint) for production is available at this endpoint:

```bash
https://**{{ SHOPIFY_SHOP }}**.myshopify.com/admin/api/2020-07/graphql.json
```

**{{ SHOPIFY_SHOP }}** represents the name of the Shopify instance. This endpoint is secure by default.

In order to query Shopify from an application such as a Web Application or a mobile application we need to create a **Private Application.**

### Creation of a "Private Application" in Shopify

A link "**Managed private apps**" is available in the "**Apps**" section of Shopify.

![i1.png](./images/i1.png)

**A private application is characterized by:**

- The name of the developer
  - The email of the developer for support
- A list of permissions

  The Read / Write access policy on each entity defined in the Shopify Back-office

  - Customers
  - Orders
  - Products
  - Price Rules
  - Analytics
    - Shippings

**The API is divided into 2 parts:**

- The admin API that gives access to all the entities
- The storefront API used to develop customized customer-facing experiences on web or mobile

Creation of a private application

In **Apps** click on the button "**Create new private app"**

![i2.png](./images/i2.png)

Enter the name of the application and the e-mail support:

![i3.png](./images/i3.png)

Configure the security policy for each entity

![i4.png](./images/i4.png)

Click save and create App on the dialog.

Obtain the security parameters

![i5.png](./images/i5.png)

- **API Key** : represents the logical user identity of the application
- **Password** : the password used by the application
- **Shared Secret** : used a token in each programmatic call

Once we have an application we can use an API client to test and create our graphQL queries.

## Insomnia Core

[Insomnia Core](https://insomnia.rest/) is a very powerful Desktop API Client for REST and GraphQL tool to explore and test REST and GraphQL Apis. Insomnia can be downloaded at : [https://insomnia.rest/](https://insomnia.rest/)

![6.png](./images/i6.png)

### Workspace creation in Insomnia

Click create new "Workspace"

![7.png](./images/i7.png)

Workspaces are a core concept used for isolating projects within Insomnia.

- The variable and secrets shared can be stored in an Environment.
- The environment can be used to store environment variables, that are referenced and used by each query in a workspace.

For example for our example we store the following definitions:

```json
{
  "SHOPIFY_SHOP": "test",
  "SHOPIFY_ACCESS_TOKEN": "FF",
  "SHOPIFY_API_KEY": "X",
  "SHOPIFY_PASSWORD": "X"
}
```

### Create of a GraphQL in a Workspace

In our Workspace choose the action button create **"New Request"**

![08.png](./images/i8.png)

Edit the name of the request and chose **"POST"** method:

![09.png](./images/i9.png)

Type the URL

![10.png](./images/i10.png)

**SHOPIFY_SHOP** represents the variable we have created in the Environment.

Configure the GraphQL Query

```graphql
{
  products(first: 3) {
    edges {
      cursor
      node {
        handle
        title
      }
    }
  }
}
```

![11.png](./images/i11.png)

Configure the security with Basic authentication

Choose the variable "**SHOPIFY_API_KEY**" and "**SHOPIFY_PASSWORD**" for **username** and **password**

![12.png](./images/i12.png)

Create a Header in the query

![13.png](./images/i13.png)

Configure the query to disable the cookies 🍪

> A right-click on the query definition can be used to open the settings of the query

![14.png](./images/i14.png)

**Send cookies** and **store cookies** 🍪 **must be disabled** 🔥

![15](./images/i15.png)

We can now test our query with a click on the **send button** ▶️

![i16.png](./images/i16.png)

### Et Voila 🥳🚀

### Generate a query for your target language

😎 A cool feature of Insomnia is the code generation of a client

![17](./images/i17.png)

![18](./images/i18.png)
