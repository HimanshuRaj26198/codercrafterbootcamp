// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArbbI2P8UivqrrouHH2b9MoU_9pBl64Do",
    authDomain: "codercrafter-a83e3.firebaseapp.com",
    projectId: "codercrafter-a83e3",
    storageBucket: "codercrafter-a83e3.firebasestorage.app",
    messagingSenderId: "956864982608",
    appId: "1:956864982608:web:73b4da973840fd037aab55",
    measurementId: "G-JT4TB18EB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);