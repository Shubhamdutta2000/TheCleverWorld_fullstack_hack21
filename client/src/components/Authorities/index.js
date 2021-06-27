import { Grid, Container } from '@material-ui/core';
import React from 'react';
import Map from './components/Map';
import Table from './components/UserRegistrationTable';
function Authorities() {
  return (
    <div>
      <Container>
        {/*For map and button*/}
        <Map />
        <Table />
      </Container>
    </div>
  );
}

export default Authorities;
