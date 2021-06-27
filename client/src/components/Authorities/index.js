import { Grid, Container } from '@material-ui/core';
import React from 'react';
import Map from './components/Map';
import Table from './components/UserRegistrationTable';
function Authorities() {
  return (
    <div>
      <Grid container>
        <Container>
          {/*For map and button*/}
          <Map />
          <Table />
        </Container>
      </Grid>
    </div>
  );
}

export default Authorities;
