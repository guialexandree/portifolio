import { default as AnimatedCursorLib } from 'react-animated-cursor'

export const AnimatedCursor: React.FC = () => {
  return (
    <AnimatedCursorLib
      innerSize={8}
      outerSize={18}
      innerScale={0.6}
      outerScale={2.5}
      color='83, 91, 242'
      showSystemCursor={false}
      type={1}
    />
  )
}
