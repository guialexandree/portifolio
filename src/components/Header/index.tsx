import { TypeAnimation } from 'react-type-animation'
import { LinkedinLogo, GithubLogo, TwitchLogo } from '@phosphor-icons/react'
import './styles.scss'

export const Header: React.FC = () => {
  return (
    <section className='header-container'>
      <section className='header-content'>
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
      </section>
      <section className='header-social-midias'>
        <LinkedinLogo size={40} />
        <GithubLogo size={40} />
        <TwitchLogo size={40} />
      </section>
    </section>
  )
}
