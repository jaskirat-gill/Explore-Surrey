import React, { useRef, useEffect, useState } from "react";
import { makeStyles, IconButton} from "@material-ui/core";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; 
import SortIcon from "@material-ui/icons/Sort";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";

mapboxgl.accessToken = "pk.eyJ1IjoiamFza2lyYXRnaWxsIiwiYSI6ImNsbHIxNzI2cTBpaDYza3Bpa2I4bzBscXIifQ.HAjkQehYOYn8egTsxUzSlg"

const useStyles = makeStyles((theme) => ({
    
    map: {
        position: 'absolute',
        left: '25%',
        top: 0,
        bottom: 0,
        width: '75%',
        height: '100%'
    },
    sideBar: {
        position: 'absolute',
        width: '25%',
        top: 0,
        bottom: 0,
        left: 0,
        right: '75%',
        maxHeight: '100%',
        overflow: 'hidden',
        backgroundColor: '#0e1111',
    },
    sidebarTitle: {
        flexGrow: '1',
        fontFamily: 'Nunito',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    colorText: {
        color: "#000080"
    },
    whiteText: {
        color: "#fff"
    },
    icon: {
        color: '#fff',
        fontSize: '3rem',
    },
    paper: {
        background: '#0e1111',
    }    
}));



export default function Map() {
    const classes = useStyles();
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom] = useState(9);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const bounds = [ 
        [-122.91358722490305, 49.00663583762119],
        [-122.73659373307278, 49.21060319828753], 
        ];

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: [-122.79937513172185,49.02601641506996],
        zoom: zoom,
        maxBounds: bounds,
        });
    });
    return (
        <div className={classes.root}>
            <div className={classes.map}  ref={mapContainer}  />
            <div className={classes.sideBar}>
                <h1 className={classes.sidebarTitle}> 
                    <IconButton>
                        <SortIcon className={classes.icon} onClick={()=> setDrawerOpen(true)}/>
                    </IconButton>
                    Explore<span className={classes.colorText}>Surrey</span>
                </h1>
            </div>
            <SwipeableDrawer
                classes={{ paper: classes.paper }}
                anchor="left"
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
    );
} 