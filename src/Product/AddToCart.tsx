import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles, Button } from '@material-ui/core'
import Product from '../api/types/Product'
import { CartContext } from '../contexts/CartContext'
import { OpenCartNotification } from './types'

const styles = () => {
  const paddingY: string = '1.0625rem'
  return createStyles({
    root: {
      borderRadius: '0.625rem',
      boxShadow: '#00000029 0 0.1875rem 0.375rem',
      paddingTop: paddingY,
      paddingBottom: paddingY,
      fontSize: '1rem',
      fontWeight: 'bold',
      lineHeight: '1.3125rem',
      marginBottom: '2rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  slug: Product['slug']
  openCartNotification: OpenCartNotification
}

const AddToCart = ({ classes, slug, openCartNotification }: Props) => {
  const value = useContext(CartContext)

  if (!value) return null

  const { addToCart } = value

  const handleClick = (): void => {
    addToCart(slug)
    openCartNotification()
  }

  return (
    <Button
      variant='contained'
      color='primary'
      onClick={handleClick}
      fullWidth
      classes={classes}
    >
      Buy Now
    </Button>
  )
}

export default withStyles(styles)(AddToCart)
