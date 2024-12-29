import { Fade, Icon, Stack, Typography } from '@mui/material'

type BrandNameProps = {
  id?: string
}

export const BrandName: React.FC<BrandNameProps> = (props) => {
  return (
    <Fade in timeout={1000}>
      <Stack direction='row' zIndex={2} position='relative'>
        <Typography
          sx={{
            fontSize: 13,
            px: 1,
            mr: 1,
            fontWeight: '400',
            fontFamily: 'Poppins',
            textAlign: 'right',
            color: theme => theme.palette.grey[900],
            backgroundColor: theme => theme.palette.primary.main,
            width: 'max-content'
          }}
          id={props.id || 'brand-name'}
        >
          guilherme alexandre
        </Typography>
        <Icon color='action'>code</Icon>
      </Stack>
    </Fade>
  )
}
