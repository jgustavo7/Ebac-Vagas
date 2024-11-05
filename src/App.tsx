import { ThemeProvider } from 'styled-components'
import Header from './Components/Cabecalho'
import Hero from './Components/Hero'
import ListVagas from './Containers'

import GlobalStyle from './global'
import { Botao } from './global'
import { Campo } from './Components/Form/Form'

function App() {
  return (
    <ThemeProvider theme={GlobalStyle}>
      <GlobalStyle />
      <Header />
      <Hero />
      <div className="container">
        <Botao>Pesquisar</Botao>
        <Campo />
        <ListVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
