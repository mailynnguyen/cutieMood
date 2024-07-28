// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeKoQ7Augx7h2lTPxVhgw1sePC4b0Jj7s",
  authDomain: "cutiemood-d5a71.firebaseapp.com",
  projectId: "cutiemood-d5a71",
  storageBucket: "cutiemood-d5a71.appspot.com",
  messagingSenderId: "242560593994",
  appId: "1:242560593994:web:603f55b8cc9382bb68f6b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore
export const db = getFirestore(app);