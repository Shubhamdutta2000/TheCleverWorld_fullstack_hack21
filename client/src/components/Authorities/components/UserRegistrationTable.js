import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//Styles
import { useStyles } from '../../../style/Authorities';
//React components
import { Link } from 'react-router-dom';

function UserRegistrationTable() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" align="left">
        User Registration Details
      </Typography>
      <Paper elevation={3} className={classes.PaperCustomers}>
        <TableContainer>
          <Table
            className={classes.table}
            size="medium"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>User Name</b>
                </TableCell>
                <TableCell>
                  <b>Mobile Number</b>{' '}
                </TableCell>
                <TableCell>
                  <b>Stand Point</b>{' '}
                </TableCell>
                <TableCell>
                  <b>Serial Number</b>{' '}
                </TableCell>
                <TableCell>
                  <b>isVaccinated</b>{' '}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Nunu Dutta
                </TableCell>
                <TableCell component="th" scope="row">
                  +9169696969
                </TableCell>
                <TableCell component="th" scope="row">
                  baishaki hatier niche
                </TableCell>
                <TableCell>
                  69
                </TableCell>
                <TableCell>
                  {' '}
                  vaccine paini
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default UserRegistrationTable;
