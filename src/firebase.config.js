// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqMbXbIfgejFjNoTytCuwHtjmhk-YYlBc",
  authDomain: "house-marketplace-app-44ac9.firebaseapp.com",
  projectId: "house-marketplace-app-44ac9",
  storageBucket: "house-marketplace-app-44ac9.appspot.com",
  messagingSenderId: "520211748660",
  appId: "1:520211748660:web:23486036732d2dc1327761"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db= getFirestore()
