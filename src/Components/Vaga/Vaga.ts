import styled from 'styled-components'

export const VagaWrapper = styled.li`
  border: 1px solid #000;
  background-color: #fff;
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 32px;

  &:hover {
    background-color: #487eb0;

    a {
      border-color: #fff;
      background-color: #fff;
      color: #000;
    }
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: none;
  background-color: #fff;
  color: none;
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
