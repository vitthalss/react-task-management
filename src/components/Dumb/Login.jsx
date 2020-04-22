import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    position: 'relative'
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  innerContainer: {
    width: 500,
    height: 500,
    background: 'white',
    textAlign: 'center'
  },
  button: {
    color: 'white',
  },
  titleContainer: {
    position: 'absolute',
    left: '50%',
    top: '30%',
    transform: 'translate(-50%, 0)'
  }
};

function Login(props) {
  return (
    <div style={styles.container}>
      <Paper style={Object.assign({}, styles.center, styles.innerContainer)}>
        <div style={styles.titleContainer}>
          <Typography
            variant="title"
            gutterBottom
          >
            Login to view projects
          </Typography>
        </div>
        <Button
          variant="contained"
          size="large"
          color="primary"
          style={Object.assign({}, styles.center, styles.button)}
          onClick={() => props.login()}
        >
          Login with google
        </Button>
      </Paper>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequried
};

export default Login;
