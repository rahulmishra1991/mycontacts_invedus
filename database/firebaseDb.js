// database/firebaseDb.js
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAJjodgoWl8lDpOpAxhTYHaO88TjU8veGg",
    authDomain: "contacts-15d0c.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-00000.firebaseio.com",
    projectId: "contacts-15d0c",
    storageBucket: "contacts-15d0c.appspot.com",
    messagingSenderId: "73892053796",
    appId: "1:73892053796:web:1ca434ea26a849d0bbe9b1"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;