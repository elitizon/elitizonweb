import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
     query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            description
            title
            image
            siteUrl
            siteName
            titleSeparator
            siteLanguage
            siteLocale
            twitterUsername
            authorName
            linkedinPage
            facebookPage
            twitterPage
            youtubePage
          }
        }
      }
    `
  )
  return site.siteMetadata
}
