import { Box, Grid2, Stack } from '@mui/material'
import { useDeviceType } from '@/hooks'
import { Background, PresentationTexts } from '@/pages/Home/components'
import presentationTextsImg from '@/assets/programming.svg'

const Home: React.FC = () => {
  const deviceType = useDeviceType()

  const PresentationIcon = (): React.ReactNode =>
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{
        mt: { xs: 10, md: 0 },
        width: { xs: '60%', md: '40%' },
        mx: 'auto'
      }}
    >
      <img
        src={presentationTextsImg}
        alt="Imagem de fundo com computadores flutuando com mobile"
        width='100%'
      />
    </Stack>

  return (
    <Box
      sx={{ position: 'relative' }}
    >
      <Stack
        id='presentation-texts'
        sx={{
          pt: 7,
          px: deviceType === 'mobile' ? 4 : 8,
          height: '65vh',
          width: '100%',
          backgroundColor: '#161616',
          position: 'relative'
        }}>
          <Grid2 container>
            <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
              <PresentationTexts />
            </Grid2>

            <Grid2 size={{ md: 8 }} display={{ xs: 'none', md: 'block' }}>
              <PresentationIcon />
            </Grid2>
          </Grid2>

        <Background />
      </Stack>

      <Grid2 display={{ xs: 'block', sm: 'none' }}>
        <PresentationIcon />
      </Grid2>
    </Box>
  )
}

export default Home
