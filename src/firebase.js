import * as firebase from 'firebase'
import "firebase/firebase-database"

var firebaseConfig = {
    apiKey: "AIzaSyAXMQpgnljXO_-G08BanUUrO4HL4lyFAJM",
    authDomain: "blog-photos-808ca.firebaseapp.com",
    databaseURL: "https://blog-photos-808ca.firebaseio.com",
    projectId: "blog-photos-808ca",
    storageBucket: "blog-photos-808ca.appspot.com",
    messagingSenderId: "1021172156709",
    appId: "1:1021172156709:web:0c701d058a60516732f2cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.database();