import { Box, Chip, Divider, Grid2, Stack, Typography } from '@mui/material'
import { Title } from '@/components'
import { useDeviceType } from '@/hooks'

const Resume: React.FC = () => {
  const deviceType = useDeviceType()

  return (
    <Box
      sx={{
        mt: 6,
        flex: 1,
        pt: deviceType === 'mobile' ? 4 : 8,
        pb: deviceType === 'mobile' ? 6 : 10,
        px: deviceType === 'mobile' ? 4 : 8,
        width: '100%',
        minHeight: '40vh',
        backgroundColor: theme => `${theme.palette.primary.main}cc`,
      }}
    >
      <Stack justifyContent='center'>
        <Title title="resumo" subtitle="resumo" />
      </Stack>

      <Grid2 container spacing={{ xs: 2, sm: 10 }}>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Typography variant='body1' fontWeight='300'>
            tenho experiência de 5 anos na área de tecnologia. Atualmente, trabalho com desenvolvimento ReactJs, React Native, .NET e NodeJs. Trabalhei anteriormente com C# e Análise de Sistemas, onde obtive grande experiência com POO, linguagem SQL e bancos de dados relacionais
          </Typography>

          <Stack mt={4}>
            <Typography variant='h5' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
              FERRAMENTAS E TECNOLOGIAS
            </Typography>

            <Divider sx={{ borderColor: 'warning.main' }} />

            <Stack direction='row'mt={2} flexWrap='wrap' gap={1} >
              <Chip label={'react'} sx={{ borderRadius: 1 }} />
              <Chip label={'react native'} sx={{ borderRadius: 1 }} />
              <Chip label={'net framework 4.5+'} sx={{ borderRadius: 1 }} />
              <Chip label={'net core 3+'} sx={{ borderRadius: 1 }} />
              <Chip label={'node'} sx={{ borderRadius: 1 }} />
              <Chip label={'javascript'} sx={{ borderRadius: 1 }} />
              <Chip label={'typescript'} sx={{ borderRadius: 1 }} />
            </Stack>
          </Stack>
        </Grid2>

        <Grid2 size={{ xs: 12, lg: 6 }} >
          <Stack>
            <Typography variant='h5' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
              FRONTEND
            </Typography>


            <Stack direction='row'mt={2} flexWrap='wrap' gap={1} >
              <Chip label={'vanilla js'} sx={{ borderRadius: 1 }} />
              <Chip label={'react'} sx={{ borderRadius: 1 }} />
              <Chip label={'react native'} sx={{ borderRadius: 1 }} />
              <Chip label={'angular'} sx={{ borderRadius: 1 }} />
              <Chip label={'angular js'} sx={{ borderRadius: 1 }} />
              <Chip label={'javascript'} sx={{ borderRadius: 1 }} />
              <Chip label={'typescript'} sx={{ borderRadius: 1 }} />
            </Stack>
          </Stack>

          <Stack mt={4}>
            <Typography variant='h5' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
              BACKEND
            </Typography>


            <Stack direction='row'mt={2} flexWrap='wrap' gap={1} >
              <Chip label='net framework 4.5+' sx={{ borderRadius: 1 }} />
              <Chip label='net core' sx={{ borderRadius: 1 }} />
              <Chip label='node' sx={{ borderRadius: 1 }} />
              <Chip label='nestjs' sx={{ borderRadius: 1 }} />
            </Stack>
          </Stack>

          <Stack mt={4}>
            <Typography variant='h5' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
              MOBILE
            </Typography>


            <Stack direction='row'mt={2} flexWrap='wrap' gap={1} >
              <Chip label='ionic' sx={{ borderRadius: 1 }} />
              <Chip label='react native' sx={{ borderRadius: 1 }} />
            </Stack>
          </Stack>

          <Stack mt={4}>
            <Typography variant='h5' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
              DESKTOP
            </Typography>

            <Stack direction='row'mt={2} flexWrap='wrap' gap={1} >
              <Chip label='C#' sx={{ borderRadius: 1 }} />
            </Stack>
          </Stack>
        </Grid2>
      </Grid2>

    </Box>
  )
}

export default Resume