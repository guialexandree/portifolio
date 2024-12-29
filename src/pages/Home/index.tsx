import { useMemo } from 'react'
import { PresentationTexts } from '@/components'
import { Box, Grid2, Stack } from '@mui/material'
import { useDeviceType } from '@/hooks'

import bgHeaderBottomImg from '@/assets/bg-header-bottom.svg'
import bgHeaderBottomShadowImg from '@/assets/bg-header-bottom-shadow.svg'

const Home: React.FC = () => {
  const deviceType = useDeviceType()
  const height = useMemo(() => deviceType === 'mobile' ? '65vh' : '65vh', [deviceType])

  return (
    <Stack
      id='presentation-texts'
      sx={{
        pt: 7,
        px: deviceType === 'mobile' ? 4 : 8,
        height: height,
        width: '100%',
        backgroundColor: '#161616',
        position: 'relative'
      }}>
        <Grid2 container>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
            <PresentationTexts />
          </Grid2>
        </Grid2>

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
    </Stack>
  )
}

export default Home
