import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Icon, Stack } from '@mui/material'
import { useRecoilState } from 'recoil'
import { selectedSocialMidiaState } from './atoms'
import { useDeviceType } from '@/hooks'
import gitHubImg from '@/assets/github-header.png'
import linkedinImg from '@/assets/linkedin-header.png'

export const OpenLinkSocialMidia: React.FC = () => {
  const deviceType = useDeviceType()
  const [selectedSocialMidia, setSocialMidia] = useRecoilState(selectedSocialMidiaState)

  const titleType = {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-mail',
    whatsapp: 'WhatsApp'
  }[selectedSocialMidia.type]

  const imgType = {
    github: gitHubImg,
    linkedin: linkedinImg,
    email: '',
    whatsapp: ''
  }[selectedSocialMidia.type]

  const handleOpenLink = (): void => {
    window.open(selectedSocialMidia.link, '_blank')
    handleClose()
  }

  const handleClose = (): void => {
    setSocialMidia(currenValue => ({ ...currenValue, link: '' }))
  }

  return (
    <Dialog
      open={!!selectedSocialMidia.link && selectedSocialMidia.type !== 'whatsapp'}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          borderRadius: 4,
        }
      }}
    >
      <Stack direction='row' justifyContent='center' alignItems='center' >
        {deviceType !== 'mobile' &&
          <Box
            component='img'
            width={240}
            height={200}
            src={imgType}
            sx={{ objectFit: 'cover' }}
          />


        }
        <Stack>
          <DialogTitle id="alert-dialog-title" sx={{ fontWeight: '900', textTransform: 'uppercase' }}>
            {`visitar ${titleType}`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              O link será aberto em uma nova aba, deseja continuar?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>voltar</Button>
            <Button onClick={handleOpenLink} variant='contained' endIcon={<Icon>link</Icon>}>
              {`abrir ${deviceType !== 'mobile' ? 'em nova aba' : ''}`}
            </Button>
          </DialogActions>
        </Stack>
      </Stack>
    </Dialog>
  )
}
