import React, { useContext } from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import AddButton from './AddButton'
import DecrementButton from './DecrementButton'
import Product from '../../../../../api/types/Product'
import { CartContext } from '../../../../../contexts/CartContext'

const styles = ({
  palette: {
    primary: { main, contrastText },
  },
}: Theme) => {
  const borderRadius = '0.5rem'
  return createStyles({
    root: {
      color: contrastText,
      backgroundColor: main,
      borderTopLeftRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      display: 'flex',
      flexDirection: 'column',
      padding: '1.0625rem 0.875rem',
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    quantity: {
      fontSize: '1.25rem',
      fontWeight: 500,
      margin: '1.25rem 0',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  slug: Product['slug']
}

const QuantityButtons = ({ classes, slug }: Props) => {
  const { findItem } = useContext(CartContext)!

  const getCartQuantity = (): string => {
    const cartItem = findItem(slug)
    const quantity: number = cartItem ? cartItem.quantity : 0
    const quantityString: string = quantity.toString()
    if (quantityString.length < 2) {
      return `0${quantityString}`
    }
    return quantityString
  }

  const formattedQuantity: string = getCartQuantity()

  return (
    <div className={classes.root}>
      <AddButton slug={slug} />
      <Typography className={classes.quantity}>{formattedQuantity}</Typography>
      <DecrementButton slug={slug} />
    </div>
  )
}

export default withStyles(styles)(QuantityButtons)
