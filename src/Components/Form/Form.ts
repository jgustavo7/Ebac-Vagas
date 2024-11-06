import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 4px;
  border-radius: 32px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const Botao = styled.button`
   {
    background-color: #2c3e50;
    border: 2px solid #fff;
    border-radius: 8px;
    height: 38px;
    padding: 0 8px;
    font-size: 18px;
    color: #fff;
    margin-left: 8px;
    cursor: pointer;
     transition: all ease 0.3s;
  }

  &:hover {
    background-color: transparent;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const Campo = styled.input`
  margin-top: 2px;
  width: 900px;
  margin-left: 4px;
  outline-color: #fff;

  @media (max-width: 768px) {
    padding: 10px 16px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
`
