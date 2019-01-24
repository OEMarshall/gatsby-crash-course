// This is the main settings file
// You can also store vars that are global to the enite site
module.exports = {
  siteMetadata: {
    //
    title: `Gatsby Plaground`,
    description: `Gatsby website created though 2 different tutorials.`,
    author: `@OEMarshall`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
      resolve:'gatsby-source-filesystem', //grants gatsby access to filesystem
      options: {
        name:'src',
        path: `${__dirname}/src/`
      },
    },
    'gatsby-transformer-remark', //utility plugin for markdown
    'gatsby-plugin-catch-links', //intercept local .md links
   // install gatsby plugins from gasby official page. 
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
