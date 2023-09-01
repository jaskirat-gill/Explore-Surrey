import React, {useState, useEffect} from "react";
import { Collapse, CssBaseline, makeStyles } from "@material-ui/core";
import NavBar from "../components/NavBar";
import ImageCard from "../components/ImageCard";
import readMoreCards from "../static/readMoreCards";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    scrollBar: {
        overflowY:'scroll',
        maxHeight: '100vh'
    }
}));
export default function ReadMore() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])
    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <Collapse className={classes.scrollBar} in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                <ImageCard infoCard={readMoreCards[0]}/>
                <ImageCard infoCard={readMoreCards[1]}/>
                <ImageCard infoCard={readMoreCards[2]}/>
                <ImageCard infoCard={readMoreCards[3]}/>
                <ImageCard infoCard={readMoreCards[4]}/>
                <ImageCard infoCard={readMoreCards[5]}/>
            </Collapse>
        </div>
      );
} 