import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Collapse,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { CloseCartNotification, ShowCartNotification } from './types'

const styles = () => {
  return createStyles({
    root: {
      marginBottom: '1rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  showCartNotification: ShowCartNotification
  closeCartNotification: CloseCartNotification
}

const CartNotification = ({
  classes,
  showCartNotification,
  closeCartNotification,
}: Props) => {
  return (
    <Collapse in={showCartNotification}>
      <div className={classes.root}>
        <Alert onClose={closeCartNotification}>Item added to cart</Alert>
      </div>
    </Collapse>
  )
}

export default withStyles(styles)(CartNotification)
