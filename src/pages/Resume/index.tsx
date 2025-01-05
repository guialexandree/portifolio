import { useCallback } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Chip, Divider, Grid2, Icon, lighten, Stack, Tab, Typography, useTheme } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { LinkButton, ProffessionalExperienceChart, Title } from '@/components'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { selectedSocialMidiaState } from '@/components/OpenLinkSocialMidia/atoms'
import { resumes, socialMidias } from '@/_mocks'
import { selectedResumePanelState, selectedResumeTypeState } from '@/pages/Resume/components/atoms'

const Resume: React.FC = () => {
  const theme = useTheme()
  const setSocialMidia = useSetRecoilState(selectedSocialMidiaState)
  const [selectedResumePanel, setResumePanel] = useRecoilState(selectedResumePanelState)
  const [selectedResumeType, setResumeType] = useRecoilState(selectedResumeTypeState)
  const backgroundProjectColor = lighten(theme.palette.primary.main, 0.1)

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
          <TabContext value={selectedResumeType}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList  indicatorColor='secondary' textColor='secondary' onChange={(_, selected) => { setResumeType(selected) }} aria-label="lab API tabs example">
                <Tab label="PROFISSIONAL" value='professional' />
                <Tab label="ACADÊMICO" value='academic' />
              </TabList>
            </Box>

            <TabPanel value='professional' sx={{ px: 0 }}>
              {resumes[0].description.map((descriptionProps, index) => (
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
              ))}

              <Stack mt={4}>
                <Typography variant='h6' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
                  FUNÇÕES ATUAIS
                </Typography>

                <Divider sx={{ borderColor: 'secondary.main' }} />

                <Stack mt={2} flexWrap='wrap' spacing={1}>
                  {resumes[0].funcions.current.map((func) => (
                    <Stack direction='row' key={func} alignItems='center' spacing={1}>
                      <Icon>check</Icon>
                      <Typography variant='body2' fontWeight='300' >
                        {func}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Stack
                  mt={4}
                  justifyContent='center'
                  sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1
                  }}
                >
                  <LinkButton
                    icon={<LinkedInIcon sx={{ fontSize: 24 }} />}
                    label='ver no linkedin'
                    onClick={() => { setSocialMidia({ link: socialMidias.linkedin, type: 'linkedin' }) }}
                  />
                  <LinkButton
                    icon={<WhatsAppIcon sx={{ fontSize: 24 }} />}
                    label='chamar no whatsapp'
                    onClick={() => { setSocialMidia({ link: socialMidias.linkedin, type: 'linkedin' }) }}
                  />
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel value='academic'>Item Two</TabPanel>
          </TabContext>
        </Grid2>

        <Grid2 size={{ xs: 12, lg: 6 }} >
          <Stack spacing={2} >
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ProffessionalExperienceChart />
              <Alert severity='warning' sx={{ mt: 2, backgroundColor: 'primary.main', }}>
                {`${calculateYearsDifference('2017-04-01')} anos de experiência profissional na área de tecnologia`}
              </Alert>
            </Box>

            <Stack>
              <Accordion
                expanded={selectedResumePanel === 'frontend'}
                onChange={() => { setResumePanel('frontend') }}
                sx={{
                    backgroundColor: backgroundProjectColor,
                    color: 'primary.dark'
                  }}
              >
                <AccordionSummary
                  expandIcon={<Icon>expand_more</Icon>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Stack component='header' direction='row' alignItems='center' spacing={2}>
                    <Icon>devices</Icon>
                    <Typography variant='h5' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
                      FRONTEND
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack flexWrap='wrap'>
                    {resumes[0].funcions.web.map((func) => (
                      <Stack direction='row' key={func} alignItems='center' spacing={1}>
                        <Icon>check</Icon>
                        <Typography variant='body2' fontWeight='300' >
                          {func}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={selectedResumePanel === 'backend'}
                onChange={() => { setResumePanel('backend') }}
                sx={{
                    backgroundColor: backgroundProjectColor,
                    color: 'primary.dark'
                  }}
              >
                <AccordionSummary
                  expandIcon={<Icon>expand_more</Icon>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Stack component='header' direction='row' alignItems='center' spacing={2}>
                    <Icon>device_hub</Icon>
                      <Typography variant='h5' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
                        BACKEND
                      </Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack flexWrap='wrap'>
                    {resumes[0].funcions.api.map((func) => (
                      <Stack direction='row' key={func} alignItems='center' spacing={1}>
                        <Icon>check</Icon>
                        <Typography variant='body2' fontWeight='300' >
                          {func}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={selectedResumePanel === 'mobile'}
                onChange={() => { setResumePanel('mobile') }}
                sx={{
                    backgroundColor: backgroundProjectColor,
                    color: 'primary.dark'
                  }}
              >
                <AccordionSummary
                  expandIcon={<Icon>expand_more</Icon>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Stack component='header' direction='row' alignItems='center' spacing={2}>
                    <Icon>phone_iphone</Icon>
                      <Typography variant='h5' fontWeight='600' sx={{ mt: { xs: 3, sm: 0 }}}>
                        MOBILE
                      </Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack flexWrap='wrap'>
                    {resumes[0].funcions.mobile.map((func) => (
                      <Stack direction='row' key={func} alignItems='center' spacing={1}>
                        <Icon>check</Icon>
                        <Typography variant='body2' fontWeight='300' >
                          {func}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Stack>

          </Stack>
        </Grid2>
      </Grid2>

    </Box>
  )
}

export default Resume