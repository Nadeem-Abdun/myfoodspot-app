import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Post(props) {
    return (
        <>
            <Card sx={{ margin: 3 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {props.title.slice(0, 1).toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.title}
                    subheader={new Date().toLocaleString()}
                />
                <CardMedia
                    component="img"
                    height="400px"
                    image={props.url}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minima dolor saepe fuga ipsum distinctio et molestias est quibusdam. Ea molestiae nemo suscipit! Dolor, nisi cumque. Veniam repellat magni rem, sint provident nobis, neque ut accusantium harum id in officiis nemo, ipsam pariatur vero dignissimos veritatis nihil iusto eveniet doloribus.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} color='error' />
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}
