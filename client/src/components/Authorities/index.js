import { Grid,Container } from '@material-ui/core';
import React from 'react';
import Controller from './components/Controller';
import Map from './components/Map';
import Table from './components/UserRegistrationTable'
function Authorities() {
  return (
    <div>
        <Container>
        {/*For map and button*/}
      <Grid container>
        <Grid item md={8} xs={8}>
          <Map />
        </Grid>
        <Grid item md={4} xs={4}>
          <Controller />
        </Grid>
      </Grid>
      <Table/>

      </Container>
    </div>
  );
}

export default Authorities;
