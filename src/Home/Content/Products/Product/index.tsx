import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'
import { Link } from 'gatsby'

import Product from '../../../../api/types/Product'
import { getProductLink } from '../../../../utils/links'
import { formatPrice } from '../../../../utils/price'
import QuantityButtons from './QuantityButtons'

const styles = () => {
  const paddingX: string = '0.875rem'
  return createStyles({
    root: {
      listStyle: 'none',
    },
    link: {
      textDecoration: 'none',
      backgroundColor: 'white',
      position: 'relative',
      borderRadius: '0.625rem',
      boxShadow: '#00000029 0 0.1875rem 0.375rem',
      marginBottom: '0.625rem',
      flexBasis: 'calc(50% - 0.625rem / 2)',
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
    },
    name: {
      textTransform: 'uppercase',
      fontSize: '0.875rem',
      color: '#304A4E',
    },
  })
}

interface Props extends WithStyles<typeof styles>, Product {}

const ProductItem = ({ classes, price, name, slug }: Props) => {
  const href: string = getProductLink(slug)
  const formattedPrice: string = formatPrice(price)
  return (
    <li className={classes.root}>
      <Link to={href} className={classes.link}>
        <div className={classes.top}>
          <Typography className={classes.price}>{formattedPrice}</Typography>
        </div>
        <div className={classes.bottom}>
          <Typography className={classes.name}>{name}</Typography>
          <QuantityButtons slug={slug} />
        </div>
      </Link>
    </li>
  )
}

export default withStyles(styles)(ProductItem)
