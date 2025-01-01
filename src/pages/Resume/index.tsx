import { Box, Chip, Divider, Grid2, Icon, lighten, Paper, Stack, styled, Tab, Typography } from '@mui/material'
import { LinkedInButton, Title } from '@/components'
import { useDeviceType } from '@/hooks'
import { resumes } from '@/_mocks/resume-mock'
import { selectedSocialMidiaState } from '@/components/OpenLinkSocialMidia/atoms'
import { useSetRecoilState } from 'recoil'
import { socialMidias } from '@/_mocks'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Bar } from 'react-chartjs-2'
import { BarController } from 'chart.js'

const ContainerSyle = styled(Paper)(({ theme }) => {
  const backgroundHover = lighten(theme.palette.primary.main, 0.1)

  return {
    padding: 16,
    borderRadius: 4,
    backgroundColor: backgroundHover,
    transition: 'all 0.3s',
    color: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: backgroundHover,
    }
  }
})

const Resume: React.FC = () => {
  const deviceType = useDeviceType()
  const setSocialMidia = useSetRecoilState(selectedSocialMidiaState)

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
        backgroundImage: 'linear-gradient(135deg, rgba(51,153,255,1) 0%, rgba(51,153,255,1) 64%, rgba(22,106,190,1) 100%)',
      }}
    >
      <Stack justifyContent='center'>
        <Title title="resumo" subtitle="resumo" />
      </Stack>

      <Grid2 container spacing={{ xs: 2, sm: 10 }}>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <TabContext value={'general'}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList indicatorColor='secondary' textColor='secondary' onChange={() => {}} aria-label="lab API tabs example">
                <Tab label="PROFISSIONAL" value="general" />
                <Tab label="ACADÊMICO" value="2" />
                <Tab label="TÉCNICO" value="3" />
              </TabList>
            </Box>

            <TabPanel value="general" sx={{ px: 0 }}>
              {
                resumes[0].description.map((descriptionProps, index) => (
                  <Stack key={index} spacing={1} mb={3}>
                    <Typography variant='body1' fontWeight='300' >
                      {descriptionProps.description}
                    </Typography>
                    <Stack direction='row' flexWrap='wrap' gap={0.5}>
                      {descriptionProps.tags?.map(tag => (
                        <Chip
                          key={tag}
                          size='small'
                          label={tag}
                          sx={{
                            borderRadius: 1,
                            color: 'primary.dark',
                            backgroundColor: 'primary.light',
                            }}
                        />
                      ))}
                    </Stack>
                  </Stack>
                ))
              }

              <Stack mt={4}>
                <Typography variant='h6' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
                  FUNÇÕES ATUAIS
                </Typography>

                <Divider sx={{ borderColor: 'secondary.main' }} />

                <Stack mt={2} flexWrap='wrap' spacing={1}>
                  {resumes[0].funcions.map((func) => (
                    <Stack direction='row' key={func} alignItems='center' spacing={1}>
                      <Icon>check</Icon>
                      <Typography variant='body2' fontWeight='300' >
                        {func}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Stack direction='row' mt={4} justifyContent='center'>
                  <LinkedInButton onClick={() => { setSocialMidia({ link: socialMidias.linkedin, type: 'linkedin' }) }} />
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Grid2>

        <Grid2 size={{ xs: 12, lg: 6 }} >
          <Stack spacing={2} >
              <Bar
                data={{
                  labels: ['frontend', 'backend', 'mobile', 'desktop' ],
                  datasets: [
                    {
                      label: 'Tempo de experiência profissional', 
                      borderWidth : 1,
                      data: [6, 3, 1, 1],
                      inflateAmount: 1,
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(255, 159, 64, 0.5)',
                        'rgba(255, 205, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                      ],
                      borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                      ]
                    }
                  ],
                }}
                options={{
                  responsive: true,
                  indexAxis: 'y',
                  color: 'white',
                  plugins: {
                    legend: { display: false, position: 'top' },
                    title: { display: true, text: 'TEMPO DE XP(anos)', color: '#fff', font: { size: 18 }},
                  },
                  scales: {
                    x: {
                      grid: {
                        display: true,
                      },
                      ticks: {
                        color: '#fff',
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                        color: '#ffffff52',
                      },
                      ticks: {
                        color: '#fff',
                        display: true,
                      },
                    },
                  },
                }}
              />

            {/* <ContainerSyle>
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
            </ContainerSyle>

            <ContainerSyle>
              <Typography variant='h5' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
                BACKEND
              </Typography>


              <Stack direction='row'mt={2} flexWrap='wrap' gap={1} >
                <Chip label='net framework 4.5+' sx={{ borderRadius: 1 }} />
                <Chip label='net core' sx={{ borderRadius: 1 }} />
                <Chip label='node' sx={{ borderRadius: 1 }} />
                <Chip label='nestjs' sx={{ borderRadius: 1 }} />
              </Stack>
            </ContainerSyle>

            <ContainerSyle>
              <Typography variant='h5' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
                MOBILE
              </Typography>


              <Stack direction='row'mt={2} flexWrap='wrap' gap={1} >
                <Chip label='ionic' sx={{ borderRadius: 1 }} />
                <Chip label='react native' sx={{ borderRadius: 1 }} />
              </Stack>
            </ContainerSyle>

            <ContainerSyle>
              <Typography variant='h5' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
                DESKTOP
              </Typography>

              <Stack direction='row'mt={2} flexWrap='wrap' gap={1} >
                <Chip label='C#' sx={{ borderRadius: 1 }} />
              </Stack>
            </ContainerSyle> */}

          </Stack>
        </Grid2>
      </Grid2>

    </Box>
  )
}

export default Resume