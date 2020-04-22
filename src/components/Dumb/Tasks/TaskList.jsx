import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {
  UpdateComponent,
  DeleteComponent
} from '../../Containers/AUDTask';

function TaskList({ tasks, row, col }) {
  return tasks.map(t => (
    <React.Fragment>
      <ListItem>
        <ListItemText primary={t} />
        <UpdateComponent
          row={row}
          col={col}
          oldTask={t}
        />
        <DeleteComponent
          row={row}
          oldTask={t}
        />
      </ListItem>
      <Divider />
    </React.Fragment>
  ));
}

export default TaskList;
