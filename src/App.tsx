import { ThemeProvider } from 'styled-components'
import Header from './Components/Cabecalho'
import Hero from './Components/Hero'
import ListVagas from './Containers'

import GlobalStyle from './global'
import { Botao } from './global'

import temaLight from './Themes/light'
import temaDark from './Themes/dark'
import { useState, useEffect } from 'react'

function App() {
  const getStoredTheme = () => {
    const storedTheme = localStorage.getItem('temaDark')
    return storedTheme === 'true'
  }

  const [usandoTemaDark, setUsandoTemaDark] = useState(getStoredTheme)

  function trocaTema() {
    setUsandoTemaDark(!usandoTemaDark)
  }

  useEffect(() => {
    localStorage.setItem('temaDark', usandoTemaDark.toString())
  }, [usandoTemaDark])

  return
  ;<ThemeProvider theme={usandoTemaDark ? temaDark : temaLight}>
    <GlobalStyle />
    <Header />
    <Hero trocaTema={trocaTema} />
    <div className="container">
      <Botao onClick={trocaTema}>Tema</Botao>
      <ListVagas />
    </div>
  </ThemeProvider>
}

export default App
