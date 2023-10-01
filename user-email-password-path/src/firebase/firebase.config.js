// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZS12oDr0EkFXvVwRJ2ne4qPGBJDcGRG0",
  authDomain: "use-email-password-auth-23632.firebaseapp.com",
  projectId: "use-email-password-auth-23632",
  storageBucket: "use-email-password-auth-23632.appspot.com",
  messagingSenderId: "257248047131",
  appId: "1:257248047131:web:6ce3cdd0b1e1fde60a88be",
  measurementId: "G-44M6515MEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;