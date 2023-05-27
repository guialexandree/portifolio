import { lazy } from 'react'
import { AnimatedCursor, Background, MidiasSociais } from '@/components'

const HomePage = lazy(() => import('@/pages/Home') )
const Resume = lazy(() => import('@/pages/Resume') )
const Projects = lazy(() => import('@/pages/Projects') )

function App() {

  return (
    <>
      <AnimatedCursor />
      <Background />
      <HomePage />
      <Resume />
      <Projects />
      <MidiasSociais />
    </>
  )
}

export default App
