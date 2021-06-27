import React, { useState, useEffect } from 'react';
import { Container, Typography, Divider, Grid } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useStyles } from '../../../style/userDashboard/Track';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import { registerForVaccineAction } from '../../../redux/action-creators/registerForVaccineAction';
import Checkbox from '@material-ui/core/Checkbox';
import Road from '../../../assets/Road.png'
function Track() {
  ///for the drop  down option
  const classes = useStyles();
  const [state, setState] = React.useState({
    checked0: true,
    checked1: false,
    checked2: false,
    checked3: false,
  });

  const [preferenceId, setPreferenceId] = useState('');

  const dispatch = useDispatch();

  const getStandPointUser = useSelector((state) => state.getStandPointUser);
  const { loading, data, error } = getStandPointUser;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const registerForVaccineHandler = () => {
    dispatch(registerForVaccineAction(data[0]._id));
  };

  return (
    <>
      {data && (
        <>
          <br />
          <Grid container>
            <Grid item xs={8}>
              <Container maxWidth="lg">
                <Typography variant="h4">Track Your Jab</Typography>
                <Container>
                  <Typography variant="body1" color="secondary">
                    Check out the current location of your vaccine van in your
                    area. Click below to know when it will arive
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
            <Typography variant="h5">Select Your prefered location</Typography>

            <Container>
              <br />
              <Typography variant="h6">{state.name}</Typography>

              {loading ? (
                <LinearProgress
                  style={{ marginTop: '4px', marginBottom: '4px' }}
                  color="primary"
                />
              ) : (
                data &&
                data.map((standPoint, index) => (
                  <>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state[`checked${index}`]}
                          onChange={handleChange}
                          name={`checked${index}`}
                        />
                      }
                      label={standPoint.location}
                    />
                    <br />
                  </>
                ))
              )}
            </Container>

            <br />
            <Button
              onClick={registerForVaccineHandler}
              variant="contained"
              color="primary"
            >
              Register
            </Button>
            <br />
            <img src={Road} alt="Road.png" style={{height:'40%', width:'40%', position: 'absolute',zIndex:'-55', margin:'-3rem' }}/>          </Container>
        </>
      )}
    </>
  );
}

export default Track;
