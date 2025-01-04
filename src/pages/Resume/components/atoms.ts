import { atom } from 'recoil'

export const selectedResumeTypeState = atom({
  key: 'selectedResumeTypeState',
  default: 'professional' as 'professional' | 'academic'
})

export const selectedResumePanelState = atom({
  key: 'selectedResumePanelState',
  default: 'frontend' as 'frontend' | 'backend' | 'mobile'
})
