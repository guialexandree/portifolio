import { Icon, Paper, Stack, styled, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useSetRecoilState } from 'recoil'
import { selectedSocialMidiaState } from '../OpenLinkSocialMidia/atoms'
import { socialMidias } from '@/_mocks/social-midias'

type ItemSocialMidiaProps = {
  type: 'linkedin' | 'github' | 'email'
}

const ContainerSyle = styled(Paper)(({ theme }) => ({
  padding: '8px 20px',
  gap: 4,
  display: 'flex',
  borderColor: 'transparent',
  color: theme.palette.grey[600],
  '&:hover': {
    transition: 'all 1s',
    color: theme.palette.grey[200],
    borderColor: theme.palette.grey[800],
  },
}))

export const ItemSocialMidia: React.FC<ItemSocialMidiaProps> = (props) => {
  const setSocialMidia = useSetRecoilState(selectedSocialMidiaState)

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
    <ContainerSyle
      variant='outlined'
      id='item-project'
      onClick={() => setSocialMidia({ link: socialMidias[props.type], type: props.type })}
    >
      {typeIcon}
      <Stack justifyContent='center'>
        <Typography variant='caption' sx={{ lineHeight: 1 }}>{typeLabel}</Typography>
      </Stack>
    </ContainerSyle>
  )
}
