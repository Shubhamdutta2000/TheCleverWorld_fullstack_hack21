import React, { useEffect, useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as yup from 'yup';
import { useFormik } from 'formik';

import { Link, useHistory } from 'react-router-dom';

import FormContainer from '../components/FormContainer';
import useStyles from './style';
import registerSvg from '../../../assets/b.png';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from '../../../redux/action-creators';
import { Container } from '@material-ui/core';

const Registration = ({ location }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [age, setAge] = useState(0);

  const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().length(10).required(),
    adhaarNumber: yup.string().required(),
    geometry: yup.object().required(),
    password: yup
      .string()
      .min(1, 'Password should be of minimum 1 characters length')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      }),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      adhaarNumber: '',
      geometry: {},
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        registerNewUser(
          values.name,
          values.email,
          values.password,
          values.geometry,
          values.phoneNumber,
          values.adhaarNumber
        )
      );
      console.log(values);
      // history.push('/login');
    },
  });

  const getLocation = () => {
    // check if user's browser supports Navigator.geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (success) {
          formik.setFieldValue('geometry', {
            type: 'point',
            coordinates: [success.coords.longitude, success.coords.latitude],
          });

          console.log(formik);
        },
        function (error) {
          setOpen(true);
          console.log(error);
        }
      );
    } else {
      setOpen(true);
    }
  };

  const { data, error, loading } = useSelector((state) => state.userRegister);
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (data) history.push(redirect);
  }, [redirect, history, data]);

  return (
    <>
      <Grid container style={{ marginBottom: '6rem' }}>
        <Grid item md={7}>
          <img src={registerSvg} style={{ height: '105%', width: '100%' }} />
        </Grid>
        <Grid item md={5}>
          <Container>
            {loading && (
              <LinearProgress
                style={{ marginTop: '4px', marginBottom: '4px' }}
                color="primary"
              />
            )}

            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                CREATE NEW ACCOUNT
              </Typography>
              {error && (
                <Alert
                  style={{ marginTop: '8px', width: '100%' }}
                  variant="outlined"
                  severity="error"
                >
                  {error}
                </Alert>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
                className={classes.form}
                noValidate
                autoComplete="off"
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoFocus
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                  label="ConfirmPassword"
                  type="password"
                  id="confirm password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                  label="Phone Number"
                  type="text"
                  id="phoneNumber"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="adhaarNumber"
                  value={formik.values.adhaarNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.adhaarNumber &&
                    Boolean(formik.errors.adhaarNumber)
                  }
                  helperText={
                    formik.touched.adhaarNumber && formik.errors.adhaarNumber
                  }
                  label="adhaar Number"
                  type="text"
                  id="adhaarNumber"
                />

                <TextField
                  variant="outlined"
                  style={{ display: 'none' }}
                  margin="normal"
                  required
                  fullWidth
                  name="geometry"
                  value={formik.values.geometry}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.geometry && Boolean(formik.errors.geometry)
                  }
                  helperText={formik.touched.geometry && formik.errors.geometry}
                  label="geometry"
                  type="text"
                  id="geometry"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  label="age"
                  required
                  fullWidth
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  type="number"
                  id="age"
                />

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ width: '25%' }}
                  className={classes.submit}
                  onClick={getLocation}
                >
                  Provide your location
                </Button>
                <Grid container></Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Register
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      to={redirect ? `/login?redirect=${redirect}` : `/login`}
                      style={{
                        textDecoration: 'none',
                        color: '#fff',
                      }}
                    >
                      <Typography variant="body2" component="p">
                        Already have an account?{' '}
                        <span
                          style={{
                            textDecoration: 'underline',
                          }}
                        >
                          Sign In
                        </span>
                      </Typography>
                    </Link>
                  </Grid>
                  <div>
                    <Dialog
                      open={open}
                      onClose={() => {
                        setOpen(false);
                      }}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {'We need your location for us to help you'}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Let our application determine location. Your privacy
                          is our top concern. It will not be shared to external
                          services in any way.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={() => {
                            setOpen(false);
                          }}
                          color="#fff"
                        >
                          I understand
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </Grid>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Registration;
