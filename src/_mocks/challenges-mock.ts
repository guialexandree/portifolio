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
    id: '1',
    challenge: 'Pradronizar o plano de contas financeiro de um cliente com diversas filias, cada uma com sua infraestrura interna e base de dados',
    because: 'O cliente possui diversas filiais e cada uma delas possui um plano de contas financeiro diferente, o que dificulta a consolidação dos dados financeiros e a geração de relatórios gerenciais para análisar a saúde financeira do grupo e individualmente de cada filial',
    soluction: 'Devido as filias terem um plano de contas financeiro diferente, foi necessário definir um plano de contas padrão, e a partir desse modelo criei um sistema de mapeamento que buscava as contas do plano de contas atual fazia o vinculo com o plano de contas com mesmo nome do plano de contas padrão, e o usuário ficava responsável por vincular as contas que ficaram fora do padrão manualmente',
    requirements: 'Sistema de autenticação; solicitar senha de nível gerencial; e atualizar referências de novas contas financeiras para gerar relatórios gerenciais padronizados',
    tags: ['análise de negócios', 'análise de requisitos', 'desktop', 'windows forms', 'c#', 'sql'],
  },
  {
    id: '2',
    challenge: 'Cliente precisava executar a exclusão de empresas quatro empresas em uma base com pouco menos de cinquenta empresas junto com suas referências na base de dados, já existia uma app em vb6 que fazia isso, porém para cada empresa estava levando certa de 8h para excluir, tornando o processo inviável com o atual app',
    because: '',
    soluction: '',
    requirements: '',
    tags: ['sql', 'vb6', 'desktop', 'windows forms', 'c#'],
  },
  {
    id: '3',
    challenge: 'Padronizar o processo de extração de dados na base de dados de terceiros para integração com o sistema da empresa. Sempre que um novo cliente era adquirido, era necessário atualizar um app de conversão com as novas consultas sql para extrair os dados encontrados na base fornecida pelo cliente, o que tornava o processo lento, propenso a erros que muitas vezes já haviam sido corrigidos em clientes anteriores e gerava retrabalho. Principais bases de dados dos clients: SQL Server, MySQL, Firebird e Oracle',
    because: '',
    soluction: '',
    requirements: '',
    tags: ['sql', 'vb6', 'desktop', 'windows forms', 'c#'],
  },
  {
    id: '4',
    challenge: 'A empresa possui um sistema de gestão em um linguagem legado que ao realizar novas atualizações no sistema após o login era aberta uma webview do internet explorer que exibia uma tela simples com uma lista <ul>, o sistema passa por atualizações constantes logo a tela era exibida na mesma frequencia para o usuário. Só tinhamos o ftp para subir o arquivo html estático, e o sistema não possuia um servidor web para servir o arquivo html nem API',
    because: '',
    soluction: '',
    requirements: '',
    tags: ['web', 'análise de requisitos', 'html', 'css', 'materializecss', 'página estatica'],
  },
  {
    id: '5',
    challenge: 'Reescrever um portal de clientes white label em angular 6 para alguma nova tecnologia que permitissem criar um pwa com design mais moderno e responsivo',
    because: '',
    soluction: '',
    requirements: 'O novo projeto deveria ser desenvolvido em React Native Web; o cliente poderia optar por forncecer aos seu clientes o app legado ou o novo app de forma simples; O novo app deveria ser capaz de intepretar o tema antigo do cliente sem requerer uma nova configuração de cores e logo; Notificações push',
    tags: ['web', 'análise de requisitos', 'análise de negócio', 'react native web', 'pwa', 'materializecss', 'push notifications'],
  },
  {
    id: '6',
    challenge: 'Reescrever um app de gestão de equipe técnica e roteirização de ordens de serviço no mapa em angular js para alguma nova tecnologia com design mais moderno e trazendo mais informações de valor ao gestor técnico',
    because: '',
    soluction: '',
    requirements: '',
    tags: ['web', 'análise de requisitos', 'análise de negócio', 'react', 'google maps'],
  },
]
