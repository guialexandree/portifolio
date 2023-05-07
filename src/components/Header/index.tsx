import { TypeAnimation } from 'react-type-animation'
import './styles.scss'

export const Header: React.FC = () => {
  return (
    <section className='header-container'>
      <hgroup className='header-content'>
        <h3>olá!</h3>
        <h1>sou guilherme,</h1>
        <h4>{'desenvovedor '}
          <TypeAnimation
            sequence={[
              'web.',
              1000,
              'frontend.',
              1700,
              'backend.',
              1700,
              'mobile.',
              1700,
              'de bugs.',
              2000,
            ]}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: 33, fontWeight: 300 }}
          />
        </h4>
        <a href='#projetos'>ver projetos</a>
      </hgroup>
      <section className='header-infos'>
        <article>
          <h2>E-mail</h2>
          <p>guilherme_alexandree@hotmail.com</p>
        </article>
        <article>
          <h2>WhatsApp</h2>
          <p>(45) 9 9987-2483</p>
        </article>
        <article>
          <h2>Localização</h2>
          <p>São Paulo, SP - Brasil</p>
        </article>
      </section>
    </section>
  )
}
