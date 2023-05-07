import './styles.scss'

type TitleProps = {
  title: string
  subtitle: string
}

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <hgroup className='title-container'>
      <h1>{title}</h1>
      <span className='text-shadow'>{subtitle}</span>
    </hgroup>
  )
}
