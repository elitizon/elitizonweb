import React from "react"
import SEO from "react-seo-component"
import  { default as Button }  from "../components/Button"
import { Layout } from "../components/Layout"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export default ({ data }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()
  return (
    <Layout>
      <SEO
        title={title}
        description={description || `nothin’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
        <div class="flex flex-col justify-center h-full space-y-5 bg-gray-400">
            <Button isPrimary>Submit</Button>
            <Button isSecondary>Cancel</Button>
            <Button isSmall>Close</Button>
            <h1 tw="text-2xl text-blue-500 font-bold">Hello world</h1>
        </div>
    </Layout>
  )
}

