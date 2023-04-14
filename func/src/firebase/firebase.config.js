// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGF1wpXTbX7hbloex6bsOwSrAaqLedAIc",
  authDomain: "func-dumbell.firebaseapp.com",
  projectId: "func-dumbell",
  storageBucket: "func-dumbell.appspot.com",
  messagingSenderId: "882140787362",
  appId: "1:882140787362:web:c7dd742d8325afbef85dfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;