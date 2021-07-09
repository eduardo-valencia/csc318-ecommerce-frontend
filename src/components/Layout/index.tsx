import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { Helmet } from 'react-helmet'

import BottomNav from './BottomNav'
import { bottomNavHeight } from '../../constants/dimensions'
import CategoryContextProvider from '../../contexts/CategoryContext'

const styles = () => {
  return createStyles({
    main: {
      paddingBottom: bottomNavHeight,
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  nav: React.ReactNode
  children: React.ReactNode
}

const Layout = ({ classes, children, nav }: Props) => {
  return (
    <CategoryContextProvider>
      <Helmet>
        <link rel='stylesheet' href='https://use.typekit.net/mtx1big.css' />
      </Helmet>
      {nav}
      <main className={classes.main}>{children}</main>
      <BottomNav />
    </CategoryContextProvider>
  )
}

export default withStyles(styles)(Layout)
