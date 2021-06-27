import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  imgWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formImage: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  formElementContainer: {

  },
}));
