import React from "react"
import SEO from "./seo"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import { Location } from "@reach/router"

export const SiteSEO = () => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteName,
    siteLanguage,
    siteLocale,
    titleSeparator,
    authorName,
    twitterUsername,
  } = useSiteMetadata()

  return (
    <Location>
      {({ location }) => (
        <SEO
          title={title}
          titleTemplate={siteName}
          description={description || `nothin’`}
          image={`${siteUrl}${image}`}
          pathname={`${siteUrl}${location.pathname}`}
          author={authorName}
          siteLanguage={siteLanguage}
          siteLocale={siteLocale}
          titleSeparator={titleSeparator}
          twitterUsername={twitterUsername}
        />
      )}
    </Location>
  )
}
