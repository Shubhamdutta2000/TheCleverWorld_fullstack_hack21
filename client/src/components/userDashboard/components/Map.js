import React from 'react';
import MapboxMap from 'react-mapbox-wrapper';
import 'mapbox-gl/dist/mapbox-gl.css';
import './hackfix.css';

import { Paper } from '@material-ui/core';
function UserMap() {
  return (
    <div>
      <Paper
        elevation={6}
        style={{ width: '95%', height: '85vh', margin: '20px' }}
      >
        <MapboxMap
          accessToken="pk.eyJ1Ijoic291bWF2YSIsImEiOiJja3EwcHprYnQwN2FoMnZxaTlhdmRxeXo4In0.Y-AR1dwDNEaSKrGWrnBgzg"
          coordinates={{ lat: 22.872198, lng: 88.3366308 }}
          zoom={10}
        />
      </Paper>
    </div>
  );
}

export default UserMap;
