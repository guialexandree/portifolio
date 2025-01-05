import * as React from 'react'
import { useRecoilState } from 'recoil'
import { isOpenDrawer } from './atoms'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer as DrawerMUI, Icon } from '@mui/material'
import { BrandName } from '../BrandName'
import { useDeviceType } from '@/hooks'

const appNavigation = [
  {
    id: '#projects',
    icon:  'diamond',
    title:  'projetos',
    subtitle:  'projetos pessoais publicados',
  },
  {
    id: '#resume',
    icon:  'code',
    title:  'resumo',
    subtitle:  'detalhes da carreira e formação',
  },
  {
    id: '#challenges',
    icon:  'sports_score',
    title:  'desafios',
    subtitle:  'desafios profissionais dev',
  },
  {
    id: 'projetos',
    icon: 'phone_iphone',
    title:  'contato',
    subtitle:  'redes sociais e contato',
  },
]

export const Drawer:React.FC = () => {
  const [open, setOpen] = useRecoilState(isOpenDrawer)
  const devicetype = useDeviceType()

  const DrawerList = (): React.ReactNode =>
    <Box sx={{ width: { xs: 'auto', sm: 380 } }} role="presentation" onClick={() => { setOpen(false) }}>
      <List disablePadding sx={{ flexDirection: 'column',  py: 4}}>

        <Box sx={{ px: 3, mb: 4 }}>
          <BrandName id='drawer-texts-title' />

        </Box>

        {appNavigation.map((navigate) => (
          <ListItem key={navigate.id} component='a' sx={{ color: 'grey.200' }} href={navigate.id}>
            <ListItemButton>
              <ListItemIcon>
                <Icon>{navigate.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={navigate.title} secondary={navigate.subtitle} slotProps={{
                secondary: { sx: { color: 'grey.600', lineHeight: 1 } }
              }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>

  return (
    <DrawerMUI anchor={devicetype === 'mobile' ? 'top' : 'left'} open={open} onClose={() => { setOpen(false) }}>
      <DrawerList />
    </DrawerMUI>
  )
}
