import React, { useEffect, useState } from "react";
import { AppBar, Collapse, Button, makeStyles, Toolbar, IconButton } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    icon: {
        color: '#fff',
        fontSize: '3rem',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    appbarWrapper: {
        width: '100%',
        margins: '0 auto'
    },
    colorText: {
        color: "#000080"
    },
    title: {
        color: '#fff',
        fontSize: '4rem'
    },
    container: {
        textAlign: 'center',
    },
    readMore: {
        backgroundColor: '#000080',
        marginLeft: '10px',
        color: '#fff',
        "&:hover": {
            backgroundColor: "#ADD8E6 !important"
          }
    },
    launchApp: {
        backgroundColor: '#000080',
        marginRight: '10px',
        color: '#fff',
        "&:hover": {
            backgroundColor: "#ADD8E6 !important"
          }
    },
    drawer: {
        color: 'ADD8E6',
    },
    buttonGroup: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }

}));
export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}> 
                Explore<span className={classes.colorText}>Surrey</span>
                </h1>
                <IconButton>
                    <SortIcon className={classes.icon} onClick={()=> setDrawerOpen(true)}/>
                </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Explore Your City Like <br /> <span className={classes.colorText}>Never Before</span>
                    </h1>
                    <div className={classes.buttonGroup}>
                        <li><a href="/map">
                            <Button className={classes.launchApp} variant="contained">Launch App</Button>
                        </a></li>
                        <li><a href="/readmore">
                            <Button className={classes.readMore} variant="contained">Read More</Button>
                        </a></li>
                    </div>
                </div>
            </Collapse>
            <SwipeableDrawer
                className={classes.drawer}
                anchor="right"
                open={drawerOpen}
                onOpen={() => setDrawerOpen(true)}
                onClose={() => setDrawerOpen(false)}
            >
                <div
                    onClick={() => setDrawerOpen(false)}
                    onKeyPress={() => setDrawerOpen(false)}
                    role="button"
                    tabIndex={0}
                >
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                    <List>
                        <ListItem>
                            <Link href="/" color="#000080" variant="button" underline="none">
                                Home
                            </Link>
                        </ListItem>
                        <ListItem>
                        <Link href="/map" color="#000080" variant="button" underline="none">
                                Launch Map
                            </Link>
                        </ListItem>
                        <ListItem>
                        <Link href="/readmore" color="#000080" variant="button" underline="none">
                                Read More
                            </Link>
                        </ListItem>
                    </List>
            </SwipeableDrawer>
        </div>
    )
} 