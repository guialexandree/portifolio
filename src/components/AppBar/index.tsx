import React from 'react'
import { AppBar as AppBarMUI, Button, Icon, IconButton, Stack, Toolbar, useScrollTrigger } from '@mui/material'
import { BrandName } from '@/components'
import { useDeviceType } from '@/hooks'

type ElevationScrollProps = {
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>
}

export const ElevationScroll: React.FC<ElevationScrollProps> = (props) => {
  const { children, window } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 280,
    target: window ? window() : undefined
  })

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 1 : 0
      })
    : null
}

export const AppBar: React.FC = () => {
  const deviceType = useDeviceType()

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: document.getElementById('presentation-texts-title')?.getBoundingClientRect()?.right || 280,
    target: window
  })

  return (
    <ElevationScroll>
      <AppBarMUI sx={{ backgroundColor: '#161616'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: deviceType !== 'mobile' ? 2 : 0 }}
          >
            <Icon>menu</Icon>
          </IconButton>

          {trigger && <BrandName />}

          <Stack direction='row' flex={1} justifyContent='flex-end'>
            <Button
              variant='contained'
              color='secondary'
              endIcon={<Icon color='primary'>diamond</Icon>}
          >
            projetos
          </Button>
          </Stack>
        </Toolbar>
      </AppBarMUI>
    </ElevationScroll>
  )
}
