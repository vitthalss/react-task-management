import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LogoutContainer from '../Containers/LogoutContainer';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function MaterialAppBar(props) {
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={styles.flex}>
            {props.title}
          </Typography>
          <LogoutContainer />
        </Toolbar>
      </AppBar>
    </div>
  );
}

MaterialAppBar.propTypes = {
  title: PropTypes.string
};

export default MaterialAppBar;
