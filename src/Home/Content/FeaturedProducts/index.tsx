import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import FeaturedProduct from './FeaturedProduct'
import Product from '../../../api/types/Product'
import Slider from './Slider'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {
  products: Product[]
}

const FeaturedProducts = ({ classes, products }: Props) => {
  const renderFeaturedProduct = (product: Product): JSX.Element => {
    return <FeaturedProduct {...product} key={product.slug} />
  }

  const renderedProducts: JSX.Element[] = products.map(renderFeaturedProduct)

  return <Slider>{renderedProducts}</Slider>
}

export default withStyles(styles)(FeaturedProducts)
