import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import TaskList from './TaskList';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TaskDetailDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div onClick={this.handleClickOpen}>
          {this.props.children}
        </div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Button color="inherit" onClick={this.handleClose}>
                Close
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <TaskList
              tasks={this.props.tasks}
              row={this.props.row}
              col={this.props.col}
            />
          </List>
        </Dialog>
      </React.Fragment>
    );
  }
}

TaskDetailDialog.propTypes = {
  tasks: PropTypes.array,
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  row: PropTypes.string.isRequired,
  col: PropTypes.string.isRequired
};

export default withStyles(styles)(TaskDetailDialog);
