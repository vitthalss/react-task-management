import { resetError } from '../actionCreator/ErrorActionCreator';

const errorReset = () => (dispatch) => {
  dispatch(resetError());
};

export default errorReset;
