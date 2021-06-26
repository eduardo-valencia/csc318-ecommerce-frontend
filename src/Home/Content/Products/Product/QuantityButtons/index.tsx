import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import AddButton from './AddButton'
import DecrementButton from './DecrementButton'
import Product from '../../../../../api/types/Product'

const styles = ({
  palette: {
    primary: { main, contrastText },
  },
}: Theme) => {
  const borderRadius = '0.5rem'
  return createStyles({
    root: {
      color: contrastText,
      backgroundColor: main,
      borderTopLeftRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      display: 'flex',
      flexDirection: 'column',
      padding: '1.0625rem 0.875rem',
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    quantity: {
      fontSize: '1.25rem',
      fontWeight: 500,
      margin: '1.25rem 0',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  slug: Product['slug']
}

const QuantityButtons = ({ classes }: Props) => {
  return (
    <div className={classes.root}>
      <AddButton />
      <Typography className={classes.quantity}>01</Typography>
      <DecrementButton />
    </div>
  )
}

export default withStyles(styles)(QuantityButtons)
