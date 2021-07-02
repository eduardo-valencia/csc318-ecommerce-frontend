import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Container,
} from '@material-ui/core'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Nav from './Nav'
import Product from '../api/types/Product'
import Images from './Images'

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
  const { name, images } = product
  return (
    <Layout nav={<Nav name={name} />}>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <Container>
        <Images images={images} />
        <h1>Hello</h1>
      </Container>
    </Layout>
  )
}

export default withStyles(styles)(ProductPage)
