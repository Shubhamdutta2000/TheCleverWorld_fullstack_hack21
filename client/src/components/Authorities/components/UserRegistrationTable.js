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
// Redux
import { useDispatch, useSelector } from 'react-redux';

function UserRegistrationTable() {
  const { data: usersWithinRange } = useSelector((state) => state.driveVaccine);

  const classes = useStyles();
  return (
    <div>
      <br />
      <Typography variant="h4" align="left">
        User Registration Details
      </Typography>
      <br />
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
              {usersWithinRange &&
                usersWithinRange.map((user, index) => {
                  return (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {user.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {user.phoneNumber}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {user.mapViewStandPoints[0]}
                      </TableCell>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell> {user.isVaccinated.toString()}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default UserRegistrationTable;
