import { Icon, Paper, Stack, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useSetRecoilState } from 'recoil'
import { linkSocialMidiaState } from '../OpenLinkSocialMidia/atoms'
import { socialMidias } from '@/_mocks/social-midias'

type ItemSocialMidiaProps = {
  type: 'linkedin' | 'github' | 'email'
}

export const ItemSocialMidia: React.FC<ItemSocialMidiaProps> = (props) => {
  const setOpenLink = useSetRecoilState(linkSocialMidiaState)

  const typeLabel = {
    linkedin: 'linkedin',
    github: 'github',
    email: 'e-mail',
  }[props.type]

  const typeIcon = {
    linkedin: <LinkedInIcon />,
    github: <GitHubIcon />,
    email: <Icon>email</Icon>,
  }[props.type]


  return (
    <Paper
      variant='outlined'
      id='item-project'
      onClick={() => setOpenLink(socialMidias[props.type])}
      sx={{
        gap: 1,
        py: 1,
        px: 2,
        borderRadius: 1,
        backgroundColor: 'background.paper',
        display: 'flex',
        borderColor: 'transparent',
        color: 'grey.600',
        '&:hover': {
          color: 'grey.200',
          transition: 'all 0.3s',
          borderColor: 'grey.800',
        },
      }}
    >
      {typeIcon}
      <Stack justifyContent='center'>
        <Typography variant='caption' sx={{ lineHeight: 1 }}>{typeLabel}</Typography>
      </Stack>
    </Paper>
  )
}
