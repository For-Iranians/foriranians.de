module.exports = {
  siteMetadata: {
    title: `برای ایرانی‌های آلمان`,
    description: '',
    author: ''
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