import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcCNRRh8dW6J-1jnHFZj2oURgmjybv-UE",
  authDomain: "pet-care-in-winter-22ce3.firebaseapp.com",
  projectId: "pet-care-in-winter-22ce3",
  storageBucket: "pet-care-in-winter-22ce3.firebasestorage.app",
  messagingSenderId: "815220839452",
  appId: "1:815220839452:web:f714d91c1c115abc2dfbd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);