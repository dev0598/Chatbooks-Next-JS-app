import firebase from 'firebase';
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3a0zgIiMXQhdIrpBXUIJQOJ6GObE_4f8",
    authDomain: "chatbooks-abe6d.firebaseapp.com",
    projectId: "chatbooks-abe6d",
    storageBucket: "chatbooks-abe6d.appspot.com",
    messagingSenderId: "432433295949",
    appId: "1:432433295949:web:9edb46b3966ec789c3a204",
    measurementId: "G-0NZREYJ23D"
  };
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };