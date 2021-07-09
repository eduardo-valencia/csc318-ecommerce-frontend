import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'

import { CartItem } from '../../../contexts/CartContext'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      marginRight: '0.75rem',
      fontSize: '0.875rem',
    },
    number: {
      padding: '0.375rem 0.4375rem 0.125rem',
      borderRadius: '0.125rem',
      backgroundColor: '#E1E1E1',
      color: 'white',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  quantity: CartItem['quantity']
}

const Amount = ({ classes, quantity }: Props) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Amount</Typography>
      <Typography className={classes.number}>{quantity}</Typography>
    </div>
  )
}

export default withStyles(styles)(Amount)
