import React, { useContext } from 'react'
import {
  Theme,
  withStyles,
  WithStyles,
  createStyles,
  IconButton,
  IconButtonProps,
} from '@material-ui/core'
import Product from '../../../../../api/types/Product'
import { CartContext } from '../../../../../contexts/CartContext'
import { QuantityButtonProps } from './types'

const styles = ({
  palette: {
    primary: { contrastText },
  },
}: Theme) => {
  return createStyles({
    root: {
      padding: 0,
      color: contrastText,
    },
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Omit<IconButtonProps, 'classes' | 'children'>,
    QuantityButtonProps {
  incrementAmount: number
  children: React.ReactNode
}

const IncrementButton = ({
  slug,
  classes,
  children,
  incrementAmount,
  ...other
}: Props) => {
  const { alterQuantity, addToCart } = useContext(CartContext)

  const handleClick = (): void => {
    if (incrementAmount >= 1) {
      return addToCart(slug, incrementAmount)
    }
    return alterQuantity(slug, -1)
  }

  return (
    <IconButton classes={classes} onClick={handleClick} {...other}>
      {children}
    </IconButton>
  )
}

export default withStyles(styles)(IncrementButton)
