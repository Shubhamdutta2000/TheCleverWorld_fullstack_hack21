import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import UserMap from './components/Map';
import Track from './components/Track';
import { useDispatch, useSelector } from 'react-redux';
import { getStandPointUserAction } from '../../redux/action-creators/standPointAction';

function UserDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStandPointUserAction());
  }, [dispatch]);

  return (
    <div>
      <Grid container>
        <Grid item md={6}>
          <Track />
        </Grid>
        <Grid item md={6} xs={12}>
          <UserMap />
        </Grid>
      </Grid>
    </div>
  );
}

export default UserDashboard;
