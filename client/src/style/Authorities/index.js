import { makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
   
    root: {
     padding: '1.5rem',
     margin: '0.5rem',
    },

    dashboard: {
      display: 'flex',
      flexDirection : 'row',
    },

    Paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: theme.spacing(2),
      width: '18rem',
      fontWeight: '690',
      fontSize: '21px',
    },

    PaperProducts: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: theme.spacing(2),
      fontWeight: '690',
      fontSize: '21px',
    },


  }));