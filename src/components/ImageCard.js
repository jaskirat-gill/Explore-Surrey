import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        maxHeight: 400,
        background: 'rgba(0,0,0,0.5)!important',
        margin: '20px',
    },
    media: {
        height: 240,
    },
    title:{
        fontFamily: 'Nunito',
        fontWeight: "bold",
        fontSize: '2rem',
        color: '#fff',
    },
    desc: {
        fontFamily: 'Nunito',
        fontWeight: "bold",
        fontSize: '1.5rem',
        color: '#ddd!important', 
    }
});

export default function ImageCard({infoCard}) {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
            className={classes.media}
            image={infoCard.imageUrl}
        />
        <CardContent>
            <Typography 
                gutterBottom 
                variant="h5" 
                component="h1" 
                className={classes.title}
            >
                {infoCard.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                {infoCard.description}
            </Typography>
        </CardContent>
    </Card>
  );
}
