import React from 'react'
import { Box, Divider } from "@mui/material"
import Post from './Post'

export default function Feed() {

  return (<>
    <Box flex={4} p={2}>
      <Post title='Pancakes Maple Syrup' url='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg' />
      <Divider />
      <Post title='Veggies Salad' url='https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg' />
      <Divider />
      <Post title='Macarons Raspberries Pastries' url='https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg' />
      <Divider />
      <Post title='Margherita Pizza' url='https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg' />
      <Divider />
      <Post title='Jams And Jars' url='https://cdn.pixabay.com/photo/2014/08/26/15/28/jam-428094_960_720.jpg' />
      <Divider />
    </Box>
  </>
  )
}
