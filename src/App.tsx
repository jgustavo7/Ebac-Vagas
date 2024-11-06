import { ThemeProvider } from 'styled-components'
import Header from './Components/Cabecalho'
import Hero from './Components/Hero'
import ListVagas from './Containers'

import GlobalStyle from './global'

function App() {
  return (
    <ThemeProvider theme={GlobalStyle}>
      <GlobalStyle />
      <Header />
      <Hero />
      <div className="container">
        <ListVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
