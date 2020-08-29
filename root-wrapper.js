import { MDXProvider } from "@mdx-js/react"
import React from "react"
import Code from "./src/components/Code"
import { Helmet } from "react-helmet"

const components = {
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      )
    }
  },
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)

export const wrapPageElement = ({ element, props }, pluginOptions) => {
  if (pluginOptions && pluginOptions.siteUrl) {
    const myUrl = `${pluginOptions.siteUrl}${props.location.pathname || "/"}${
      props.location.search
    }${props.location.hash}`

    return (
      <>
        <Helmet
          link={[
            {
              rel: "canonical",
              key: myUrl,
              href: myUrl,
            },
          ]}
        />
        {element}
      </>
    )
  }

  return element
}
