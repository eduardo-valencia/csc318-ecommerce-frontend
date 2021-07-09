import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { CartItem } from '../../../contexts/CartContext'
import { getProductLink } from '../../../utils/links'
import Product from '../../../api/types/Product'
import { getItemFinder } from '../../../utils/find'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatPrice } from '../../../utils/price'
import Amount from './Amount'

const styles = () => {
  return createStyles({
    root: {
      listStyle: 'none',
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '0.375rem 0.5rem',
      display: 'flex',
      '& + &': {
        marginTop: '0.625rem',
      },
    },
    body: {},
    title: {
      fontSize: '1.125rem',
      marginBottom: '0.4375rem',
    },
    bottom: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    price: {
      color: '#24C277',
      fontSize: '1.125rem',
    },
    thumbnail: {
      width: '5.3125rem',
      borderRadius: '1rem',
    },
    link: {
      textDecoration: 'none',
    },
  })
}

interface Props extends WithStyles<typeof styles>, CartItem {}

const Item = ({ classes, quantity, slug }: Props) => {
  const {
    allStrapiProducts: { nodes: products },
  } = useStaticQuery(graphql`
    {
      allStrapiProducts {
        nodes {
          name
          price
          thumbnail {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  const product: Product | undefined = getItemFinder<Product>(products)(slug)

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
        <div className={classes.bottom}>
          <Typography className={classes.price}>{formattedPrice}</Typography>
          <Amount quantity={quantity} />
        </div>
      </div>
    </li>
  )
}

export default withStyles(styles)(Item)
