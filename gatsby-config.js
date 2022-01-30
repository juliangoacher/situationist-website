module.exports = {
  siteMetadata: {
    title: `situationist-website`,
      siteUrl: `https://situationi.st`,
  },
  plugins: [
    {
      // https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: '301762739',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Defers execution of google analytics script after page load
        defer: true
      }
    }
  ]
}
