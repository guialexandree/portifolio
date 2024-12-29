import { TypeAnimation } from 'react-type-animation'
import { Divider, Icon, Stack, Tooltip, Typography } from '@mui/material'
import { useDeviceType } from '@/hooks'
import { BrandName, ItemSocialMidia, WhatsAppButton } from '@/components'

export const PresentationTexts: React.FC = () => {
  const deviceType = useDeviceType()

  return (
    <>
      <TypeAnimation
        sequence={[
          'creative',
          1500,
          'fullstack',
          1500,
          'frontend',
          1500,
          'backend',
          1500,
          'mobile',
          1500,
        ]}
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: 56, fontWeight: '900', textTransform: 'uppercase', zIndex: 2 }}
      />

      <Typography
        variant='h6'
        sx={{
          fontSize: 56,
          fontWeight: '900',
          fontFamily: 'Poppins',
          lineHeight: 1,
          color: theme => theme.palette.grey[700],
          zIndex: 2,
          mb: 1
        }}
      >
        DEVELOPER
      </Typography>

      <BrandName id='presentation-texts-title' />
      <Divider sx={{ my: 3,  borderColor: theme => `${theme.palette.warning.main}80` }} />

      <Stack spacing={1}>
        <Stack direction='row' alignItems='center' pb={1}>
          <Icon sx={{ color: 'grey.500'}}>location_on</Icon>
          <Typography sx={{ color: 'grey.500'}} variant='caption'>São Paulo, SP - Brasil</Typography>
        </Stack>

        <Tooltip title={<Icon sx={{ fontSize: 18 }}>link</Icon>} placement='right'>
          <Stack
            direction='row'
            alignItems='center'
            sx={{
              gap: deviceType === 'mobile' ? 1 : 2,
              flexWrap: 'wrap',
              width: 'fit-content'
            }}>
            <ItemSocialMidia type='github' />
            <ItemSocialMidia type='linkedin' />
          </Stack>
        </Tooltip>
        <Stack direction='row' alignItems='center' mt={deviceType === 'mobile' ? 1 : 2}>
          <WhatsAppButton />
        </Stack>
      </Stack>
    </>
  )
}
