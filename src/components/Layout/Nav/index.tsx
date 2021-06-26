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
      minHeight,
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    toolbar: {
      color: contrastText,
      paddingTop: '1.8125rem',
      paddingBottom: '0.5625rem',
      minHeight,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: main,
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
      </Toolbar>
      {children}
    </AppBar>
  )
}

export default withStyles(styles)(Nav)
