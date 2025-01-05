import { useSetRecoilState } from 'recoil'
import { Accordion, AccordionDetails, AccordionSummary, Icon, lighten, Stack, Typography, useTheme } from '@mui/material'
import { selectedResumePanelState } from '../atoms'
import { resumes } from '@/_mocks'

interface ProjectTypesListProps {
  type: 'frontend' | 'backend' | 'mobile'
}

export const ProjectTypesList: React.FC<ProjectTypesListProps> = (props) => {
  const theme = useTheme()
  const setResumePanel = useSetRecoilState(selectedResumePanelState)
  const backgroundProjectColor = lighten(theme.palette.primary.main, 0.1)

  return (
    <Stack>
      <Accordion
        expanded={props.type === 'frontend'}
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
        expanded={props.type === 'backend'}
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
        expanded={props.type === 'mobile'}
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
  )
}
