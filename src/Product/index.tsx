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
import Info from './Info'
import AddToCart from './AddToCart'
import Description from './Description'

const styles = () => {
  return createStyles({
    container: {
      paddingBottom: '1rem',
    },
  })
}

interface Data {
  strapiProducts: FullProduct
}

interface Props extends WithStyles<typeof styles> {
  data: Data
}

const ProductPage = ({ classes, data: { strapiProducts: product } }: Props) => {
  const { name, images, sizes, colors, price, slug, description } = product
  return (
    <Layout nav={<Nav name={name} />}>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <Container className={classes.container}>
        <Images images={images} />
        <Options sizes={sizes} colors={colors} />
        <Info price={price} name={name} />
        <AddToCart slug={slug} />
        <Description description={description} />
      </Container>
    </Layout>
  )
}

export default withStyles(styles)(ProductPage)
