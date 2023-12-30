import React from "react";
import styles from "./MapSideBar.module.css";
import { ButtonGroup, FormGroup, FormControlLabel, Checkbox, withStyles, Button, Typography} from "@material-ui/core";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

// Styling for custom checkbox colors
const CustomColorCheckbox = withStyles({
    root: {
      color: "#fff",
      "&$checked": {
        color: "#000080"
      },
      fontSize: '3vw',
    },
    checked: {}
  })((props) => <Checkbox color="default" {...props} />);

// Custom Theme Colors
const theme = createTheme({
    palette: {
      primary: {
        main: '#000080'
      }
    }
  });

// Component displays the sidebar with settings and controls for the map page
export default function MapSideBar() {
    //HTML
    return (
        <div className={styles.root}>
            <h1 className={styles.sidebarTitle}> 
                Explore<span className={styles.colorText}>Surrey</span>
            </h1>
            <h2 className={styles.settings}>Settings</h2>
            <div>
                <FormGroup className={styles.margin}>
                    <FormControlLabel control={<CustomColorCheckbox id="traffic-toggle" defaultChecked />} label={<Typography className={styles.labelText}>Traffic Cameras</Typography>} className={styles.checkbox}/> 
                    <FormControlLabel control={<CustomColorCheckbox id="restaurant-toggle" />} label={<Typography className={styles.labelText}>Restaurants & Health Reports</Typography>} className={styles.checkbox}/> 
                    <FormControlLabel control={<CustomColorCheckbox id="speedControl-toggle" />} label={<Typography className={styles.labelText}>Speed Bumps & Traffic Circles</Typography>} className={styles.checkbox}/> 
                </FormGroup>
            </div>
            <h2 className={styles.settings}>Zoom To</h2>
            <MuiThemeProvider theme={theme}>
                <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="contained" color="primary" className={styles.margin}> 
                    <Button size="medium" className={styles.customButton} id="cityCenter">City Center</Button>
                    <Button id="cloverdale">Cloverdale</Button>
                    <Button id="fleetwood">Fleetwood</Button>
                    <Button id="guildford">Guildford</Button>
                    <Button id="newton">Newton</Button>
                    <Button id="southSurrey">South Surrey</Button>
                </ButtonGroup>
            </MuiThemeProvider>
            
        </div>
    );
}