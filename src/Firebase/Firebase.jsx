import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA6-LUv3yK1yIMwBQ5gnM-nyMDzN6ZWTg",
  authDomain: "noon-academy-9bc4d.firebaseapp.com",
  projectId: "noon-academy-9bc4d",
  storageBucket: "noon-academy-9bc4d.appspot.com",
  messagingSenderId: "914957099473",
  appId: "1:914957099473:web:65a30c7d0a2ef834c400f0",
  measurementId: "G-8J20KKEF3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var authentication = getAuth(app);
const db = getFirestore(app);

export {authentication,db};