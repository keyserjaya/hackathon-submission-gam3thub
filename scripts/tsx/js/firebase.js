// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKavnxTltW1N9yRiBWcbwPa8g3qXrRYQg",
  authDomain: "gam3thub-76559.firebaseapp.com",
  projectId: "gam3thub-76559",
  storageBucket: "gam3thub-76559.firebasestorage.app",
  messagingSenderId: "181517904940",
  appId: "1:181517904940:web:7f98e544d71ddc5c647589",
  measurementId: "G-LV64R3V0BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };