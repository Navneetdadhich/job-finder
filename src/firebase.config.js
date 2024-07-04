// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp0FN6TFk2eDGMXD2W_6JgOtGNJNUIUcQ",
  authDomain: "job-finder-b1236.firebaseapp.com",
  projectId: "job-finder-b1236",
  storageBucket: "job-finder-b1236.appspot.com",
  messagingSenderId: "377064089051",
  appId: "1:377064089051:web:b802f8d94ee078a51af3fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};