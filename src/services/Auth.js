import { firebase } from '../firebase/firebase';

const signup = ({ email, password }) => new Promise((resolve, reject) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    const user = firebase.auth().currentUser;
    resolve(user);
  })
    .catch((error) => {
      reject(error);
    });
});

const signin = ({ email, password }) => new Promise((resolve, reject) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;
      resolve(user);
    })
    .catch((error) => {
      reject(error);
    });
});

const signout = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then((resp) => {
    resolve(resp);
  }).catch((error) => {
    reject(error);
  });
});

const Auth = {
  signup,
  signin,
  signout,
};

export default Auth;
