module.exports = {
  siteMetadata: {
    title: 'frontend',
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000,
        collectionTypes: [`products`, `categories`, 'colors', 'sizes'],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-material-ui',
  ],
}
