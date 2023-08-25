// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCZTklNnr2QNiueSihTrTgL9ml0Y7dANY",
  authDomain: "maytailwind.firebaseapp.com",
  projectId: "maytailwind",
  storageBucket: "maytailwind.appspot.com",
  messagingSenderId: "92841705336",
  appId: "1:92841705336:web:7db19fa5dd7a093e6e928d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);