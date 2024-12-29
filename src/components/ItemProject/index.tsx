import {Icon, Paper, Stack, Typography } from '@mui/material'

type ItemProjectsProps = {
  type: 'web' | 'mobile' | 'api'
}

export const ItemProject: React.FC<ItemProjectsProps> = (props) => {
  const typeLabel = {
    web: 'web',
    mobile: 'mobile',
    api: 'api'
  }[props.type]

  const typeIcon = {
    web: 'computer',
    mobile: 'phone_iphone',
    api: 'device_hub'
  }[props.type]

  return (
    <Paper
      variant='outlined'
      id='item-project'
      sx={{
        gap: 1,
        py: 1,
        px: 2,
        borderRadius: 1,
        backgroundColor: 'grey.900',
        display: 'flex',
      }}
    >
      <Icon color='warning' sx={{  fontSize: 30 }}>{typeIcon}</Icon>
      <Stack justifyContent='center'>
        {props.type !== 'api' && <Typography variant='caption'>app</Typography>}
        <Typography variant='caption' sx={{ lineHeight: 1 }}>{typeLabel}</Typography>
      </Stack>
    </Paper>
  )
}
