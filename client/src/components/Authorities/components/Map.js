import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';

import MapGL, { Source, Layer } from 'react-map-gl';
import { heatmapLayer, populationDataPoint } from './map-style.js';

const Heatmap = () => {
  const [viewport, setViewport] = useState({
    latitude: 61,
    longitude: 208,
    zoom: 3,
    bearing: 0,
    pitch: 0,
  });

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
      </MapGL>
    </Paper>
  );
};

export default Heatmap;
