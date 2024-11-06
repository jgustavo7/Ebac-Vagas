import { useState } from 'react'
import type { FormEvent } from 'react'
import { Form, Botao, Campo } from './Form'

type Props = {
  aoPesquisar: (termo: string) => void
}

const ListaVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-End, Fullstack, node, designer, Back-End"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </Form>
  )
}

export default ListaVagas
