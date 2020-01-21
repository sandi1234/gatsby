require("dotenv").config({
  path: '.env',
})

module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `Busoganordic`,
    description: `This is Tango Brand Alliances site.`,
    author: `@bunda`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // includedRoutes: [
        //   "**/categories",
        //   "**/posts",
        //   "**/pages",
        //   "**/media",
        //   "**/tags",
        //   "**/taxonomies",
        //   "**/users",
        //   "**/*/*/menus",
        //   "**/*/*/project",
        //   "**/*/*/teammember"
        // ],
        excludedRoutes: [
          '/wp/v2/users/**',
          '/wp/v2/settings*',
          '/wp/v2/themes*',
        ],
        baseUrl: process.env.API_URL,
        protocol: process.env.API_PROTOCOL,
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: process.env.API_URL,
          replacementUrl: '',
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
