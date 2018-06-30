import firebase from 'firebase/app';
import 'firebase/auth';
import '@firebase/firestore';

// Initalize and export Firebase.
const config = {
    apiKey: "AIzaSyCdV_CcP0ttiJSKsV0jHNNdYYAzPrnZNQc",
    authDomain: "kinderkash-9c124.firebaseapp.com",
    databaseURL: "https://kinderkash-9c124.firebaseio.com",
    projectId: "kinderkash-9c124",
    storageBucket: "kinderkash-9c124.appspot.com",
    messagingSenderId: "143224641941"
};

firebase.initializeApp(config);

// Firestore settings
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };

firestore.settings(settings);

export default firebase;
