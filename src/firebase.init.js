// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQRs7af4VJqqisjq4iTYKKE7n7WPQ6yqY",
  authDomain: "bloc-7f193.firebaseapp.com",
  projectId: "bloc-7f193",
  storageBucket: "bloc-7f193.appspot.com",
  messagingSenderId: "967961054355",
  appId: "1:967961054355:web:a850e36bdc7d3365fd1166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;