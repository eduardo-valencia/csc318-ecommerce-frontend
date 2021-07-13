import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { CartContext } from '../contexts/CartContext'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {}

const Total = ({ classes }: Props) => {
  const { cart } = useContext(CartContext)!

  const addTotal = { quantity }
}

export default withStyles(styles)(Total)
