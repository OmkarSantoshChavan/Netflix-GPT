// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG4NlUgcob5tJMTkGOOSbbhiWmNKGMGHc",
  authDomain: "netflix-gpt-23455.firebaseapp.com",
  projectId: "netflix-gpt-23455",
  storageBucket: "netflix-gpt-23455.firebasestorage.app",
  messagingSenderId: "16101601549",
  appId: "1:16101601549:web:69c981a6124f527ac64044",
  measurementId: "G-P01VJQR87Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();