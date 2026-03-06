// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRjmMGHYclTIC35agJMBNBa5hYRGkHyUs",
  authDomain: "boury-back.firebaseapp.com",
  projectId: "boury-back",
  storageBucket: "boury-back.firebasestorage.app",
  messagingSenderId: "469961111302",
  appId: "1:469961111302:web:7a7caa08023731724bd087"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);