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

const styles = ({
  palette: {
    text: { secondary },
  },
}: Theme) => {
  return createStyles({
    root: {
      padding: '0.3125rem 0.5rem',
      boxShadow: '#00000029 0 0.1875rem 0.375rem 0.375rem',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: '0.875rem',
      marginBottom: '0.4375rem',
    },
    category: {
      color: secondary,
      marginBottom: '1.0625rem',
      fontSize: '0.75rem',
    },
    price: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: '#4D3838',
    },
    body: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
  price = 300,
}: Props) => {
  const href: string = getProductLink(slug)
  return (
    <Link className={classes.root} to={href}>
      <div className={classes.body}>
        <Typography component='h2' className={classes.title}>
          {name}
        </Typography>
        <Typography className={classes.category}>{categoryName}</Typography>
        <Typography className={classes.price}>{price}</Typography>
      </div>
    </Link>
  )
}

export default withStyles(styles)(FeaturedProduct)
