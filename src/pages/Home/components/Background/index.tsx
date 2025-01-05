import { useMemo } from 'react'
import { Box } from '@mui/material'
import { useDeviceType } from '@/hooks'
import bgHeaderBottomImg from '@/assets/bg-header-bottom.svg'
import bgHeaderBottomShadowImg from '@/assets/bg-header-bottom-shadow.svg'

export const Background: React.FC = () => {
  const deviceType = useDeviceType()
    const height = useMemo(() => deviceType === 'mobile' ? '65vh' : '65vh', [deviceType])

  return (
    <>
      <Box
        position='absolute'
        top={`calc(${height} - 30px)`}
        right={0}
        width={deviceType === 'mobile' ? '100%' : '65%'}
        zIndex={2}
      >
        <img src={bgHeaderBottomImg} alt="Imagem de fundo" />
      </Box>
      <Box
        position='absolute'
        top={`calc(${height} - 28px)`}
        right={'-30%'}
        width={deviceType === 'mobile' ? '100%' : '65%'}
        zIndex={1}
      >
        <img src={bgHeaderBottomShadowImg} alt="Imagem de fundo" />
      </Box>
    </>
  )
}
