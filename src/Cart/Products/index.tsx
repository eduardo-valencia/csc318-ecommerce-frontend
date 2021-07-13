import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import Item from './Item'
import { CartContext, CartItem } from '../../contexts/CartContext'
import Product from '../../api/types/Product'

const styles = () => {
  return createStyles({
    root: {
      marginBottom: '2rem',
    },
    list: {
      margin: 0,
      padding: 0,
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  products: Product[]
}

const Products = ({ classes, products }: Props) => {
  const { cart } = useContext(CartContext)!

  const renderItem = (item: CartItem): JSX.Element => {
    return <Item {...item} key={item.slug} products={products} />
  }

  const renderedItems: JSX.Element[] = cart.map(renderItem)

  return (
    <section className={classes.root}>
      <ul className={classes.list}>{renderedItems}</ul>
    </section>
  )
}

export default withStyles(styles)(Products)
