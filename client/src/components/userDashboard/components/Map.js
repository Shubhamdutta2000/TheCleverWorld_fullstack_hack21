import React, { useEffect, useState } from 'react';

import { Paper } from '@material-ui/core';
// import MapboxMap from 'react-mapbox-wrapper';
import MapGL, { Marker, NavigationControl, Source, Layer } from 'react-map-gl';
import './hackfix.css';
import Pin from './Pin';
import { useSelector, useDispatch } from 'react-redux';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
};

const pointLayer = {
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf',
  },
};

function pointOnCircle({ center, angle, radius }) {
  return {
    type: 'Point',
    coordinates: [
      center[0] + Math.cos(angle) * radius,
      center[1] + Math.tan(1 / angle) * radius,
    ],
  };
}

function UserMap() {
  const [marker1, setMarker1] = useState({
    latitude: 22.5912,
    longitude: 88.3994,
  });

  const [marker2, setMarker2] = useState({
    latitude: 22.6,
    longitude: 88.35,
  });

  const getStandPointUser = useSelector((state) => state.getStandPointUser);
  const { loading, data, error } = getStandPointUser;

  // useEffect(() => {
  //   console.log(data && data[0].geometry.coordinates[0]);
  // });

  const [viewport, setViewport] = useState({
    latitude: 22.5930921154,
    longitude: 88.4141921997,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  const [pointData, setPointData] = useState(null);

  useEffect(() => {
    const animation = window.requestAnimationFrame(() =>
      setPointData(
        pointOnCircle({
          center: [88.41215372085571, 22.58016487287609],
          angle: Date.now() / 1000,
          radius: 0.0014,
        })
      )
    );
    return () => window.cancelAnimationFrame(animation);
  });

  return (
    <div>
      <Paper
        elevation={6}
        style={{ width: '97%', height: '85vh', margin: '10px' }}
      >
        {/* <MapboxMap
          accessToken="pk.eyJ1Ijoic291bWF2YSIsImEiOiJja3EwcHprYnQwN2FoMnZxaTlhdmRxeXo4In0.Y-AR1dwDNEaSKrGWrnBgzg"
          coordinates={{ lat: 22.872198, lng: 88.3366308 }}
          zoom={10}
        /> */}
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/dark-v10"
          onViewportChange={setViewport}
          mapboxApiAccessToken="pk.eyJ1Ijoic291bWF2YSIsImEiOiJja3EwcHprYnQwN2FoMnZxaTlhdmRxeXo4In0.Y-AR1dwDNEaSKrGWrnBgzg"
        >
          {data &&
            data.map((stand) => (
              <Marker
                longitude={stand.geometry.coordinates[0]}
                latitude={stand.geometry.coordinates[1]}
                offsetTop={-20}
                offsetLeft={-10}
                draggable
              >
                <Pin size={30} />
              </Marker>
            ))}

          {data && pointData && (
            <Source type="geojson" data={pointData}>
              <Layer {...pointLayer} />
            </Source>
          )}

          <div className="nav" style={navStyle}>
            <NavigationControl />
          </div>
        </MapGL>
      </Paper>
    </div>
  );
}

export default UserMap;
