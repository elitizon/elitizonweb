const siteMetadata = {
  title: `We are a Technology Venture Studio`,
  description: `We leverage specific knowledge, teams and capital to launch elite companies. Our mission is driven by turning ideas into products that delight users and products into companies loved by customers.`,
  image: `/images/default-site-image.jpg`,
  siteUrl: `https://www.elitizon.com`,
  siteName: `elitizon`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@ElitizonLtd`,
  titleSeparator: `|`,
  authorName: `Elitizon Limited`,
  linkedinPage: `https://www.linkedin.com/company/elitizon`,
  facebookPage: `https://business.facebook.com/elitizonltd/`,
  twitterPage: `https://twitter.com/ElitizonLtd`,
  youtubePage: ``,
}

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = siteMetadata.siteUrl,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-svgr-loader",
      options: {
        rule: {
          include: /\.svg$/, // // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        host: `${siteMetadata.siteUrl}`,
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
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
        icon: `src/images/elitizon-icon.svg`,
      },
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
              maxWidth: 2000,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
            },
          },
        ],
      },
    },
    {
      // Get all the MDX file for the blog 
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/data/blog`, name: `post` },
    },
    {
      // Get all the MDX file for the  pages 
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/data/pages`, name: `page` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/images`, name: `images` },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/test*`, `/path/to/page`, `/404/*`],
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
        resolveSiteUrl: ({ site, allSitePage }) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map((node) => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-176789635-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-176789635-1",
          // Setting this parameter is optional
          anonymize: true,
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      // We use mailchimp for the newsletter subscription form
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us17.list-manage.com/subscribe/post?u=b8e46dbefe081c2d2f2adc637&amp;id=237ff03d29", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
}
