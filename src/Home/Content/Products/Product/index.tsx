import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'

import Product from '../../../../api/types/Product'
import { formatPrice } from '../../../../utils/price'
import QuantityButtons from './QuantityButtons'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ProductLink from './ProductLink'
import { quantityButtonWidth } from '../../../../constants/dimensions'

const styles = () => {
  const paddingX: string = '0.875rem'
  const borderRadius = '0.625rem'
  return createStyles({
    root: {
      listStyle: 'none',
      width: 'calc(50% - 0.625rem / 2)',
      position: 'relative',
      marginBottom: '0.625rem',
    },
    content: {
      boxShadow: '#00000029 0 0.1875rem 0.375rem',
      borderRadius,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '13.375rem',
    },
    top: {
      display: 'flex',
      alignItems: 'center',
      padding: `0.9375rem ${paddingX}`,
    },
    price: {
      color: '#304A4E',
      fontSize: '1.125rem',
    },
    bottom: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingLeft: paddingX,
    },
    name: {
      textTransform: 'uppercase',
      fontSize: '0.875rem',
      color: '#304A4E',
      marginRight: '0.25rem',
      marginBottom: '0.6875rem',
      width: `calc(100% - ${quantityButtonWidth})`,
    },
    image: {
      borderRadius,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -1,
    },
  })
}

interface Props extends WithStyles<typeof styles>, Product {}

const ProductItem = ({ classes, price, name, slug, thumbnail }: Props) => {
  const formattedPrice: string = formatPrice(price)
  const image = getImage(thumbnail.localFile)

  return (
    <li className={classes.root}>
      <ProductLink slug={slug}>
        <div className={classes.content}>
          <GatsbyImage
            image={image}
            alt={thumbnail.alternativeText}
            className={classes.image}
          />
          <div className={classes.top}>
            <Typography className={classes.price}>{formattedPrice}</Typography>
          </div>
          <div className={classes.bottom}>
            <Typography className={classes.name}>{name}</Typography>
          </div>
        </div>
      </ProductLink>
      <QuantityButtons slug={slug} />
    </li>
  )
}

export default withStyles(styles)(ProductItem)
