import { ProjectModel } from '@/_mocks/projects'
import { useDeviceType } from '@/hooks'
import { Button, Chip, Grid2, Icon, Paper, Stack, Typography } from '@mui/material'
import { ItemProject } from '@/components'

type ProjectsProps = {
  project: ProjectModel
}

export const Project: React.FC<ProjectsProps> = (props) => {
  const deviceType = useDeviceType()

  return (
    <Paper
      onClick={() => console.log('click')}
      sx={{
        backgroundColor: theme => `${theme.palette.background.paper}cc`,
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        '&:hover': {
          backgroundColor: theme => theme.palette.action.selected,
          transition: 'all 0.3s',
          cursor: 'pointer',
          '& p': {
            color: theme => theme.palette.grey[200],
          },
          '& .MuiButtonBase-root': {
            opacity: 1,
            transition: 'all 0.8s'
          },
          '& #ver-mais .material-icons': {
            color: 'primary.main',
            opacity: 1,
            transition: 'all 0.8s'
          },
          '& #item-project': {
            transition: 'all 0.8s',
            backgroundColor: 'grey.700',
            boxShadow: 0,
          }
        },
      }}
    >
      <Grid2 container flex={1}>
        <Grid2 size={{ xs: 12 }}>
          <Stack flex={1} spacing={1}>
            <Stack direction='row' justifyContent='space-between' alignItems={deviceType === 'mobile' ? 'center' : 'flex-start'}>
              <Typography
                variant='h4'
                fontWeight='900'
                color='grey.500'
                sx={{ textTransform: 'uppercase' }}
              >
                {props.project.title}
              </Typography>

              {deviceType === 'mobile'
                ? <Icon id='ver-mais' sx={{ opacity: 0 }}>diamond</Icon>
                : <Button
                  id='ver-mais'
                  size='small'
                  color='inherit'
                  endIcon={<Icon>diamond</Icon>}
                  sx={{
                    opacity: 0,
                    backgroundColor: 'transparent',
                    fontSize: 12,
                    fontWeight: '600',
                    letterSpacing: 1,
                    '&:hover': {
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  ver detalhes
                </Button>
              }
            </Stack>
            <Typography fontWeight='300' color='grey.600'>{props.project.description}</Typography>
          </Stack>
        </Grid2>
      </Grid2>

      <Stack direction='row' flexWrap='wrap' gap={deviceType === 'mobile' ? 1 : 2} mt={3}>
        {props.project.platforms.mobile && <ItemProject type='mobile' />}
        {props.project.platforms.web && <ItemProject type='web' />}
        {props.project.platforms.api && <ItemProject type='api' />}
      </Stack>

      {!!props.project?.tags?.length &&
        <Stack direction='row' flexWrap='wrap' gap={1} mt={3}>
          {props.project.tags.map(tag =>
            <Chip label={tag} size='small' />
          )}
        </Stack>
      }
    </Paper>
  )
}
