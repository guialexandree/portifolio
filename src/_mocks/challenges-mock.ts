export type ChallengeModel = {
  id: string
  challenge: string
  description: string
  tags: string[]
}

export const challenges: ChallengeModel[] = [
  {
    id: 'c228a0d5-5b93-4a06-a7e5-491726f522f9',
    challenge: 'Portal do cliente',
    description: 'Sistema de gestão de barbearia formado por aplicativo mobile para o cliente e aplicativo web para o administrador',
    tags: ['pwa','react-native', 'react-native-web', 'typescript'],
  },
  {
    id: '4f925fd0-75e8-4dce-b373-81c82046fed4',
    challenge: 'Gesão de equipe técnica',
    description: 'Pagina web de um clube automotivo feminino com sistema de cadastro de membros e eventos, e um blog para postagens',
    tags: ['app web', 'typescript', 'react', 'google-maps-api'],
  },
]
