import React, { useContext } from 'react'
import { Button, withStyles, WithStyles, createStyles } from '@material-ui/core'
import StripeCheckout, { Token } from 'react-stripe-checkout'

import { bottomNavHeight } from '../constants/dimensions'
import { createOrder } from '../api/ orders'
import { CartContext } from '../contexts/CartContext'

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
  const { cart } = useContext(CartContext)!

  const handleToken = async (token: Token): Promise<void> => {
    await createOrder({ name: token.email, token, products: cart })
  }

  return (
    <StripeCheckout
      token={handleToken}
      stripeKey={process.env.GATSBY_STRIPE_KEY}
    >
      <Button variant='contained' classes={classes} fullWidth>
        Checkout
      </Button>
    </StripeCheckout>
  )
}

export default withStyles(styles)(Checkout)
