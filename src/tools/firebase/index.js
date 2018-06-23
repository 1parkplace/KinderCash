import firebase from 'firebase/app';
import 'firebase/auth';
import '@firebase/database';

// Initalize and export Firebase.
const config = {
    apiKey: 'AIzaSyDQ9Sk80Z_XMFeAapAeIZ4DDGrYgyTeUJA',
    authDomain: 'dodyfamilybank.firebaseapp.com',
    databaseURL: 'https://dodyfamilybank.firebaseio.com',
    projectId: 'dodyfamilybank',
    storageBucket: 'dodyfamilybank.appspot.com',
    messagingSenderId: '102354476099'
};

firebase.initializeApp(config);

// Firestore settings
const firestore = firebase.database();
const settings = { timestampsInSnapshots: true };

firestore.settings(settings);

export default firebase;
