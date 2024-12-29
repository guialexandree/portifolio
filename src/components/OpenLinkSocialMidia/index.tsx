import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Icon } from '@mui/material'
import { useRecoilState } from 'recoil'
import { linkSocialMidiaState } from './atoms'
import { useDeviceType } from '@/hooks'

export const OpenLinkSocialMidia: React.FC = () => {
  const deviceType = useDeviceType()
  const [link, setLink] = useRecoilState(linkSocialMidiaState)

  const handleOpenLink = (): void => {
    window.open(link, '_blank')
    setLink('')
  }

  return (
    <Dialog
      open={!!link}
      onClose={() => { setLink('') }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ fontWeight: '900', textTransform: 'uppercase' }}>
        Direcionamento Mídias Social
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          O link será aberto em uma nova aba, deseja continuar?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setLink('') }}>voltar</Button>
        <Button onClick={handleOpenLink} variant='contained' endIcon={<Icon>link</Icon>}>
          {`abrir ${deviceType !== 'mobile' ? 'em nova aba' : ''}`}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
