import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../Dumb/Login';
import LinearIndeterminate from '../Dumb/Progress/LinearIndeterminate';

/* ACTIONS */
import { doLogin, ifLogged } from '../../actions/LoginActions';

function withAuth(Wrapped) {
  class LoginHOC extends React.Component {

    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
    }

    componentDidMount() {
      this.props.ifLogged();
    }

    login() {
      this.props.doLogin();
    }

    render() {
      if (this.props.logged === null) {
        return <LinearIndeterminate />;
      } else if (this.props.logged) {
        return <Wrapped />;
      }
      return <Login login={this.login} />;
    }
  }

  const mapStateToProps = (store) => {
    return {
      logged: store.LoginReducer.logged
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      doLogin: () => {
        dispatch(doLogin());
      },
      ifLogged: () => {
        dispatch(ifLogged());
      }
    };
  };

  LoginHOC.propTypes = {
    doLogin: PropTypes.func.isRequired,
    ifLogged: PropTypes.func.isRequired,
    logged: PropTypes.bool
  };

  return connect(mapStateToProps, mapDispatchToProps)(LoginHOC);
}

export default withAuth;
