import React from 'react'
import {
  Theme,
  withStyles,
  WithStyles,
  createStyles,
  IconButton,
  IconButtonProps,
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

interface Props
  extends WithStyles<typeof styles>,
    Omit<IconButtonProps, 'classes' | 'children'> {
  incrementAmount: number
  children: React.ReactNode
}

const IncrementButton = ({ classes, children, ...other }: Props) => {
  return (
    <IconButton classes={classes} {...other}>
      {children}
    </IconButton>
  )
}

export default withStyles(styles)(IncrementButton)
