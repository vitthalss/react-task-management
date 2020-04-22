import projectConstants from '../constants/ProjectConstants';

const initalState = {
  projects: [],
  isLoading: false,
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case projectConstants.fetch: {
      return Object.assign(
        {},
        state,
        {
          isLoading: true
        }
      );
    }
    case projectConstants.fetchSuccess: {
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          projects: action.payload.projects
        }
      );
    }
    case projectConstants.fetchFailure: {
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
        }
      );
    }

    default: return state;
  }
}
