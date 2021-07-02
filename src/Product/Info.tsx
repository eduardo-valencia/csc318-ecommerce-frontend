import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'
import Product from '../api/types/Product'
import { formatPrice } from '../utils/price'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.875rem',
    },
    name: {
      fontWeight: 'bold',
      fontSize: '1.25rem',
      lineHeight: '1.6875rem',
    },
    price: {
      fontSize: '1.125rem',
      lineHeight: '1.625rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  name: Product['name']
  price: Product['price']
}

const Info = ({ classes, name, price }: Props) => {
  const formattedPrice: string = formatPrice(price)
  return (
    <div className={classes.root}>
      <Typography className={classes.name}>{name}</Typography>
      <Typography className={classes.price}>{formattedPrice}</Typography>
    </div>
  )
}

export default withStyles(styles)(Info)
