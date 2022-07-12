import { BrowserRouter } from 'react-router-dom'
// IMPORT THEME
import { ThemeProvider } from 'styled-components'

// IMPORT ROUTES
import { Router } from './Router'

// IMPORT STYLES
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
