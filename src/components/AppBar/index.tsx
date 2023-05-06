import './styles.scss'

export const AppBar: React.FC = () => {
  return (
    <ul className='navbar-container'>
      <li><a href='#home'>Home</a></li>
      <li><a href='#resumo'>Resumo</a></li>
      <li><a href='#projetos'>Projetos</a></li>
      <li><a href='#contato'>Contato</a></li>
    </ul>
  )
}
