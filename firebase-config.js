// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACYtL3Y0JALW3S8TEyrVke9iWvfZLDa98",
  authDomain: "crud-system-gg.firebaseapp.com",
  projectId: "crud-system-gg",
  storageBucket: "crud-system-gg.firebasestorage.app",
  messagingSenderId: "925598589469",
  appId: "1:925598589469:web:90cd1943ce68270fa45cf4",
  measurementId: "G-LYCW3JEG67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export { db, analytics, app };