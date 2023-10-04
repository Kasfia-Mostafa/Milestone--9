// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYtIhe0GhbPS9RXCku7eZxOJNxHKxHYUg",
  authDomain: "react-dragon-news-auth-26688.firebaseapp.com",
  projectId: "react-dragon-news-auth-26688",
  storageBucket: "react-dragon-news-auth-26688.appspot.com",
  messagingSenderId: "496414893869",
  appId: "1:496414893869:web:9d94719f87bcb2bdf7d5a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;