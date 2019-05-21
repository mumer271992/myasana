import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBsYB_jHyqdeCmBP7-8iCjtgl2GpZu3kGk",
    authDomain: "my-asana-c0ef8.firebaseapp.com",
    databaseURL: "https://my-asana-c0ef8.firebaseio.com",
    projectId: "my-asana-c0ef8",
    storageBucket: "my-asana-c0ef8.appspot.com",
    messagingSenderId: "544452948045"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };