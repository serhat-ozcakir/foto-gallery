import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC9S04V04W4GcGz5G2h2msCSB2L2oMo6vQ",
    authDomain: "firegram-35527.firebaseapp.com",
    projectId: "firegram-35527",
    storageBucket: "firegram-35527.appspot.com",
    messagingSenderId: "338746341182",
    appId: "1:338746341182:web:43abff1d204d35aeccde6f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectStorage,projectFirestore,timestamp}