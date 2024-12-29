import { TypeAnimation } from 'react-type-animation'
import { Box, Divider, Grid2, Icon, Stack, Tooltip, Typography } from '@mui/material'
import { useDeviceType } from '@/hooks'
import { BrandName, ItemSocialMidia, WhatsAppButton } from '@/components'
import bgHeaderBottomImg from '@/assets/bg-header-bottom.svg'
import bgHeaderBottomShadowImg from '@/assets/bg-header-bottom-shadow.svg'
import { useMemo } from 'react'

export const PresentationTexts: React.FC = () => {
  const deviceType = useDeviceType()
  const height = useMemo(() => deviceType === 'mobile' ? '65vh' : '65vh', [deviceType])

  return (
    <Stack
      id='presentation-texts'
      sx={{
        pt: 7,
        px: deviceType === 'mobile' ? 4 : 8,
        height: height,
        width: '100%',
        backgroundColor: '#161616',
        position: 'relative'
      }}>
        <Grid2 container>
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
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
          </Grid2>
        </Grid2>



      <Box
        position='absolute'
        top={`calc(${height} - 30px)`}
        right={0}
        width={deviceType === 'mobile' ? '100%' : '65%'}
        zIndex={2}
      >
        <img src={bgHeaderBottomImg} alt="Imagem de fundo" />
      </Box>

      <Box
        position='absolute'
        top={`calc(${height} - 28px)`}
        right={'-30%'}
        width={deviceType === 'mobile' ? '100%' : '65%'}
        zIndex={1}
      >
        <img src={bgHeaderBottomShadowImg} alt="Imagem de fundo" />
      </Box>
    </Stack>
  )
}
