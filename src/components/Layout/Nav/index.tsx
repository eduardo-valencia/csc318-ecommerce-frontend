import React from 'react'
import {
  Typography,
  Theme,
  withStyles,
  WithStyles,
  createStyles,
  AppBar,
  Toolbar,
} from '@material-ui/core'

const styles = ({
  palette: {
    primary: { main, contrastText },
  },
}: Theme) => {
  const minHeight: number = 0
  return createStyles({
    root: {
      paddingTop: '1.8125rem',
      paddingBottom: '0.5625rem',
      backgroundColor: main,
      color: contrastText,
      minHeight,
    },
    toolbar: {
      minHeight,
      display: 'flex',
      justifyContent: 'center',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  title: string
  children?: React.ReactNode
}

const Nav = ({ classes, title, children }: Props) => {
  return (
    <AppBar className={classes.root} position='sticky'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h1' align='center'>
          {title}
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Nav)
