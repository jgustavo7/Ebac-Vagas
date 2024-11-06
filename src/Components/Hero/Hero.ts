import styled from 'styled-components'

export const Form = styled.form`
   {
    height: 360px;
    width: 100%;
    background-image: url('https://itforum.com.br/wp-content/uploads/2023/06/Shutterstock_1471328153.jpg');
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      content: '';
      opacity: 0.7;
    }
  }

  & div {
    position: relative;
    color: #eee;
  }
`

export const HeroTitle = styled.h2`
  .heroTitle {
    font-family: Gloock, serif;
    font-size: 48px;
  }

  @media (max-width: 768px) {
    .form {
      height: auto;
      padding: 24px 0;
    }

    & {
      font-size: 32px;
    }
  }
`
