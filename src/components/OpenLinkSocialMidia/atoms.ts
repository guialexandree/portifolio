import { atom } from 'recoil'

export const selectedSocialMidiaState = atom({
  key: 'selectedSocialMidiaState',
  default: {
    link: '',
    type: 'github' as 'github' | 'linkedin' | 'whatsapp'
  }
})
