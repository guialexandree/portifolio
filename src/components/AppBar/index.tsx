import './styles.scss'

export const AppBar: React.FC = () => {
  return (
    <ul className='navbar-container'>
      <li><a href='#home'>home</a></li>
      <li><a href='#resumo'>resumo</a></li>
      <li><a href='#projetos'>projetos</a></li>
      <li><a href='#contato'>contato</a></li>
    </ul>
  )
}
