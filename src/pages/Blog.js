import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro"
import { SectionHeading } from "../components/misc/Headings"
import { PrimaryButton } from "../components/misc/Buttons"
import { Page } from "../components/Page"

import { formatDate } from "../utils/formatDate"

const HeadingRow = tw.div`flex`
const Heading = tw(SectionHeading)`text-gray-900`
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${ImageContainer} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`
const ImageContainer = styled.div`
  ${tw`h-64 w-full rounded-t-lg`}
`
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`
const Description = tw.div``

const ButtonContainer = tw.div`flex justify-center`
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`

const getPosts = (data) => {
  return data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => {
    const { title, category, date, summary, cover, featured } = frontmatter

    return {
      id,
      imageSrc: cover ? cover.publicURL : "",
      category: category,
      date: formatDate(date),
      title: title,
      description: summary || excerpt,
      imageSizes: cover?.childImageSharp.sizes,
      url: fields.slug,
      featured: featured || false,
    }
  })
}

export default ({ headingText = "Blog Posts", data }) => {
  const [visible, setVisible] = useState(7)
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6)
  }
  const posts = getPosts(data)
  return (
    <Page>
      <Container noanimation>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Link to={post.url}>
                  <Post className="group">
                    {!!post.imageSizes ? (
                      <ImageContainer tw="overflow-hidden">
                        <Img tw="h-full w-full" sizes={post.imageSizes} />
                      </ImageContainer>
                    ) : null}
                    <Info>
                      <Category>{post.category}</Category>
                      <CreationDate>{post.date}</CreationDate>
                      <Title>{post.title}</Title>
                      {post.featured && post.description && (
                        <Description>{post.description}</Description>
                      )}
                    </Info>
                  </Post>
                </Link>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>
                Load More
              </LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
    </Page>
  )
}

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Travel Guide",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com",
})

export const query = graphql`
  query SITE_BLOG_QUERY {
    allMdx(
      sort: { fields: [frontmatter___featured,frontmatter___date], order: [DESC,DESC] }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          category
          featured
          summary
          date
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 1440, traceSVG: { color: "#FA3366" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
              fluid(maxWidth: 600) {
                sizes
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
