export type ChallengeModel = {
  id: string
  challenge: string
  requirements: string
  because: string
  soluction: string
  tags: string[]
}

export const challenges: ChallengeModel[] = [
  {
    id: 'c228a0d5-5b93-4a06-a7e5-491726f522f9',
    challenge: 'Pradronizar um plano de contas financeiro para um cliente com diversas filias, cada uma com sua infraestrura interna e base de dados',
    because: 'O cliente possui diversas filiais e cada uma delas possui um plano de contas financeiro diferente, o que dificulta a consolidação dos dados financeiros e a geração de relatórios gerenciais para análisar a saúde financeira do grupo e individualmente de cada filial',
    soluction: 'Devido as filias terem um plano de contas financeiro diferente, foi necessário definir um plano de contas padrão, e a partir desse modelo criei um sistema de mapeamento que buscava as contas do plano de contas atual fazia o vinculo com o plano de contas com mesmo nome do plano de contas padrão, e o usuário ficava responsável por vincular as contas que ficaram fora do padrão manualmente',
    requirements: 'Sistema de autenticação; solicitar senha de nível gerencial; e atualizar referências de novas contas financeiras para gerar relatórios gerenciais padronizados',
    tags: ['análise de negócios', 'análise de requisitos', 'desktop', 'windows forms', 'c#', 'sql'],
  },
]
