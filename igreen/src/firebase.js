import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8q40RUJe0C4s4iixc3n6z2FNiK3t1vLE",
    authDomain: "twix-dp4.firebaseapp.com",
    projectId: "twix-dp4",
    storageBucket: "twix-dp4.appspot.com",
    messagingSenderId: "643048572524",
    appId: "1:643048572524:web:ed4a49ec9df1b5cc0bfa49",
    measurementId: "G-GNMCD2JSW5"
});

const db = firebaseApp.firestore();
export {db, firebaseApp, firebase};