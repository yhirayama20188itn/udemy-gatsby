/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'tutorial',
    description: 'just some description about our site',
    author: '@hirayama',
    data: { name: 'hirayama', age: 28 }
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`]
}
