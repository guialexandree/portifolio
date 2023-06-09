import { Header, AppBar } from '@/components'
import './styles.scss'

const Home: React.FC = () => {
  return (
    <section className='home-container' id="home">
      <AppBar />
      <Header />
    </section>
  )
}

export default Home
