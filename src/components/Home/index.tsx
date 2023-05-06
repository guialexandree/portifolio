import { Header, AppBar } from '@/components'
import './styles.scss'

export const Home: React.FC = () => {
  return (
    <section className='container'>
      <AppBar />
      <Header />
    </section>
  )
}
