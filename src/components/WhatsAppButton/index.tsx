import { Paper, Stack, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export const WhatsAppButton: React.FC = () => {
  return (
    <Paper
      onClick={() => console.log('click')}
      variant='outlined'
      id='item-project'
      sx={{
        gap: 1,
        py: 1,
        px: 2,
        borderRadius: 8,
        backgroundColor: 'background.paper',
        display: 'flex',
        cursor: 'pointer',
        width: 230,
        color: 'grey.600',
        '&:hover': {
          color: 'success.main',
          transition: 'all 0.3s',
        }
      }}
    >
      <WhatsAppIcon color='success' />
      <Stack justifyContent='center'>
        <Typography variant='caption' sx={{ lineHeight: 1 }}>
          conversar no whatsapp
        </Typography>
      </Stack>
    </Paper>
  )
}
