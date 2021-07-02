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
import { FullProduct } from '../api/types/Product'
import Images from './Images'
import Options from './Options'

const styles = () => {
  return createStyles({})
}

interface Data {
  strapiProducts: FullProduct
}

interface Props extends WithStyles<typeof styles> {
  data: Data
}

const ProductPage = ({ classes, data: { strapiProducts: product } }: Props) => {
  const { name, images, sizes, colors } = product
  return (
    <Layout nav={<Nav name={name} />}>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <Container>
        <Images images={images} />
        <Options sizes={sizes} colors={colors} />
      </Container>
    </Layout>
  )
}

export default withStyles(styles)(ProductPage)
