// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMIZNJPy-43BuEsGyjRsf93jX7HGsFo5A",
  authDomain: "host-turismo.firebaseapp.com",
  projectId: "host-turismo",
  storageBucket: "host-turismo.firebasestorage.app",
  messagingSenderId: "905073259509",
  appId: "1:905073259509:web:90680d3fc0760534b8e6bc"
};

// Initialize Firebase
// ✅ Correcto
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);