import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { Helmet } from 'react-helmet'

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
    </>
  )
}

export default withStyles(styles)(Layout)
