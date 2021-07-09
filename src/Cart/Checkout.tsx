import React from 'react'
import { Button, withStyles, WithStyles, createStyles } from '@material-ui/core'
import { bottomNavHeight } from '../constants/dimensions'

const styles = () => {
  return createStyles({
    root: {
      padding: '0.875rem 0',
      position: 'fixed',
      bottom: bottomNavHeight,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      left: 0,
      right: 0,
      backgroundColor: '#94A8B3',
      color: 'white',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Checkout = ({ classes }: Props) => {
  return (
    <Button variant='contained' classes={classes} fullWidth>
      Checkout
    </Button>
  )
}

export default withStyles(styles)(Checkout)
