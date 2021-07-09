import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './theme'
import CartContextProvider from './contexts/CartContext'

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <CssBaseline />
        {element}
      </CartContextProvider>
    </ThemeProvider>
  )
}
