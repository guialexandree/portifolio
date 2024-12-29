import React, { lazy } from 'react'
import { RecoilRoot } from 'recoil'
import { GeneralTemplate } from '@/templates'

const HomePage = lazy(() => import('@/pages/Home') )
const Resume = lazy(() => import('@/pages/Resume') )
const Projects = lazy(() => import('@/pages/Projects') )
const Challenges = lazy(() => import('@/pages/Challenges') )

const Routes: React.FC = () => {
  return (
    <RecoilRoot>
      <GeneralTemplate>
        <HomePage />
        <Projects />
        <Resume />
        <Challenges />
      </GeneralTemplate>
    </RecoilRoot>
  )
}

export default Routes
