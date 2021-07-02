import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import Product from '../api/types/Product'
import BaseNav from '../components/Layout/Nav'

const styles = ({
  palette: {
    primary: { main },
  },
}: Theme) => {
  return createStyles({
    overlap: {
      height: '2.0625rem',
      width: '100%',
      backgroundColor: main,
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  name: Product['name']
}

function Nav({ name, classes }: Props) {
  return (
    <>
      <BaseNav title={name} />
      <div className={classes.overlap} />
    </>
  )
}

export default withStyles(styles)(Nav)
