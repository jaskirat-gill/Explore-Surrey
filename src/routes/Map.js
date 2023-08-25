import React from "react";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        minheight: '100vh',
    }
}));
export default function Map() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Map Under Construction</h1>
        </div>
    )
} 