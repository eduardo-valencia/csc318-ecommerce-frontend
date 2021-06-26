import React from 'react'
import {
  Theme,
  Tab,
  withStyles,
  WithStyles,
  createStyles,
  TabProps,
} from '@material-ui/core'

import Category from '../../../api/types/Category'

const styles = ({
  palette: {
    text: { primary },
  },
}: Theme) => {
  return createStyles({
    root: {
      color: primary,
      fontSize: '1.125rem',
      textTransform: 'uppercase',
    },
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Category,
    Omit<TabProps, 'label' | 'classes'> {}

const CategoryTab = ({ classes, name, ...other }: Props) => {
  return <Tab label={name} classes={classes} {...other}></Tab>
}

export default withStyles(styles)(CategoryTab)
