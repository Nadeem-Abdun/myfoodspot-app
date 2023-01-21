import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { Avatar, Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Add() {
  const [addOpen, setAddOpen] = useState(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor:"background.default",
    color:"text.primary",
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Box sx={{ display: 'block', position: 'fixed', bottom: '3vh', left: '1.5vw' }}>
        <Tooltip onClick={(e) => { setAddOpen(true) }}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>
      <Box>
        <Modal
          open={addOpen}
          onClose={(e) => { setAddOpen(false) }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant="h6" component="h2" textAlign='center' fontWeight='500'>Create Recipes</Typography>
            <Stack direction='row' mt={1}>
              <Avatar sx={{ maxHeight: 40, maxWidth: 40 }} alt="Unknown Person" src="https://www.singemindia.com/wp-content/uploads/2019/06/Passport-Size-Pic.jpg" />
              <Typography ml={1} variant="h6" component="h6">Abhi Ram</Typography>
            </Stack>
            <TextField id="standard-basic" label="What's on your mind?" variant="standard" multiline rows={3} mt={1} sx={{ width: '90%' }} />
            <Stack direction='row' mt={1} gap={1}>
              <EmojiEmotionsIcon color='primary' />
              <ImageIcon color='secondary' />
              <VideoCameraBackIcon color='success' />
              <PersonAddIcon color='error' />
            </Stack>
            <Box mt={3}>
              <Button variant="contained" endIcon={<SendIcon />} sx={{ width: '90%' }}> Post </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  )
}
