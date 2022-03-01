import * as firebase from 'firebase/app'
import 'firebase/auth'
import { functions } from 'firebase/app';
import 'firebase/firestore'
import 'firebase/firebase-storage'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

const FirebaseApp = firebase.initializeApp(firebaseConfig)
const db = FirebaseApp.firestore()
const auth = FirebaseApp.auth()
const FirebaseStorage = firebase.storage();
export {db , auth , FirebaseStorage}