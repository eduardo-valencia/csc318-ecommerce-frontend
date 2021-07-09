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
import Products from './Products'
import Checkout from './Checkout'

const styles = () => {
  return createStyles({
    container: {
      marginTop: '1.5rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Cart = ({ classes }: Props) => {
  return (
    <Layout nav={<Nav />}>
      <Container className={classes.container}>
        <Helmet>
          <title>Cart</title>
        </Helmet>
        <Products />
        <Checkout />
      </Container>
    </Layout>
  )
}

export default withStyles(styles)(Cart)
