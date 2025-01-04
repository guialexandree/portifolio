export type ProjectModel = {
  title: string
  description: string
  tags: string[]
  platforms: {
    web?: boolean
    mobile?: boolean
    api?: boolean
  }
}

export const projects: ProjectModel[] = [
  {
    title: 'Arcanjo',
    description: 'Aplicação web com mapa para apoio em localizações de pessoas desaparecidas em situações de calamidade, com sistema para enviar localização atual com possibilidade de enviar foto e audio solicitando apoio, cadastro de pessoas desaparecidas e localização de abrigos',
    tags: ['typescript', 'react'],
    platforms: {
      web: true,
      mobile: true,
      api: true
    }
  },
  {
    title: 'Susu Barbearia',
    description: 'Sistema de gestão de barbearia formado por aplicativo mobile para o cliente e aplicativo web para o administrador',
    tags: ['react-native', 'react', 'react-reanimated', 'node', 'typescript', 'nestjs'],
    platforms: {
      web: true,
      mobile: true,
      api: true
    }
  },
  {
    title: 'Girls Of Cars',
    description: 'Pagina web de um clube automotivo feminino com sistema de cadastro de membros e eventos, e um blog para postagens',
    tags: ['typescript', 'react'],
    platforms: {
      web: true,
      mobile: false,
      api: false
    }
  },
  {
    title: 'Toledo Bus',
    description: 'Aplicação web para consulta de horários de ônibus e rotas dos transportes de Toledo-PR',
    tags: ['react', 'node', 'nestjs', 'react-reanimated', 'typescript'],
    platforms: {
      web: true,
      mobile: false,
      api: true
    }
  },
  {
    title: 'Gestão Várzea',
    description: 'Aplicação mobile para gestão de times de futebol amador, com sistema de cadastro de jogadores, registro de partidas e controle de finanças',
    tags: ['typescript', 'react'],
    platforms: {
      web: true,
      mobile: true,
      api: true
    }
  },
]
