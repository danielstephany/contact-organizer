import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './GlobalStyle'
import { ThemeProvider } from "styled-components"
import theme from "./GlobalStyle/theme"
import { Provider } from 'react-redux'
import store from '@src/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
