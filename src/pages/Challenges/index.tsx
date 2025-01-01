import { Grid2, Stack } from '@mui/material'
import { Title } from '@/components'
import { useDeviceType } from '@/hooks'
import { challenges } from '@/_mocks'

const Challenges: React.FC = () => {
  const deviceType = useDeviceType()

  return (
    <Stack spacing={2} mx={deviceType === 'mobile' ? 4 : 6} mt={8} flex={1}>
      <Stack ml={deviceType === 'mobile' ? 0 : 3}>
        <Title title="desafios" subtitle="desafios" />
      </Stack>

      <Grid2 container spacing={deviceType === 'mobile' ? 2 : 4}>
        {challenges.map(challenge => (
          <Grid2 key={challenge.id} size={{ xs: 12, sm: 12, md: 6 }}  display='flex'>
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  )
}

export default Challenges
