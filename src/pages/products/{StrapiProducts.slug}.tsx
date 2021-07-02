import { graphql } from 'gatsby'

export const query = graphql`
  query ($id: String) {
    strapiProducts(id: { eq: $id }) {
      name
      description
      thumbnail {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      images {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      sizes {
        name
        id
      }
      colors {
        name
        id
      }
    }
  }
`

export { default } from '../../Product'
