const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for both blog posts and regular pages
  const result = await graphql(`
    query {
      allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
        nodes {
          fields {
            slug
          }
          fileAbsolutePath
          frontmatter {
            title
            published
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMdx.nodes.filter(node => 
    node.frontmatter.published && 
    node.fileAbsolutePath.includes('/data/blog/')
  )

  const pages = result.data.allMdx.nodes.filter(node => 
    node.frontmatter.published && 
    node.fileAbsolutePath.includes('/data/pages/')
  )

  // Create blog posts
  const blogPostTemplate = path.resolve(`./src/templates/blogPostTemplate.js`)
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

  // Create regular pages
  const pageTemplate = path.resolve(`./src/templates/pageTemplate.js`)
  pages.forEach((page) => {
    createPage({
      path: page.fields.slug,
      component: pageTemplate,
      context: {
        slug: page.fields.slug,
      },
    })
  })
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
