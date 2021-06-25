import React from 'react';
import { Container, Typography, Divider, Grid } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {useStyles} from '../../../style/userDashboard/Track'
function Track() {
///for the drop  down option
const classes = useStyles();
    const [state, setState] = React.useState({
      age: '',
      name: '',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };


  return (
    <>
      <br />
      <Grid container>
        <Grid item xs={8}>
          <Container maxWidth="lg">
            <Typography variant="h4">Track Your Jab</Typography>
            <Container>
              <Typography variant="body1" color="secondary">
                Check out the current location of your vaccine van in your area.
                Click below to know when it will arive
              </Typography>
            </Container>
          </Container>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <LocalShippingIcon
            color="primary"
            style={{ height: '90%', width: '50%' }}
          />
        </Grid>
      </Grid>
      <Divider />


{/*UI TO  GUIDE USER*/}
<Container>
    <Typography variant='h5'>
        Sellect Your prefferd location
    </Typography>
    <FormControl className={classes.formControl}>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          name="age"
          inputProps={{ 'aria-label': 'age' }}
          className={classes.selectEmpty}
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>With visually hidden label</FormHelperText>
      </FormControl>
</Container>






    </>
  );
}

export default Track;
