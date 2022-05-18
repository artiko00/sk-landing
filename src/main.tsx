import React from 'react'
import ReactDOM from 'react-dom/client'
import { Landing } from './views'
import { GlobalStyle } from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <Landing />
    </>
  </React.StrictMode>
)
