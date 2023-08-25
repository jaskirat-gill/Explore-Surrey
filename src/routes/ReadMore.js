import React, {useState, useEffect} from "react";
import { Collapse, CssBaseline, makeStyles } from "@material-ui/core";
import NavBar from "../components/NavBar";
import ImageCard from "../components/ImageCard";
import infoCard from "../static/infoCard";

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
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                <ImageCard infoCard={infoCard[0]}/>
                <ImageCard infoCard={infoCard[1]}/>
            </Collapse>
        </div>
      );
} 