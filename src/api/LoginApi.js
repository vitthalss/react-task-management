import firebase from 'firebase';
import config from '../config';

firebase.initializeApp(config);

export function loginApi() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}

export function logoutApi() {
  return firebase.auth().signOut();
}

export function checkIfLoggedApi(cb) {
  return firebase.auth().onAuthStateChanged(cb);
}
