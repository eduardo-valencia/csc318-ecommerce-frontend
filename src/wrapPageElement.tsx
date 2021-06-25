import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './theme'

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  )
}
