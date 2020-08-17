const siteMetadata = {
  title: `Elitizon Limited Corporate WebSite`,
  description: `Elitizon Corporate WebSite.`,
  image: `/default-site-image.jpg`,
  siteUrl: `https://elitizon.com`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@elitizon_ltd`,
  authorName: `Elitizon`,
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
      options: { path: `${__dirname}/posts`, name: `posts` },
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
    }
  ],
}
