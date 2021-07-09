import React, { useContext } from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Container,
  Typography,
} from '@material-ui/core'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Nav from './Nav'
import Products from './Products'
import Checkout from './Checkout'
import { CartContext } from '../contexts/CartContext'

const styles = () => {
  return createStyles({
    container: {
      marginTop: '1.5rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Cart = ({ classes }: Props) => {
  const { cart } = useContext(CartContext)!

  const renderProductsAndCheckout = () => {
    if (cart.length) {
      return (
        <>
          <Products />
          <Checkout />
        </>
      )
    }
    return <Typography>You have no items in your cart.</Typography>
  }

  const productsAndCheckout: JSX.Element = renderProductsAndCheckout()

  return (
    <Layout nav={<Nav />}>
      <Container className={classes.container}>
        <Helmet>
          <title>Cart</title>
        </Helmet>
        {productsAndCheckout}
      </Container>
    </Layout>
  )
}

export default withStyles(styles)(Cart)
