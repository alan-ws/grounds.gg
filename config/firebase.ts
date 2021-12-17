// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv4os9M7Qi20fyJcXA6U8tHqWsRXwyAW4",
  authDomain: "grounds-1cfae.firebaseapp.com",
  projectId: "grounds-1cfae",
  storageBucket: "grounds-1cfae.appspot.com",
  messagingSenderId: "950841326002",
  appId: "1:950841326002:web:542b63388c6e3734d98cab",
  measurementId: "G-73DT4R4B78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
