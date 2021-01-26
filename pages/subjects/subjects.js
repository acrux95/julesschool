import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import 'fontsource-roboto';
// import Title from './Title';

// Generate Order Data
function createData(id, folio, subject, teacher, status, schedule) {
  return { id, folio, subject, teacher, status, schedule };
}

const rows = [
  createData(0, '1001', 'Maths II', 'Charles Williams', 'Signed up', 'Mon, Wed, Fri'),
  createData(1, '1002', 'History II','David Wickman','Signed up', 'Tue, Thur'),
  createData(2, '1003', 'Physics I', 'Peter Jones', 'Free', 'Mon, Fri'),
  createData(3, '1004', 'Chemistry I', 'John Wilkerson', 'Free', 'Tue, Fri'),
  createData(4, '1005', 'Maths II', 'Peter Jonson', 'Signed up', 'Tue, Wed'),
  createData(5, '1006', 'Literature', 'Oscar Owen', 'Signed up', 'Mon, Wed, Fri'),
  createData(6, '1007', 'Biology I', 'Christian Brown', 'Free','Tue, Thur, Fri'),
  createData(7, '1008', 'Physics I', 'Luke Miller', 'Free', 'Tue, Wed, Fri'),
  createData(8, '1009', 'Chemistry I', 'John Davis', 'Free', 'Mon, Fri'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tableCell: {
    fontSize: '400pt',
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Title>Recent Orders</Title> */}
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Folio</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Teacher</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Schedule</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.folio}</TableCell>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.teacher}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
