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

export const challengers: ProjectModel[] = [
  {
    title: 'Portal do cliente',
    description: 'Sistema de gestão de barbearia formado por aplicativo mobile para o cliente e aplicativo web para o administrador',
    tags: ['pwa','react-native', 'react-native-web', 'typescript'],
    platforms: {
      web: true,
      mobile: true,
      api: true
    }
  },
  {
    title: 'Gesão de equipe técnica',
    description: 'Pagina web de um clube automotivo feminino com sistema de cadastro de membros e eventos, e um blog para postagens',
    tags: ['app web', 'typescript', 'react', 'google-maps-api'],
    platforms: {
      web: true,
      mobile: true,
      api: true
    }
  },
]
