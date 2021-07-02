import React, { useState } from 'react'
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
import CartNotification from './CartNotification'
import {
  CloseCartNotification,
  OpenCartNotification,
  ShowCartNotification,
} from './types'

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
  const [showCartNotification, setShowCartNotification] =
    useState<ShowCartNotification>(false)

  const openCartNotification: OpenCartNotification = () =>
    setShowCartNotification(true)

  const closeCartNotification: CloseCartNotification = () =>
    setShowCartNotification(false)

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
        <CartNotification
          showCartNotification={showCartNotification}
          closeCartNotification={closeCartNotification}
        />
        <AddToCart slug={slug} openCartNotification={openCartNotification} />
        <Description description={description} />
      </Container>
    </Layout>
  )
}

export default withStyles(styles)(ProductPage)
