import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import { AddComponent, DeleteCardComponent } from '../../Containers/AUDTask';
import TaskDetailDialog from '../Tasks/TaskDetailDialog';
import DraggableContainer from '../../Containers/DraggableContainer';

function DataCell(props) {
  const { tasks, type, assigned } = props;
  return (
    <TableCell style={{ height: 80 }}>
      <TaskDetailDialog row={assigned} col={type} tasks={tasks}>
        <DraggableContainer targetPerson={assigned} targetCol={type}>
          <Tooltip title={'Click to update or drag to any list'}>
            <ListItem button dense style={{ maxWidth: 200 }}>
              {tasks.length ? tasks.toString() : 'no task'}
              <div>
                <AddComponent row={assigned} col={type} />
                <DeleteCardComponent row={assigned} col={type} tasks={tasks} />
              </div>
            </ListItem>
          </Tooltip>
        </DraggableContainer>
      </TaskDetailDialog>
    </TableCell>
  );
}

DataCell.propTypes = {
  tasks: PropTypes.array.isRequired,
  assigned: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default DataCell;
