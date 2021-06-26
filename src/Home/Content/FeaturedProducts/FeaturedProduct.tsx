import React from 'react'
import {
  Theme,
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import Product from '../../../api/types/Product'
import { getProductLink } from '../../../utils/links'
import { formatPrice } from '../../../utils/price'

const styles = ({
  palette: {
    text: { secondary, primary },
  },
}: Theme) => {
  const paddingY: string = '0.3125rem'
  return createStyles({
    root: {
      padding: `${paddingY} 0.5rem `,
      boxShadow: '#00000029 0 0.1875rem 0.375rem 0.1rem',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
    },
    title: {
      fontSize: '0.875rem',
      marginBottom: '0.4375rem',
      color: 'black',
      lineHeight: '1.25rem',
    },
    category: {
      color: secondary,
      marginBottom: '1.0625rem',
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    price: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: '#4D3838',
      lineHeight: '1.5rem',
    },
    body: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: primary,
      flexGrow: 1,
    },
    image: {
      width: '10.3125rem',
      borderRadius: '0.5rem',
    },
  })
}

interface Props extends WithStyles<typeof styles>, Product {}

const FeaturedProduct = ({
  classes,
  slug,
  name,
  category: { name: categoryName },
  price,
  thumbnail,
}: Props) => {
  const href: string = getProductLink(slug)
  const image = getImage(thumbnail.localFile)
  const formattedPrice: string = formatPrice(price)
  return (
    <Link className={classes.root} to={href}>
      <div className={classes.body}>
        <Typography component='h2' className={classes.title}>
          {name}
        </Typography>
        <Typography className={classes.category}>{categoryName}</Typography>
        <Typography className={classes.price}>{formattedPrice}</Typography>
      </div>
      <GatsbyImage
        image={image}
        alt={thumbnail.alternativeText}
        className={classes.image}
      />
    </Link>
  )
}

export default withStyles(styles)(FeaturedProduct)
