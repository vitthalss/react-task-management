import errorConstants from '../constants/ErrorConstants';

const intialState = {
  error: null
};

export default function reducer(state = intialState, action) {
  switch (action.type) {

    case errorConstants.error: {
      return Object.assign(
        {},
        state,
        {
          error: action.payload.error
        }
      );
    }

    case errorConstants.reset: {
      return Object.assign(
        {},
        state,
        {
          error: ''
        }
      );
    }

    default: return state;
  }
}
