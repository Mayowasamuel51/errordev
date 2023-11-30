// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNLTapgS2v-shCRQTFJDMvIZKHCRmTNNg",
  authDomain: "errordev-4ea73.firebaseapp.com",
  projectId: "errordev-4ea73",
  storageBucket: "errordev-4ea73.appspot.com",
  messagingSenderId: "26317557484",
  appId: "1:26317557484:web:5718d245e90ecad632dfc9",
  measurementId: "G-798DM0LMK5"
};

// Initialize Firebase
const AppF = initializeApp(firebaseConfig);
const analytics = getAnalytics(AppF);



export default AppF
const auth = getAuth(AppF)