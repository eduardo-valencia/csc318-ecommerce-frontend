import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'acumin-pro, sans-serif',
    button: {
      textTransform: 'none',
    },
    h1: {
      fontSize: '1.25rem',
    },
  },
  palette: {
    primary: {
      main: '#4B4B4B',
      contrastText: 'white',
    },
    text: {
      primary: '#3F4444',
      secondary: '#00000080',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        minWidth: 0,
        boxShadow: 'none',
      },
    },
  },
})

theme.overrides.MuiButton.containedPrimary = {
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
}

export default theme
