import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
import { useStyles } from '../../../style/NavbarStyling';
import Logo from '../../../assets/landing-page/easyJaber_1-removebg-preview 1.png';

export default function MainNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.height}>
        <Toolbar variant="regular">
          {/*Nav Header*/}
          <Typography variant="h4" className={classes.title}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src={Logo} alt="Easy Jabber" />
            </Link>
          </Typography>
          {/*Nav items*/}
          <Link to="/Login" style={{ textDecoration: 'none' }}>
            <Typography variant="body2" className={classes.navItems}>
              Login
            </Typography>
          </Link>
          ||
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Typography className={classes.navItems}>Register</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
