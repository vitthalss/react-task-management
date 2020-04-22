import projectConstants from '../constants/ProjectConstants';

export function projectFetch() {
  return {
    type: projectConstants.fetch
  };
}

export function fetchSuccess(projects) {
  return {
    type: projectConstants.fetchSuccess,
    payload: {
      projects
    }
  };
}

export function fetchFailure(err) {
  return {
    type: projectConstants.fetchFailure,
    payload: {
      error: err
    }
  };
}
