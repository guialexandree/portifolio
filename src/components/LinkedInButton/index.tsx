import { lighten, Button, styled } from '@mui/material'
import React from 'react'

type LinkButtonProps = {
  onClick: () => void
  icon: React.ReactNode
  label: string
}

const ContainerStyle = styled(Button)(({ theme }) => {
  const backgroundHover = lighten(theme.palette.primary.light, 0.2)

  return {
    gap: 8,
    padding: '12px 18px',
    borderRadius: 115,
    backgroundColor: theme.palette.primary.light,
    transition: 'all 0.3s',
    color: theme.palette.primary.dark,
    '&:hover': {
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
      transform: 'translateY(-4px)',
      backgroundColor: backgroundHover,
    },
    [theme.breakpoints.up('sm')]: {
      width: 280,
    },
  }
})

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <ContainerStyle
      fullWidth
      onClick={props.onClick}
      variant='outlined'
      id={`link-button-${props.label.replace(' ', '')}`}
      startIcon={props.icon}
      sx={{ fontWeight: 600 }}
    >
      {props.label}
    </ContainerStyle>
  )
}
