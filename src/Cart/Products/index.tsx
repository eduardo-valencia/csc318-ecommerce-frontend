import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import Item from './Item'
import { CartContext, CartItem } from '../../contexts/CartContext'

const styles = () => {
  return createStyles({
    root: {
      margin: 0,
      padding: 0,
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Products = ({ classes }: Props) => {
  const { cart } = useContext(CartContext)!

  const renderItem = (item: CartItem): JSX.Element => {
    return <Item {...item} key={item.slug} />
  }

  const renderedItems: JSX.Element[] = cart.map(renderItem)

  return <ul className={classes.root}>{renderedItems}</ul>
}

export default withStyles(styles)(Products)
