module.exports = {
  siteMetadata: {
    title: `situationist-website`,
      siteUrl: `https://situationi.st`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-YN1NVGSLBR'],
        pluginConfig: {
          head: false
        }
      }
    }
  ]
}
