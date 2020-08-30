const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// Create sites pages
const createSitePages = ({ actions, graphql }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve("src/templates/pageTemplate.js")

  const regexFilter = "/.*/data/pages/.*.md(x?)$/i"

  return graphql(`{
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}, 
    filter: {
      frontmatter: {published: {eq: true}}
      fileAbsolutePath: {regex: "${regexFilter}" }
    }
  )
  {
    nodes {
      fileAbsolutePath
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
}`).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.nodes

    // create page for each mdx node
    posts.forEach((post) => {

      createPage({
        path: post.fields.slug,
        component: pageTemplate,
        context: {
          slug: post.fields.slug,
        },
      })
    })
  })
}

// Create the blog pages

const createBlogPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blogPostTemplate.js")

  const regexFilter = "/.*/data/blog/.*.md(x?)$/i"

  return graphql(`{
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}, 
    filter: {
      frontmatter: {published: {eq: true}}
      fileAbsolutePath: {regex: "${regexFilter}" }
    }
  )
  {
    nodes {
      fileAbsolutePath
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
}`).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.nodes

    // create page for each mdx node
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.createPages = ({ actions, graphql }) => {
  return createSitePages({ actions, graphql }) && createBlogPages({actions,graphql})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
