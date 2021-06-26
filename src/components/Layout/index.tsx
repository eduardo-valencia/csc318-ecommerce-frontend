import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { Helmet } from 'react-helmet'

import BottomNav from './BottomNav'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {
  nav: React.ReactNode
  children: React.ReactNode
}

const Layout = ({ classes, children, nav }: Props) => {
  return (
    <>
      <Helmet>
        <link rel='stylesheet' href='https://use.typekit.net/mtx1big.css' />
      </Helmet>
      {nav}
      <main>{children}</main>
      <BottomNav />
    </>
  )
}

export default withStyles(styles)(Layout)
