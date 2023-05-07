import { lazy } from 'react'
import { AnimatedCursor, Background, MidiasSociais } from '@/components'

const HomePage = lazy(() => import('@/pages/Home') )
const Resume = lazy(() => import('@/pages/Resume') )

function App() {

  return (
    <>
      <AnimatedCursor />
      <Background />
      <HomePage />
      <Resume />
      <MidiasSociais />
    </>
  )
}

export default App
