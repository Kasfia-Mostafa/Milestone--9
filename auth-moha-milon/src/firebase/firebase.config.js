// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoEF_j0Ca0l3H3efcQp7Ynl615uBC2yRA",
  authDomain: "auth-moha-milon-2cf87.firebaseapp.com",
  projectId: "auth-moha-milon-2cf87",
  storageBucket: "auth-moha-milon-2cf87.appspot.com",
  messagingSenderId: "532829543747",
  appId: "1:532829543747:web:1a4713b9155957536da3f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth