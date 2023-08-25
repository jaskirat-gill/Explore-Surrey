import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import NavBar from "../components/NavBar";


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        width: '100%',
        margins: '0 auto',
        
      },
    main: {
        flexGrow: '1',
        textAlign: 'center',
        color: '#000080',
        fontSize: '4rem',
    },
    white: {
        color: '#fff',
        fontSize: '4rem',
    }
}));
export default function ErrorPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <h1 className={classes.main}>Oops!<br /><span className={classes.white}>Something Went Wrong. Go Back And Try Again...</span></h1>
        </div>
    )
} 