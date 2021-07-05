import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyARzuSWhJAqR9GJmzLm_y0U96LfrlxNLpc",
  authDomain: "ecomerce-f1ad8.firebaseapp.com",
  databaseURL: "https://ecomerce-f1ad8-default-rtdb.firebaseio.com",
  projectId: "ecomerce-f1ad8",
  storageBucket: "ecomerce-f1ad8.appspot.com",
  messagingSenderId: "741853361547",
  appId: "1:741853361547:web:9e9428b156993738bbeb8e",
  measurementId: "G-4QED8Y4ZWJ"
};
const fb= firebase.initializeApp(firebaseConfig)
const storage = fb.storage()
const db = fb.firestore()
const auth=fb.auth()

export {db, storage, auth}
