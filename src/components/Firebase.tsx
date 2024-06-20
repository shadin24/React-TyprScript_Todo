// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1uMUMjS8x_VeolF3PSu2dQjpt0GJK1ow",
  authDomain: "neon-rite-417600.firebaseapp.com",
  databaseURL: "https://neon-rite-417600-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "neon-rite-417600",
  storageBucket: "neon-rite-417600.appspot.com",
  messagingSenderId: "336315910335",
  appId: "1:336315910335:web:6aeaf9ff29666b12b95e0a",
  measurementId: "G-RPYBTEVYPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
