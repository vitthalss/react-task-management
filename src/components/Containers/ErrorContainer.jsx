import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MaterialSnackbar from '../Dumb/MaterialSnackbar';

/* ACTIONS */
import errorReset from '../../actions/ErrorActions';

function ErrorContainer(props) {
  function handleClose() {
    props.errorReset();
  }

  const { error } = props;

  return (
    <React.Fragment>
      {props.children}
      <MaterialSnackbar
        open={error}
        handleClose={handleClose}
      />
    </React.Fragment>
  );
}

const mapStateToProps = (store) => {
  return {
    error: store.ErrorReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    errorReset: () => {
      dispatch(errorReset());
    }
  };
};

ErrorContainer.propTypes = {
  error: PropTypes.string,
  children: PropTypes.object,
  errorReset: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorContainer);
