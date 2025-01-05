import { selectedSocialMidiaState } from '@/components/atoms'
import { Box, Modal, Typography } from '@mui/material'
import { useSetRecoilState } from 'recoil'

export const OpenProjectDetails: React.FC = () => {
  const setSocialMidia = useSetRecoilState(selectedSocialMidiaState)

  const handleClose = (): void => {
    setSocialMidia(currenValue => ({ ...currenValue, link: '' }))
  }

  return (
    <Modal
      open={false}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        bgcolor: 'background.paper',
        border: '2px solid',
        borderColor: 'grey.900',
        boxShadow: 24,
        p: 4,
      }}
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  )
}
