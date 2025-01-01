export type ResumeModel = {
  type: 'general'
  description: Array<{
    description: string
    tags?: string[]
  }>
  startDeveloper: string
  funcions: string[]
  tags: string[]
  platforms: {
    web?: boolean
    mobile?: boolean
    api?: boolean
  }
}

export const resumes: ResumeModel[] = [
  {
    type: 'general',
    startDeveloper: '2017-04-01',
    description: [
      {
        description: `9 anos de experiência profissional na área de tecnologia`
      },
      {
        description: `Sempre trabalhei com manutenção de computadores e redes e em 2017 consegui meu primeiro estágio como desenvolvedor .NET, onde
        trabalhei na criação de uma aplicação desktop para controle de um AutoCenter. `,
        tags: ['desktop', 'sistemas operacionais', 'c#', 'sql', 'entity-framework']
      },
      {
        description: `Em 2018 comecei a trabalhar como HelpDesk depois de um ano consegui
        uma oportunidade como analista de sistemas, onde trabalhei com VBA, C# e bastante com SQL na 
        criação de views e extração de dados em sistemas terceiros para integração com o sistemas da empresa.`,
        tags: ['desktop', 'frontend', 'backend', 'análise de dados', 'análise de requisitos', 'angular', 'bd relacionais', 'c#', 'js', '.net', 'node']
      },
      {
        description: `Atualmente tenho trabalhado na refatoração e migração de sistemas legados para novas tecnologias, como React, React Native e .NE`,
        tags: ['frontend', 'backend', 'pwa', 'react', 'angular', 'react-native', '.NET', 'node', 'pipelines ci/cd']
      },
    ],
    funcions: [
      'Desenvolvimento de aplicações web',
      'Criação de fluxos de automações de CI/CD',
      'Migração de tecnologia e código de software legado para novas arquiteturas',
      'Desenvolvimento e manutenção de API .NET framework 4.5+, Net Core e NodeJs',
      'Analise de de erros e melhorias entre comunicações com API de parceiros',
    ],
    tags: ['react-native', 'react', 'react-reanimated', 'node', 'typescript', 'nestjs'],
    platforms: {
      web: true,
      mobile: true,
      api: true
    }
  },
]
