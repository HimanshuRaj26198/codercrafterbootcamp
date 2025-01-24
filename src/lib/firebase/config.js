// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzX_DE6QDoxmACSO_x6Y7PtfM2IJFNQyY",
    authDomain: "crafter-841dd.firebaseapp.com",
    projectId: "crafter-841dd",
    storageBucket: "crafter-841dd.firebasestorage.app",
    messagingSenderId: "163182758116",
    appId: "1:163182758116:web:a823210bb58ce76148c4f1",
    measurementId: "G-F32V6TT501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);