import { GithubLogo, LinkedinLogo, TwitchLogo, WhatsappLogo } from '@phosphor-icons/react'
import './styles.scss'

export const MidiasSociais: React.FC = () => {
  return (
    <section className='midias-sociais-container'>
      <span>mídias sociais</span>
      <LinkedinLogo size={40} />
      <GithubLogo size={40} />
      <TwitchLogo size={40} />
      <WhatsappLogo size={40} />
    </section>
  )
}
