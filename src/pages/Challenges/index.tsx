import { Alert, Box, Chip, Grid2, Icon, Stack, Typography } from '@mui/material'
import { Title } from '@/components'
import { useDeviceType } from '@/hooks'
import { challenges } from '@/_mocks'
import gatoGif from '@/assets/gato-digitando.gif'

const Challenges: React.FC = () => {
  const deviceType = useDeviceType()

  return (
    <Stack spacing={2} mx={deviceType === 'mobile' ? 4 : 6} mt={8} flex={1} id='challenges'>
      <Stack ml={deviceType === 'mobile' ? 0 : 3}>
        <Title title="desafios" subtitle="desafios" />
      </Stack>

      <Grid2 container spacing={deviceType === 'mobile' ? 2 : 4}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}  display='flex' alignItems='center' justifyContent='center'>
          <Box
            component='img'
            src={gatoGif}
            alt="um gato preto sentado na mesa digitando em um notebook rapido, sim um gato"
            sx={{
              objectFit: 'cover',
              width: '100%',
              maxWidth: 500,
              mt: 4,
            }}
          />
        </Grid2>

        {challenges.map(challenge => (
          <Grid2 key={challenge.id} size={{ xs: 12, sm: 12, md: 6 }}  display='flex'>
            <Stack>
              <Alert icon={<Icon>sports_score</Icon>} severity='warning' sx={{ boxShadow: 3 }}>
                <Typography variant='h6' mb={2} fontWeight='600'>
                  DESAFIO {challenge.id}
                </Typography>
                <Typography variant='body2'>
                  {challenge.challenge}
                </Typography>
              </Alert>

              <Alert icon={<Icon>info</Icon>} severity='info' sx={{ boxShadow: 3, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}>
                <Typography variant='body1' mb={1}>
                  REQUISITOS
                </Typography>
                <Typography variant='body2' fontWeight='200'>
                  {challenge.requirements}
                </Typography>
              </Alert>

              <Alert severity='success' sx={{ boxShadow: 3, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}>
                <Typography variant='body1' mb={1}>
                  SOLUÇÃO
                </Typography>
                <Typography variant='body2'  fontWeight='200'>
                  {challenge.soluction}
                </Typography>
                <Stack direction='row' flexWrap='wrap' gap={0.5} mt={2}>
                  {challenge.tags.map(tag => (
                    <Chip size='small' label={tag} key={tag} />
                  ))}
                </Stack>
              </Alert>
            </Stack>
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  )
}

export default Challenges
