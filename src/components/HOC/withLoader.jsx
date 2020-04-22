import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinearIndeterminate from '../Dumb/Progress/LinearIndeterminate';
import ErrorContainer from '../Containers/ErrorContainer';

const withLoader = (Wrapped) => {
  const LoaderHOC = (props) => {
    if (props.isLoading && !props.error) {
      return <LinearIndeterminate />;
    }
    if (!props.isLoading && !props.error) {
      return <Wrapped {...props} />;
    }
    return (
      <React.Fragment>
        <ErrorContainer>
          <h1>error</h1>
        </ErrorContainer>
      </React.Fragment>
    );
  };

  const mapStateToProps = (store) => {
    return {
      error: store.ErrorReducer.error
    };
  };

  LoaderHOC.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object,
  };

  return connect(mapStateToProps)(LoaderHOC);
};

export default withLoader;
