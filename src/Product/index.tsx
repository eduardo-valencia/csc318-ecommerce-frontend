import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Nav from './Nav'
import Product from '../api/types/Product'

const styles = () => {
  return createStyles({})
}

interface Data {
  strapiProducts: Product
}

interface Props extends WithStyles<typeof styles> {
  data: Data
}

const ProductPage = ({ classes, data: { strapiProducts: product } }: Props) => {
  return (
    <Layout nav={<Nav name={product.name} />}>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <h1>Hello</h1>
    </Layout>
  )
}

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
    }
  }
`

export default withStyles(styles)(ProductPage)
