import React from 'react'
import {
  Theme,
  withStyles,
  WithStyles,
  createStyles,
  IconButton,
} from '@material-ui/core'

const styles = ({
  palette: {
    primary: { contrastText },
  },
}: Theme) => {
  return createStyles({
    root: {
      padding: 0,
      color: contrastText,
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  incrementAmount: number
  children: React.ReactNode
}

const IncrementButton = ({ classes, children }: Props) => {
  return <IconButton classes={classes}>{children}</IconButton>
}

export default withStyles(styles)(IncrementButton)
