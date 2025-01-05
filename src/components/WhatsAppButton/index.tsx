import { useSetRecoilState } from 'recoil'
import { Button } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { selectedSocialMidiaState } from '@/components/atoms'
import { LinkButton } from '@/components'
import { useDeviceType } from '@/hooks'
import { socialMidias } from '@/_mocks'

type WhatsAppButtonProps = {
  variant?: 'square' | 'rounded'
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = (props) => {
  const setLink = useSetRecoilState(selectedSocialMidiaState)
  const deviceType = useDeviceType()

  if (props.variant === 'rounded') {
    return (
      <LinkButton
        icon={<WhatsAppIcon sx={{ fontSize: 24 }} />}
        label='chamar no whatsapp'
        onClick={() => { setLink({ link: socialMidias.linkedin, type: 'whatsapp' }) }}
      />
    )
  }

  return (
    <Button
      startIcon={<WhatsAppIcon color='success' />}
      onClick={() => { setLink({ link: socialMidias.whatsapp, type: 'whatsapp' }) }}
      fullWidth={deviceType === 'mobile'}
      id='item-project'
      sx={{
        py: 1,
        px: 3,
        color: 'grey.600',
        backgroundColor: 'background.paper',
        textTransform: 'none',
        fontSize: 14,
        transition: 'all 0.3s',
        '&:hover': {
          color: 'success.main',
          transform: 'translateX(4px)',
        }
      }}
    >
      conversar no whatsapp
    </Button>
  )
}
