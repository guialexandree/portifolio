import { Title } from '@/components'
import './styles.scss'

const Resume: React.FC = () => {
  return (
    <section className='resume-container' id='resumo'>
      <Title title='timeline & resumo' subtitle='resumo' />
      <section className='resume-content'>
        <img
          decoding='async'
          width='348'
          height='652'
          className='avatar'
          src="https://demo.themerec.com/item/wordpress/thepro-agency/wp-content/uploads/sites/16/2023/02/agency-info-image.jpg"
          alt=""
          loading="lazy"
        />
        <section className='resume-texts'>
          <h2>o que faço atualmente?</h2>
          <h3>estou trabalhando como Analista de Desenvolvimento III em modo home office e regime CLT</h3>
          <p>tenho experiência de 5 anos na área de tecnologia.
            Atualmente, trabalho com desenvolvimento ReactJs, React Native, .NET e NodeJs. 
            Trabalhei anteriormente com C# e Análise de Sistemas, onde obtive grande experiência com POO, linguagem SQL e bancos de dados relacionais
          </p>
          <section className='tools-container'>
            <h4>Ferramentas e tecnologias</h4>
            <ul className='tools-content'>
              <li>NodeJs</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>ReactJs</li>
              <li>React Native</li>
              <li>C#</li>
              <li>.NET</li>
              <li>Windows Forms</li>
              <li>Angular</li>
              <li>Material Design</li>
              <li>SQL</li>
              <li>Refatoração</li>
              <li>Gitflow</li>
            </ul>
          </section>
        </section>
      </section>

      <section className='timeline'>

      </section>
      
    </section>
  )
}

export default Resume
