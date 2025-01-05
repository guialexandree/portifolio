import { Box } from '@mui/material'
import { AppBar, Drawer, OpenLinkSocialMidia, ThemeProvider } from '@/components'
import './styles.scss'
import 'chart.js/auto'

type GeneralTemplateProps = {
  children: React.ReactNode
}

export const GeneralTemplate: React.FC<GeneralTemplateProps> = (props) => {

  return (
    <ThemeProvider>
      <AppBar />
      <Drawer />
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
