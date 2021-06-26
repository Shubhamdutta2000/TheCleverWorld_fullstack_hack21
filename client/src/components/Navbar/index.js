import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { Tooltip, Avatar, Menu, MenuItem, Divider } from '@material-ui/core';

import { Link } from 'react-router-dom';

import { useTheme } from '@material-ui/core/styles';
import { useStyles } from '../../style/NavbarStyling';

import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../../redux/action-creators/';

import easyjaber from '../../assets/landing-page/easyJaber_1-removebg-preview 1.png';

// redux

function Navbar() {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.userLogin);
  const [anchorEl, setAnchorEl] = useState(null);

  // LOGGING FOR DATA
  console.log(data);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    setAnchorEl(null);
    dispatch(signOutUser());
  };

  // selector

  //For media querries
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.height}>
        <Toolbar variant="regular">
          {/*Nav Header*/}
          <Typography variant="h4" className={classes.title}>
            <Link
              to="/"
              style={{ textDecoration: 'none', fontWeight: 'bolder' }}
            >
              <img
                src={easyjaber}
                className={classes.easyJaber}
                alt="Easyjaber"
              />
            </Link>
          </Typography>
          {isMobile ? (
            <>
              {/*Nav items*/}
              <Link
                to={`/login?redirect=${
                  data
                    ? data?.isAuthority
                      ? '/volunteer/dashboard'
                      : '/dashboard'
                    : '/dashboard'
                }`}
                style={{ textDecoration: 'none' }}
              >
                <Typography className={classes.navItems}>Dashboard</Typography>
              </Link>

              {!data && (
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <Typography className={classes.navItems}>Register</Typography>
                </Link>
              )}

              {data ? (
                <>
                  <Tooltip title={`${data.name.split(' ')[0]}`}>
                    <Avatar
                      onClick={handleClick}
                      // className={classes.avatar}
                      variant="circular"
                    >
                      {data.name[0]}
                    </Avatar>
                  </Tooltip>

                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link
                      to={`/login?redirect=${
                        data.isVolunteer ? '/authority/dashboard' : '/dashboard'
                      }`}
                      style={{
                        textDecoration: 'none',
                        color: '#fff',
                      }}
                    >
                      <MenuItem onClick={handleClose}>DashBoard</MenuItem>
                    </Link>

                    <Divider />
                    <Link
                      to="/"
                      style={{
                        textDecoration: 'none',
                        color: '#fff',
                      }}
                    >
                      <MenuItem onClick={logoutUser}>Logout</MenuItem>
                    </Link>
                  </Menu>
                </>
              ) : (
                <>
                  <Link to={'/Login'} style={{ textDecoration: 'none' }}>
                    <Typography variant="body2" className={classes.navItems}>
                      Login
                    </Typography>
                  </Link>
                </>
              )}
            </>
          ) : (
            <>
              {/*Mobile view navbar*/}
              <IconButton
                edge="start"
                className={classes.menuButton}
                onClick={() => setToggle(true)}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>

              {/*///      FOR MOBILE VIEW    ///*/}
              <Drawer
                anchor="right"
                open={toggle}
                onClose={() => setToggle(false)}
              >
                <List className={classes.list}>
                  <ListItem button>
                    <Link to={'/Login'} style={{ textDecoration: 'none' }}>
                      <ListItemText className={classes.mobilenavItems}>
                        Login
                      </ListItemText>
                    </Link>
                  </ListItem>
                  <ListItem button>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                      <ListItemText className={classes.mobilenavItems}>
                        Register
                      </ListItemText>
                    </Link>
                  </ListItem>
                  <ListItem button>
                    <Link to="/Dashboard" style={{ textDecoration: 'none' }}>
                      <ListItemText className={classes.mobilenavItems}>
                        Dashboard
                      </ListItemText>
                    </Link>
                  </ListItem>
                </List>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
