// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy_157HuXfnrNk6jnGYDrnWK54uTQ6fTc",
  authDomain: "car-doctor-c02e6.firebaseapp.com",
  projectId: "car-doctor-c02e6",
  storageBucket: "car-doctor-c02e6.appspot.com",
  messagingSenderId: "138047283507",
  appId: "1:138047283507:web:89a71b6448aae6855fde46",
  measurementId: "G-150D91L9ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// const analytics = getAnalytics(app);