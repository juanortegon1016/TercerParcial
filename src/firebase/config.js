import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/getStorage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcTiuA1-9ABI7yIb9PIetKHJl__Sl_LRA",
  authDomain: "challenges-cfb0a.firebaseapp.com",
  projectId: "challenges-cfb0a",
  storageBucket: "challenges-cfb0a.appspot.com",
  messagingSenderId: "286648209097",
  appId: "1:286648209097:web:c025d1df77be6844c38718",
  measurementId: "G-1WB1RNRQ53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const firebaseStore = getStorage(app);
const googleProvider = new GoogleAuthProvider()
const db = getFirestore()

export {app, auth,firebaseStore, db}