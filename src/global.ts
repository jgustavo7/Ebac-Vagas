import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  list-style: none;
}

body {
  padding-bottom: 120px;
  background-color: #273c75;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
}
`

export const Botao = styled.button`
border: 1px solid;
background-color: #fff;
color: #222222;
padding: 6px;
transition: all ease 0.3s;
border-radius: 8px;
margin-top: 8px;
margin-right: 4px;
cursor: pointer;

&:hover {
  background-color: #fff;
  color: #000;
`

export default GlobalStyle
