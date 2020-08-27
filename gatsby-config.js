const siteMetadata = {
  title: `elitizon | Technology Venture Studio`,
  description: `elitizon is a technology venture studio. We launch 🚀 innovative products.`,
  image: `/default-site-image.jpg`,
  siteUrl: `https://www.elitizon.com`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@ElitizonLtd`,
  authorName: `Elitizon`,
  linkedinPage: `https://www.linkedin.com/company/elitizon`,
  facebookPage: `https://business.facebook.com/elitizonltd/`,
  twitterPage: `https://twitter.com/ElitizonLtd`,
  youtubePage: ``
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-svgr-loader",
      options: {
        rule: {
          include: /\.svg$/ // // See below to configure properly
        }
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `elitizon`,
        short_name: `elitizon`,
        background_color: `#2A3045`,
        theme_color: `#FA3366`,         
        display: `elitizon`,
        icon: `src/images/elitizon-icon.svg`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/data`, name: `data` },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"),require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/test*`, `/path/to/page`,`/404/*`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({site, allSitePage}) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    }
  ],
}
