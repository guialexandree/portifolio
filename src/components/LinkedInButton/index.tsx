import { lighten, Paper, Stack, styled, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

type LinkedInButtonProps = {
  onClick: () => void
}

const ContainerSyle = styled(Paper)(({ theme }) => {
  const backgroundHover = lighten(theme.palette.primary.light, 0.2)

  return {
    gap: '8px',
    padding: '12px 18px',
    borderRadius: '115px',
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    cursor: 'pointer',
    width: 230,
    transition: 'all 0.3s',
    color: theme.palette.primary.dark,
    '&:hover': {
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
      transform: 'translateY(-4px)',
      backgroundColor: backgroundHover,
    }
  }
})

export const LinkedInButton: React.FC<LinkedInButtonProps> = (props) => {
  return (
    <ContainerSyle
      onClick={props.onClick}
      variant='outlined'
      id='linkedin-button-resume'
    >
      <LinkedInIcon />
      <Stack justifyContent='center'>
        <Typography variant='caption' sx={{ lineHeight: 1 }} >
          ver detalhes no linkedin
        </Typography>
      </Stack>
    </ContainerSyle>
  )
}
