import errorConstants from '../constants/ErrorConstants';

export function setError(error) {
  return {
    type: errorConstants.error,
    payload: {
      error
    }
  };
}

export function resetError() {
  return {
    type: errorConstants.reset
  };
}
