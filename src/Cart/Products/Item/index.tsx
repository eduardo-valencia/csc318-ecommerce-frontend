import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'
import { Link } from 'gatsby'

import { CartItem } from '../../../contexts/CartContext'
import { getProductLink } from '../../../utils/links'
import Product from '../../../api/types/Product'
import { findProductBySlug } from '../../../utils/find'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatPrice } from '../../../utils/price'
import Amount from './Amount'
import RemoveButton from './RemoveButton'

const styles = () => {
  return createStyles({
    root: {
      listStyle: 'none',
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '0.375rem 0.5rem',
      display: 'flex',
      alignItems: 'center',
      '& + &': {
        marginTop: '0.625rem',
      },
    },
    body: {
      flexGrow: 1,
    },
    title: {
      fontSize: '1.125rem',
      marginBottom: '0.4375rem',
    },
    priceAndAmount: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
    },
    price: {
      color: '#24C277',
      fontSize: '1.125rem',
      marginRight: '2.25rem',
    },
    thumbnail: {
      width: '5.3125rem',
      borderRadius: '1rem',
      marginRight: '1rem',
    },
    link: {
      textDecoration: 'none',
    },
    bottom: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
}

interface Props extends WithStyles<typeof styles>, CartItem {
  products: Product[]
}

const Item = ({ classes, quantity, slug, products }: Props) => {
  const product: Product | undefined = findProductBySlug(products)(slug)

  if (!product) return null

  const {
    name,
    price,
    thumbnail: { localFile, alternativeText },
  } = product

  const image = getImage(localFile)
  const formattedPrice: string = formatPrice(price)
  const href: string = getProductLink(slug)

  return (
    <li className={classes.root}>
      <GatsbyImage
        image={image}
        alt={alternativeText}
        className={classes.thumbnail}
      />
      <div className={classes.body}>
        <Link to={href} className={classes.link}>
          <Typography component='h2' className={classes.title}>
            {name}
          </Typography>
        </Link>
        <div className={classes.priceAndAmount}>
          <Typography className={classes.price}>{formattedPrice}</Typography>
          <Amount quantity={quantity} />
        </div>
        <div className={classes.bottom}>
          <RemoveButton slug={slug} />
        </div>
      </div>
    </li>
  )
}

export default withStyles(styles)(Item)
