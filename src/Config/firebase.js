import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAZHMshpfUCeNoTqzTasx0FXg-28VbbRGw",
    authDomain: "truchimarket.firebaseapp.com",
    projectId: "truchimarket",
    storageBucket: "truchimarket.appspot.com",
    messagingSenderId: "714659951863",
    appId: "1:714659951863:web:9f893e4eb162cf4c1fcff2",
    measurementId: "G-WVH1B5KPRT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
firebase.auth = firebase.auth();

// Esto lo puso leandro y no sé qué es 
firebase.db = db;

export default firebase