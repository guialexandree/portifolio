import { useSetRecoilState } from 'recoil'
import { Box, Chip, Divider, Icon, Stack, Tab, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { LinkButton, WhatsAppButton } from '@/components'
import { selectedSocialMidiaState } from '@/components/atoms'
import { selectedResumeTypeState } from '../atoms'
import { resumes, socialMidias } from '@/_mocks'

interface TimelineResumeProps {
  type: 'professional' | 'academic'
}

export const TimelineResume: React.FC<TimelineResumeProps> = (props) => {
  const setLink = useSetRecoilState(selectedSocialMidiaState)
  const setResumeType = useSetRecoilState(selectedResumeTypeState)

  return (
    <TabContext value={props.type}>
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
              onClick={() => { setLink({ link: socialMidias.linkedin, type: 'linkedin' }) }}
            />
            <WhatsAppButton variant='rounded' />
          </Stack>
        </Stack>
      </TabPanel>
      <TabPanel value='academic'>Item Two</TabPanel>
    </TabContext>
  )
}
