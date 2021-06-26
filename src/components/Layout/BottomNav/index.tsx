import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  AppBar,
  Toolbar,
} from '@material-ui/core'
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Item from './Item'

const styles = () => {
  const minHeight: number = 0
  const paddingY: string = '1.6875rem'
  return createStyles({
    root: {
      minHeight,
      bottom: 0,
      top: 'auto',
      paddingTop: paddingY,
      paddingBottom: paddingY,
    },
    toolbar: {
      minHeight,
    },
    list: {
      paddingLeft: 0,
      margin: 0,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const BottomNav = ({ classes }: Props) => {
  return (
    <AppBar className={classes.root} position='fixed' color='primary'>
      <Toolbar className={classes.toolbar}>
        <ul className={classes.list}>
          <Item icon={faHome} href='/' />
          <Item icon={faShoppingCart} href='/cart' />
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(BottomNav)
