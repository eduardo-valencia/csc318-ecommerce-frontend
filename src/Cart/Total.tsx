import React, { useContext } from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'

import { CartContext, CartItem } from '../contexts/CartContext'
import Product from '../api/types/Product'
import { findProductBySlug } from '../utils/find'
import { formatPrice } from '../utils/price'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  products: Product[]
}

const Total = ({ classes, products }: Props) => {
  const { cart } = useContext(CartContext)!

  const addTotal = (total: number, { quantity, slug }: CartItem): number => {
    const product: Product | undefined = findProductBySlug(products)(slug)
    if (product) {
      return total + product.price * quantity
    }
    return total
  }

  const total: number = cart.reduce(addTotal, 0)
  const formattedTotal: string = formatPrice(total)

  return (
    <div className={classes.root}>
      <Typography variant='h2'>Total:</Typography>
      <Typography>{formattedTotal}</Typography>
    </div>
  )
}

export default withStyles(styles)(Total)
