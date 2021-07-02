import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { FullProduct } from '../../api/types/Product'
import Size from './Size'
import Color from './Color'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.5625rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  colors: FullProduct['colors']
  sizes: FullProduct['sizes']
}

const Options = ({ classes, colors, sizes }: Props) => {
  return (
    <div className={classes.root}>
      {!!sizes.length && <Size sizes={sizes} />}
      {!!colors.length && <Color colors={colors} />}
    </div>
  )
}

export default withStyles(styles)(Options)
