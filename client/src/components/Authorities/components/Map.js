import React, { useEffect, useCallback, useState } from 'react';
import { Paper, Grid, Typography, Container, Button } from '@material-ui/core';
import Location from '@material-ui/icons/LocationOn';

import MapGL, { Marker, Source, Layer, NavigationControl } from 'react-map-gl';
import { heatmapLayer, populationDataPoint } from './map-style.js';

import Pin from './Pin';
import axios from 'axios';

import { postStandPointUserAction } from '../../../redux/action-creators/standPointAction';
import { useDispatch } from 'react-redux';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
};

const MapController = () => {
  const [viewport, setViewport] = useState({
    latitude: 22.5930921154,
    longitude: 88.4141921997,
    zoom: 3,
    bearing: 0,
    pitch: 0,
  });

  /////////////    Marker 1 starts      /////////////
  const [marker, setMarker] = useState({
    latitude: 22.5930921169,
    longitude: 88.4141921901,
  });
  ////////////    Marker 1 ends     ////////////////////

  // Marker 2 starts
  const [marker2, setMarker2] = useState({
    latitude: 22.5930921111,
    longitude: 88.4141921975,
  });
  ////////////    Marker 2 ends     ////////////////////

  ////////////   Marker 3 starts    ///////////////////
  const [marker3, setMarker3] = useState({
    latitude: 22.5930921101,
    longitude: 88.4141921921,
  });
  ///////////    Marker 3 ends      ///////////////////

  ////////////   Marker 4 starts    ///////////////////
  const [marker4, setMarker4] = useState({
    latitude: 22.5930921101,
    longitude: 88.4141921921,
  });
  ///////////    Marker 4 ends      ///////////////////

  const [events, logEvents] = useState({});

  ///////////////////////    Drag for Marker 1     ///////////////////////
  const onMarkerDragStart = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
  }, []);

  const onMarkerDragEnd = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    });
  }, []);
  ///////////////////////   end of Drag for Marker 1     ///////////////////////

  ///////////////////////    Drag for Marker 2     ////////////////////////////
  const onMarkerDragStart2 = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag2 = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
  }, []);

  const onMarkerDragEnd2 = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
    setMarker2({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    });
  }, []);
  ///////////////////////    end of Drag for Marker 2     ///////////////////////

  ///////////////////////    Drag for Marker 3     ///////////////////////
  const onMarkerDragStart3 = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag3 = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
  }, []);

  const onMarkerDragEnd3 = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
    setMarker3({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    });
  }, []);
  ///////////////////////   end of Drag for Marker 3     ///////////////////////

  ///////////////////////    Drag for Marker 4     ///////////////////////
  const onMarkerDragStart4 = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag4 = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
  }, []);

  const onMarkerDragEnd4 = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
    setMarker4({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    });
  }, []);
  ///////////////////////   end of Drag for Marker 4     ///////////////////////

  // Dispatch
  const dispatch = useDispatch();

  // add all markers to standPoints
  const addStandPoints = async () => {
    console.log(marker);
    console.log(marker2);
    console.log(marker3);
    console.log(marker4);

    // locaton 1
    const { data: data1 } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${marker.longitude},${marker.latitude}.json?access_token=pk.eyJ1Ijoic291bWF2YSIsImEiOiJja3EwcHprYnQwN2FoMnZxaTlhdmRxeXo4In0.Y-AR1dwDNEaSKrGWrnBgzg`
    );
    const location1 = data1.features[0].place_name;
    console.log(location1);

    // locaton 2
    const { data: data2 } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${marker2.longitude},${marker2.latitude}.json?access_token=pk.eyJ1Ijoic291bWF2YSIsImEiOiJja3EwcHprYnQwN2FoMnZxaTlhdmRxeXo4In0.Y-AR1dwDNEaSKrGWrnBgzg`
    );
    const location2 = data2.features[0].place_name;
    console.log(location2);

    // locaton 3
    const { data: data3 } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${marker3.longitude},${marker3.latitude}.json?access_token=pk.eyJ1Ijoic291bWF2YSIsImEiOiJja3EwcHprYnQwN2FoMnZxaTlhdmRxeXo4In0.Y-AR1dwDNEaSKrGWrnBgzg`
    );
    const location3 = data3.features[0].place_name;
    console.log(location3);

    // locaton 4
    const { data: data4 } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${marker4.longitude},${marker4.latitude}.json?access_token=pk.eyJ1Ijoic291bWF2YSIsImEiOiJja3EwcHprYnQwN2FoMnZxaTlhdmRxeXo4In0.Y-AR1dwDNEaSKrGWrnBgzg`
    );
    const location4 = data4.features[0].place_name;
    console.log(location4);

    const standPointsArray = [
      {
        name: 'A',
        location: location1,
        geometry: {
          coordinates: [marker.longitude, marker.latitude],
        },
      },
      {
        name: 'B',
        location: location2,
        geometry: {
          coordinates: [marker2.longitude, marker2.latitude],
        },
      },
      {
        name: 'C',
        location: location3,
        geometry: {
          coordinates: [marker3.longitude, marker3.latitude],
        },
      },
      {
        name: 'D',
        location: location4,
        geometry: {
          coordinates: [marker4.longitude, marker4.latitude],
        },
      },
    ];

    console.log(standPointsArray);

    // add standPoints data to backend
    dispatch(postStandPointUserAction(standPointsArray));
  };

  const [userDataPoint, setUserDataPoint] = useState(null);

  useEffect(() => {
    /* global fetch */
    // fetch('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson')
    fetch('http://localhost:5000/api/datapoints')
      .then((resp) => resp.json())
      .then((json) => {
        // Note: In a real application you would do a validation of JSON data before doing anything with it,
        // but for demonstration purposes we ingore this part here and just trying to select needed data...
        console.log(json);
        setUserDataPoint(json);
      });
  }, []);

  return (
    <>
      <Grid container>
        {/* HeatMap */}
        <Grid item md={8} xs={8}>
          <Paper elevation={3} style={{ width: '98%', height: '97%' }}>
            <MapGL
              {...viewport}
              width="100%"
              height="100%"
              mapStyle="mapbox://styles/mapbox/dark-v8"
              onViewportChange={setViewport}
              mapboxApiAccessToken="pk.eyJ1Ijoic291bWF2YSIsImEiOiJja3EwcHprYnQwN2FoMnZxaTlhdmRxeXo4In0.Y-AR1dwDNEaSKrGWrnBgzg"
            >
              {userDataPoint && (
                <Source type="geojson" data={userDataPoint}>
                  <Layer {...heatmapLayer} />
                  <Layer {...populationDataPoint} />
                </Source>
              )}

              {/* MARKER 1 */}
              <Marker
                longitude={marker.longitude}
                latitude={marker.latitude}
                offsetTop={-20}
                offsetLeft={-10}
                draggable
                onDragStart={onMarkerDragStart}
                onDrag={onMarkerDrag}
                onDragEnd={onMarkerDragEnd}
              >
                <Pin size={30} />
              </Marker>

              {/* MARKER 2 */}
              <Marker
                longitude={marker2.longitude}
                latitude={marker2.latitude}
                offsetTop={-20}
                offsetLeft={-10}
                draggable
                onDragStart={onMarkerDragStart2}
                onDrag={onMarkerDrag2}
                onDragEnd={onMarkerDragEnd2}
              >
                <Pin size={30} />
              </Marker>

              {/* MARKER 3 */}
              <Marker
                longitude={marker3.longitude}
                latitude={marker3.latitude}
                offsetTop={-20}
                offsetLeft={-10}
                draggable
                onDragStart={onMarkerDragStart3}
                onDrag={onMarkerDrag3}
                onDragEnd={onMarkerDragEnd3}
              >
                <Pin size={30} />
              </Marker>

              {/* MARKER 4 */}
              <Marker
                longitude={marker4.longitude}
                latitude={marker4.latitude}
                offsetTop={-20}
                offsetLeft={-10}
                draggable
                onDragStart={onMarkerDragStart4}
                onDrag={onMarkerDrag4}
                onDragEnd={onMarkerDragEnd4}
              >
                <Pin size={30} />
              </Marker>

              <div className="nav" style={navStyle}>
                <NavigationControl />
              </div>
            </MapGL>
          </Paper>
        </Grid>

        {/* Right Side Controller */}
        <Grid item md={4} xs={4}>
          <Paper
            elevation={6}
            style={{ width: '95%', height: '50vh', margin: '10px 6px' }}
          >
            <Paper elevation={3} style={{ width: '98%', margin: '10px 3px' }}>
              <Container>
                <Typography variant="h5" align="center">
                  Mapping Cordinator
                </Typography>
                <br />
                <Typography variant="body1" style={{ display: 'flex' }}>
                  <Location color="primary" /> You Have 4 Standpoints left
                </Typography>
                <br />
              </Container>
            </Paper>
            <Button
              color="primary"
              variant="contained"
              style={{ width: '98%', margin: '3px 3px', padding: '9px 0' }}
            >
              Start Drive
            </Button>
            <Button
              color="primary"
              onClick={addStandPoints}
              variant="contained"
              style={{ width: '98%', margin: '6px 3px', padding: '9px 0' }}
            >
              Update Map
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default MapController;
