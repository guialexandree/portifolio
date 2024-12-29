import '@fontsource/poppins'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { theme } from '@/styles/theme'
import { ThemeProvider as ThemeProviderMUI } from '@emotion/react'
import { CssBaseline } from '@mui/material'

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  return (
    <ThemeProviderMUI theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProviderMUI>
  )
}
