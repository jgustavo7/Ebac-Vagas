import { useState } from 'react'
import Form from '../Components/Form'

import Vaga from '../Components/Vaga'

import { ListVagas } from './ListaVagas'

type Vaga = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor Front-End',
    localizacao: 'Remoto',
    nivel: 'Junior',
    modalidade: 'CLT',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'Hibrido - São Paulo-SP',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 3,
    titulo: 'Desenvolvedor Fullstack',
    localizacao: 'Presencial - Rio de Janeiro',
    nivel: 'Senior',
    modalidade: 'PJ',
    salarioMin: 7000,
    salarioMax: 10000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    titulo: 'Designer Grafico',
    localizacao: 'Remoto',
    nivel: 'Junior',
    modalidade: 'CLT',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor Back-End',
    localizacao: 'Hibrido - São Paulo - SP',
    nivel: 'Senior',
    modalidade: 'PJ',
    salarioMin: 8000,
    salarioMax: 10000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 6,
    titulo: 'Desenvolvedor Front-End',
    localizacao: 'Remoto',
    nivel: 'Senior',
    modalidade: 'PJ',
    salarioMin: 12000,
    salarioMax: 15000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <Form aoPesquisar={(termo: string) => setFiltro(termo)} />
      <ListVagas>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </ListVagas>
    </div>
  )
}

export default ListaVagas
