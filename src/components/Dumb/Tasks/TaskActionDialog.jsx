import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class TaskActionDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: ''
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleClickOpen(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ open: true });
  }

  handleClose(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ open: false });
  }

  handleAdd(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.actionFunction(this.state.value);
    this.setState({ open: false });
  }

  render() {
    const { action, msg, label, tasks } = this.props;
    return (
      <div onClick={e => e.stopPropagation()}>
        {
          (label === 'Delete Card' && !tasks.length) ?
            null :
            <Button onClick={this.handleClickOpen}>{action}</Button>
        }
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">{action} Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {msg}
            </DialogContentText>
            {
              (!label.toLowerCase().includes('delete')) &&
                <TextField
                  autoFocus
                  margin="dense"
                  label={label}
                  fullWidth
                  value={this.state.value}
                  onChange={e => this.setState({ value: e.target.value })}
                />
            }
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAdd} color="primary">
              {action}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

TaskActionDialog.propTypes = {
  action: PropTypes.string.isRequired,
  actionFunction: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tasks: PropTypes.array
};

export default TaskActionDialog;
