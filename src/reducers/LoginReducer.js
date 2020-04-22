import loginConstants from '../constants/LoginConstants';

const initialState = {
  logged: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case loginConstants.loginInit: {
      return Object.assign(
        {},
        state,
        {
          logged: null
        }
      );
    }

    case loginConstants.login: {
      return Object.assign(
        {},
        state,
        {
          logged: true
        }
      );
    }

    case loginConstants.logout: {
      return Object.assign(
        {},
        state,
        {
          logged: false
        }
      );
    }

    default: return state;
  }
}
