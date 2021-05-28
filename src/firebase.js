// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCrxVXMI9hI7kLjzNNDifkuFtfu3jgcwJc",
    authDomain: "clone-1d187.firebaseapp.com",
    projectId: "clone-1d187",
    storageBucket: "clone-1d187.appspot.com",
    messagingSenderId: "441865874109",
    appId: "1:441865874109:web:7373747c1cbf4ab06b25d4",
    measurementId: "G-LZJZ9PW85H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth}