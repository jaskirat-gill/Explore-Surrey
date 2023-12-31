import React, {useState} from "react";
import { AppBar, makeStyles, Toolbar, IconButton } from "@material-ui/core";
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
    drawer: {
        color: 'ADD8E6',
    },
    paper: {
        background: '#0e1111',
    },
    whiteText: {
        color: "#fff"
    },

}));
export default function NavBar() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    
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
            <SwipeableDrawer
                classes={{ paper: classes.paper }}
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
                        <ChevronLeftIcon className={classes.icon}/>
                    </IconButton>
                </div>
                <Divider />
                    <List>
                        <ListItem>
                            <Link className={classes.whiteText} href="/" color="#fff" variant="button" underline="none">
                                Home
                            </Link>
                        </ListItem>
                        <ListItem>
                        <Link className={classes.whiteText} href="/map" color="#fff" variant="button" underline="none">
                                Launch Map
                            </Link>
                        </ListItem>
                        <ListItem>
                        <Link className={classes.whiteText} href="/readmore" color="#fff" variant="button" underline="none">
                                Read More
                            </Link>
                        </ListItem>
                    </List>
            </SwipeableDrawer>
        </div>
    )
} 