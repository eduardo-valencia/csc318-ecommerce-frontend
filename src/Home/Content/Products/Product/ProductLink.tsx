import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { Link } from 'gatsby'

import Product from '../../../../api/types/Product'
import { getProductLink } from '../../../../utils/links'

const styles = () => {
  return createStyles({
    root: {
      textDecoration: 'none',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
  slug: Product['slug']
}

const ProductLink = ({ classes, children, slug }: Props) => {
  const href: string = getProductLink(slug)

  return (
    <Link to={href} className={classes.root}>
      {children}
    </Link>
  )
}

export default withStyles(styles)(ProductLink)
