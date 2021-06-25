import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  imgWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formImage: {
    width: '81%',
    height: '61%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  formElementContainer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));
