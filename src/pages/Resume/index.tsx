import { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { Alert, Box, Grid2, Stack } from '@mui/material'
import { Title } from '@/components'
import { selectedResumePanelState, selectedResumeTypeState } from '@/pages/Resume/components/atoms'
import { ProjectTypesList, TimelineResume, ProffessionalExperienceChart } from '@/pages/Resume/components'

const Resume: React.FC = () => {
  const selectedResumePanel = useRecoilValue(selectedResumePanelState)
  const selectedResumeType = useRecoilValue(selectedResumeTypeState)

  const calculateYearsDifference = useCallback((startDate: string): string => {
    const start = new Date(startDate)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - start.getTime())
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25)
    return diffYears.toFixed(0)
  }, [])

  return (
    <Box
      id='resume'
      sx={{
        mt: 6,
        flex: 1,
        pt: { xs: 4, sm: 8 },
        pb: { xs: 6, sm: 10 },
        px: { xs: 3, sm: 8 },
        width: '100%',
        minHeight: '40vh',
        backgroundImage: 'linear-gradient(135deg, rgba(51,153,255,1) 0%, rgba(22,106,190,1) 100%)',
      }}
    >
      <Stack justifyContent='center'>
        <Title title="resumo" subtitle="resumo" />
      </Stack>

      <Box sx={{
        display: { xs: 'block', sm: 'none' },
        my: { xs : 3, sm: 0 },
      }}>
        <ProffessionalExperienceChart />
        <Alert severity='warning' sx={{ mt: 2, backgroundColor: 'primary.light', }}>
          {`${calculateYearsDifference('2017-04-01')} anos de experiência profissional na área de tecnologia`}
        </Alert>
      </Box>

      <Grid2 container spacing={{ xs: 2, sm: 10 }}>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <TimelineResume type={selectedResumeType} />
        </Grid2>

        <Grid2 size={{ xs: 12, lg: 6 }} >
          <Stack spacing={2} >
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ProffessionalExperienceChart />
              <Alert severity='warning' sx={{ mt: 2, backgroundColor: 'primary.main', }}>
                {`${calculateYearsDifference('2017-04-01')} anos de experiência profissional na área de tecnologia`}
              </Alert>
            </Box>

            <ProjectTypesList type={selectedResumePanel} />

          </Stack>
        </Grid2>
      </Grid2>

    </Box>
  )
}

export default Resume