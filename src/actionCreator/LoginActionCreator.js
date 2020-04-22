import loginConstants from '../constants/LoginConstants';

export function loginInit() {
  return {
    type: loginConstants.loginInit
  };
}

export function login() {
  return {
    type: loginConstants.login
  };
}

export function logout() {
  return {
    type: loginConstants.logout
  };
}
