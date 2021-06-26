import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Paper, Grid , Button} from '@material-ui/core';
import React from 'react';
import Location from '@material-ui/icons/LocationOn';
function Controller() {
  return (
    <div>
      <Paper
        elevation={6}
        style={{ width: '95%', height: '50vh', margin: '10px 6px' }}
      >
        <Paper elevation={3} style={{ width: '98%', margin: '10px 3px' }}>
          <Container>
            <Typography variant="h5" align="center">
              Mapping Cordinator
            </Typography>
<br/>
            <Typography variant="body1" style={{ display: 'flex' }}>
              <Location color="primary" /> You Have 4 Standpoints left
            </Typography>
            <br/>
          </Container>
        </Paper>
        <Button color='primary' variant='contained' style={{ width: '98%', margin: '3px 3px', padding:'9px 0' }}>
            Start Drive
        </Button>
        <Button color='primary' variant='contained' style={{ width: '98%', margin: '6px 3px', padding:'9px 0' }}>
            Update Map
        </Button>
      </Paper>
    </div>
  );
}

export default Controller;
