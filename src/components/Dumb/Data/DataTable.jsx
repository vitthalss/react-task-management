import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DataCell from './DataCell';
import { AddMemberComponent } from '../../Containers/AUDTask';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    textAlign: 'left'
  },
});

function DataTable(props) {
  const { boards, classes } = props;
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>
            Members
            <AddMemberComponent />
          </TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>Progress</TableCell>
          <TableCell>Completed</TableCell>
          <TableCell>Approved</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {boards.map((b) => {
          return (
            <TableRow>
              <TableCell component="th" scope="row" className={classes.cell}>
                {b.assigned}
              </TableCell>
              <DataCell
                tasks={b.pending ? b.pending : []}
                type="pending"
                assigned={b.assigned}
              />
              <DataCell
                tasks={b.progress ? b.progress : []}
                type="progress"
                assigned={b.assigned}
              />
              <DataCell
                tasks={b.completed ? b.completed : []}
                type="completed"
                assigned={b.assigned}
              />
              <DataCell
                tasks={b.approved ? b.approved : []}
                type="approved"
                assigned={b.assigned}
              />
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

DataTable.propTypes = {
  boards: PropTypes.array,
  classes: PropTypes.object,
};

export default withStyles(styles)(DataTable);
