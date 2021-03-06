// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7jeuhUgUDiDtMUJl-1qcYRIv5u1fmE34",
  authDomain: "palavecino-app.firebaseapp.com",
  projectId: "palavecino-app",
  storageBucket: "palavecino-app.appspot.com",
  messagingSenderId: "544113623543",
  appId: "1:544113623543:web:ac718d8c1effade610aef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionProducts = collection(db, 'products');