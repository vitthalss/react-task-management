import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

/* ACTION */
import { doLogout } from '../../actions/LoginActions';

function LogoutContainer(props) {
  return (
    <Button
      color="inherit"
      onClick={() => props.doLogout()}
    >
      Logout
    </Button>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    doLogout: () => {
      dispatch(doLogout());
    }
  };
};

LogoutContainer.propTypes = {
  doLogout: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(LogoutContainer);
