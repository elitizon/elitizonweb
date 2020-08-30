import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import tw from "twin.macro"
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts"
import SEO from "../components/misc/seo"
import AnimationRevealPage from "../helpers/AnimationRevealPage.js"
import Header from "../components/headers/light.js"
import Footer from "../components/footers/FiveColumnWithInputForm.js"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { SectionHeading } from "../components/misc/Headings"
import { formatDate } from "../utils/formatDate"
import ArrowRightIcon from "../images/arrow-right-2-icon.svg"
import ArrowLeftIcon from "../images/arrow-left-2-icon.svg"

const HeadingRow = tw.div`flex`
const Heading = tw(SectionHeading)`text-gray-800`
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`

const PostContent = tw.div``

const PostsNavigation = tw.div`flex flex-row justify-start space-x-12 mt-16`
const LinkPage = tw(
  Link
)`cursor-pointer flex flex-row items-center justify-around space-x-4 bg-gray-100 rounded-lg px-4 py-2 font-bold text-primary-500 border-b-2 border-transparent hocus:border-primary-500 hocus:text-primary-800 transition duration-300`

export default ({ data, pageContext }) => {
  const {
    image,
    siteUrl,
    siteName, 
    titleSeparator,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata()
  const { frontmatter, body, fields, excerpt } = data.mdx
  const { title, date, cover, category } = frontmatter
  const { previous, next } = pageContext

  const formatedDate = formatDate(date)
  const publishedDate = new Date(date).toISOString()

  return (
    <>
      <SEO
        title={title}
        titleTemplate={siteName}
        titleSeparator={titleSeparator}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={publishedDate}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <AnimationRevealPage>
        <Header noanimation />
        <Container noanimation>
          <ContentWithPaddingXl>
            <PostContent className="markdown">
              <MDXRenderer>{body}</MDXRenderer>
            </PostContent>
          </ContentWithPaddingXl>
        </Container>
        <Footer noanimation />
      </AnimationRevealPage>
    </>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date
        cover {
          publicURL
        }
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`
