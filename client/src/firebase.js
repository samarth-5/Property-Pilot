// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "property-pilot-cb77a.firebaseapp.com",
  projectId: "property-pilot-cb77a",
  storageBucket: "property-pilot-cb77a.appspot.com",
  messagingSenderId: "423518589688",
  appId: "1:423518589688:web:0b74029b332236231d610d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);