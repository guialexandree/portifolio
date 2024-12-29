import { Stack } from '@mui/material'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { useEffect, useMemo } from 'react'
import bgHeader from '@/assets/bg-header.png'

export const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      console.log('tspartilces iniciou')
    });
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  }

  const options: ISourceOptions = useMemo(() => ({
    autoPlay: true,
    clear: true,
    fpsLimit: 156,
    fullScreen: false,
    detectRetina: true,
    particles: {
      number: {
        value: 156,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    }
  }), [])

  return (
    <Stack
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '30vh',
        width: '100%',
        zIndex: 1,
        opacity: .05
      }}>
        <img src={bgHeader} alt="imagem de fundo" />
    </Stack>
  )
}
