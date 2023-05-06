import midiaBg from '@/assets/space.mp4'
import './styles.scss'

export const Background: React.FC = () => {
  return (
    <video
      className='background'
      src={midiaBg}
      autoPlay
      loop
      muted
    />
  )
}
