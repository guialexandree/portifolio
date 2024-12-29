import { Box } from '@mui/material'
import { AnimatedCursor, AppBar, OpenLinkSocialMidia, ThemeProvider } from '@/components'
import { useDeviceType } from '@/hooks'
import './styles.scss'

type GeneralTemplateProps = {
  children: React.ReactNode
}

export const GeneralTemplate: React.FC<GeneralTemplateProps> = (props) => {
  const deviceType = useDeviceType()

  return (
    <ThemeProvider>
      <AppBar />
      {deviceType !== 'mobile' && <AnimatedCursor />}
      <OpenLinkSocialMidia />

      <Box
        component='section'
        id='home'
        className='container-root'
        sx={{
          my: 2,
          pb: 6,
          maxWidth: '100vw',
          minHeight: '90vh',
          width: '100vw',
          overflowX: 'hidden',
        }}
      >
        {props.children}
      </Box>
    </ThemeProvider>
  )
}
