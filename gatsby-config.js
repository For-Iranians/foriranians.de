module.exports = {
  siteMetadata: {
    title: `Dox - Gatsby Theme`,
    description: 'Documentation made easy with Gatsby',
    author: 'MunifTanjim'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-dox',
      options: {
        basePath: '/',
        contentPath: 'docs'
      }
    }
  ]
}