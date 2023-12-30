/* eslint-disable */
import React, { useRef, useEffect, useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import trafficCameraImage from "../data/trafficCameraPin.png";
import speedControlPin from "../data/speedControlPin.png"
import restaurantImage from "../data/restaurantPin.png";
import healthReports from "../data/FraserHealthReports.js"
import styles from "./Map.module.css";
import MapSideBar from "../components/MapSideBar.js";
import { trafficCamerasList } from "../static/TrafficCameraLists.js";
import { restaurantsList } from "../static/RestaurantReportLists.js";
import { speedControlList } from "../static/SpeedControlList.js";

// File controls /map route and displays the map functionality

// Mapbox access token
const ACCESS_TOKEN = "pk.eyJ1IjoiamFza2lyYXRnaWxsIiwiYSI6ImNsbHIxNzI2cTBpaDYza3Bpa2I4bzBscXIifQ.HAjkQehYOYn8egTsxUzSlg";
// Set access token
mapboxgl.accessToken = ACCESS_TOKEN;

// Function that is called by App when routing to /map
export default function Map() {
    // Map parameters
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);
    const [lng, setLng] = useState(-122.79937513172185); // longitude for center of map (Surrey)
    const [lat, setLat] = useState(49.02601641506996);   // Latitude for center of map (Surrey)
    const [zoom, setZoom] = useState(9);
    let trafficCameras = trafficCamerasList;
    let restaurants = restaurantsList;
    let speedControl = speedControlList;
    
    //Bounds for keeping map in Surrey area only
    const bounds = [ 
        [-122.91358722490305, 49.00663583762119], //Bottom Left Corner
        [-122.5948945381644, 49.251293876628665], //Top Right Corner
    ];


    //Runs once
    useEffect(() => {
      //Creates new mapbox map as per parameters
      const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/navigation-night-v1',
          center: [lng,lat],
          zoom: zoom,
          maxBounds: bounds,
      });

      //Add traffic camera, speed bumb and restaurant pins and layers after map loaded
      map.on('load', () => {
          // Add traffic camera pin and layer
          map.loadImage(
              trafficCameraImage,
              (error, image) => {
                  if (error) throw error;
                  map.addImage('traffic-camera-pin', image);
                  map.addSource('trafficCameras', { // Add traffic camera source for pins
                      'type': 'geojson',
                      'data': trafficCameras
                  });
              
                  // Add a symbol layer bases on source and image
                  map.addLayer({
                      'id': 'trafficCameraLayer',
                      'type': 'symbol',
                      'source': 'trafficCameras',
                      'layout': {
                          'visibility': 'visible',
                          'icon-image': 'traffic-camera-pin',
                          'icon-size': 0.05,
                      }
                  });
              }
          );
          // Add restaurant pin and layer
          map.loadImage(
              restaurantImage,
              (error, image) => {
                  if (error) throw error;
                  map.addImage('restauarant-pin', image);
                  map.addSource('restaurants', { // Add restaurant source for pins
                      'type': 'geojson',
                      'data': restaurants
                  });
              
                  // Add a symbol layer based on source and image
                  map.addLayer({
                      'id': 'restaurantLayer',
                      'type': 'symbol',
                      'source': 'restaurants',
                      'layout': {
                          'visibility': 'none',
                          'icon-image': 'restauarant-pin',
                          'icon-size': 1,
                      }
                  });
              }
          );
          // Add speed control pin and layer
          map.loadImage(
            speedControlPin,
            (error, image) => {
                if (error) throw error;
                map.addImage('speedControl-pin', image);
                map.addSource('speedControl', { // Add speed control source for pins
                    'type': 'geojson',
                    'data': speedControl
                });
            
                // Add a symbol layer based on source and image
                map.addLayer({
                    'id': 'speedControlLayer',
                    'type': 'symbol',
                    'source': 'speedControl',
                    'layout': {
                        'visibility': 'none',
                        'icon-image': 'speedControl-pin',
                        'icon-size': 1,
                    }
                });
            }
        );
      });

      // When a click event occurs on a feature in the traffic Camera layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on('click', 'trafficCameraLayer', (e) => {
          // Copy coordinates array.
          const coordinates = e.features[0].geometry.coordinates.slice();
          
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          
          new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML('<h3><a href="' + e.features[0].properties.IMAGE + '" target="_blank">' + e.features[0].properties.LOCATION + '</a></h3>')
              .addTo(map);
      });

      // When a click event occurs on a feature in the speed control layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on('click', 'speedControlLayer', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        
        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML('<h3>' + e.features[0].properties.DEVICE_TYPE2 + '</h3>')
            .addTo(map);
      });

      // When a click event occurs on a feature in the restaurant layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on('click', 'restaurantLayer', (e) => {
          // Copy coordinates array.
          const coordinates = e.features[0].geometry.coordinates.slice();
          
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          
          // Get any health reports for this restaurant by matching 'TRACHINGNUMBER' property
          let reports = []
          for(let i = 0; i < healthReports.length; i++) {
              if(healthReports[i].TRACKINGNUMBER == e.features[0].properties.TRACKINGNUMBER)
                  reports.push("Date: " + healthReports[i].INSPECTIONDATE.slice(0,4) + "/" + healthReports[i].INSPECTIONDATE.slice(4,6) + "/" + healthReports[i].INSPECTIONDATE.slice(6) + " Rating: " + healthReports[i].HAZARDRATING + " Comments: " + healthReports[i].VIOLLUMP + "\n\n")
          }
          new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML('<h3>' + e.features[0].properties.NAME + ' - ' + e.features[0].properties.PHYSICALADDRESS + '</h3>' +
                       '<h4> Fraser Health Inspections:'
                      )
              .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the traffic layer.
      map.on('mouseenter', 'trafficCameraLayer', () => {
          map.getCanvas().style.cursor = 'pointer';
      });
          
      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'trafficCameraLayer', () => {
          map.getCanvas().style.cursor = '';
      });

      // Listen for traffic camera toggle and change visibility of layer to opposite of current when
      // toggle selected
      document.querySelector('#traffic-toggle').addEventListener('click', () => {
          const isVisible = map.getLayoutProperty('trafficCameraLayer', 'visibility') == 'visible'
          if (isVisible) {
              map.setLayoutProperty('trafficCameraLayer', 'visibility', 'none')
          } else {
              map.setLayoutProperty('trafficCameraLayer', 'visibility', 'visible')
          }

      })

      // Listen for restaurant toggle and change visibility of layer to opposite of current when
      // toggle selected
      document.querySelector('#restaurant-toggle').addEventListener('click', () => {
          const isVisible = map.getLayoutProperty('restaurantLayer', 'visibility') == 'visible'
          if (isVisible) {
              map.setLayoutProperty('restaurantLayer', 'visibility', 'none')
          } else {
              map.setLayoutProperty('restaurantLayer', 'visibility', 'visible')
          }

      })
      
      // Listen for speed control toggle and change visibility of layer to opposite of current when
      // toggle selected
      document.querySelector('#speedControl-toggle').addEventListener('click', () => {
        const isVisible = map.getLayoutProperty('speedControlLayer', 'visibility') == 'visible'
        if (isVisible) {
            map.setLayoutProperty('speedControlLayer', 'visibility', 'none')
        } else {
            map.setLayoutProperty('speedControlLayer', 'visibility', 'visible')
        }

      })

      // Listen for zoom to newton button and then set center of map to middle of locatin and zoom in
      document.querySelector('#newton').addEventListener('click', () => {
        map.flyTo({
          center: [-122.842033,49.133089],
          essential: true,
          zoom: 15
        })
        setLat(49.133089)
        setLng(-122.842033)
        setZoom(15)
      })

      // Listen for zoom to city Center button and then set center of map to middle of locatin and zoom in
      document.querySelector('#cityCenter').addEventListener('click', () => {
        map.flyTo({
          center: [-122.848638,49.187152],
          essential: true,
          zoom: 15
        })
        setLat(49.187152)
        setLng(-122.848638)
        setZoom(15)
      })

      // Listen for zoom to cloverdale button and then set center of map to middle of locatin and zoom in
      document.querySelector('#cloverdale').addEventListener('click', () => {
        map.flyTo({
          center: [-122.756602,49.118997],
          essential: true,
          zoom: 15
        })
        setLat(49.118997)
        setLng(-122.756602)
        setZoom(15)
      })

      // Listen for zoom to fleetwood button and then set center of map to middle of locatin and zoom in
      document.querySelector('#fleetwood').addEventListener('click', () => {
        map.flyTo({
          center: [ -122.795919,49.164251],
          essential: true,
          zoom: 15
        })
        setLat(49.164251)
        setLng(-122.795919)
        setZoom(15)
      })

      // Listen for zoom to guildford button and then set center of map to middle of locatin and zoom in
      document.querySelector('#guildford').addEventListener('click', () => {
        map.flyTo({
          center: [-122.803717,49.188604],
          essential: true,
          zoom: 15
        })
        setLat(49.188604)
        setLng(-122.803717)
        setZoom(15)
      })

       // Listen for zoom to south surrey button and then set center of map to middle of locatin and zoom in
       document.querySelector('#southSurrey').addEventListener('click', () => {
        map.flyTo({
          center: [-122.800765,49.061092],
          essential: true,
          zoom: 15
        })
        setLat(49.061092)
        setLng(-122.800765)
        setZoom(15)
      })

  });

    //HTML
    return (
        <div className={styles.root}>
            <div className={styles.map}  ref={mapContainer} />
            <MapSideBar />
      </div>
    );
}



