import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function Rightbar() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' mr={2}>
        <Typography variant='h6' mt={1}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant='h6' mt={1}>Trending Recipes!</Typography>
        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img src='https://material-ui.com/static/images/image-list/breakfast.jpg' alt='breakfast' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://material-ui.com/static/images/image-list/burgers.jpg' alt='burger' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c' alt='coffee' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62' alt='honey' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25' alt='mushroom' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1567306301408-9b74779a11af' alt='tomato' />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' mt={1}>Last Conversation!</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Brunch this weekend?" secondary={<React.Fragment><Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">Sharon</Typography> {" — What’s your favorite fast-food restaurant?…"} </React.Fragment>}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
