import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Container,
} from '@material-ui/core'

import ProductItem from './Product'
import Product from '../../../api/types/Product'
import { dotHeight } from '../../../constants/dimensions'

const styles = () => {
  return createStyles({
    root: {
      marginTop: `calc(0.8125rem + ${dotHeight})`,
    },
    list: {
      paddingLeft: 0,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  products: Product[]
}

const Products = ({ classes, products }: Props) => {
  const renderItem = (product: Product): JSX.Element => {
    return <ProductItem {...product} key={product.slug} />
  }

  const renderedProducts: JSX.Element[] = products.map(renderItem)

  return (
    <section className={classes.root}>
      <Container>
        <ul className={classes.list}>{renderedProducts}</ul>
      </Container>
    </section>
  )
}

export default withStyles(styles)(Products)
