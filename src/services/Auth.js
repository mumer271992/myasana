import { firebase } from '../firebase/firebase';

const signup = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((resp) => {
            console.log("User Created");
            let user = firebase.auth().currentUser
            console.log(user);
            resolve(user);
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        })
    });
};

const signin = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((resp) => {
            let user = firebase.auth().currentUser
            resolve(user)
        })
        .catch((error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            reject(error);
        });
    })
} 

const signout = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().signOut().then((resp) => {
            resolve(resp);
        }).catch((error) => {
            reject(error);
        });
    })
}

const Auth = {
    signup: signup,
    signin: signin,
    signout: signout,
}

export default Auth;