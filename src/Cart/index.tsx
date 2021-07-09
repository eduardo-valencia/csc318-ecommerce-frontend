import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Nav from './Nav'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {}

const Cart = ({ classes }: Props) => {
  return (
    <Layout nav={<Nav />}>
      <Helmet>
        <title>Cart</title>
      </Helmet>
    </Layout>
  )
}

export default withStyles(styles)(Cart)
