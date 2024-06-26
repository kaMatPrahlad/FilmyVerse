// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "filmyverse-2c66d.firebaseapp.com",
  projectId: "filmyverse-2c66d",
  storageBucket: "filmyverse-2c66d.appspot.com",
  messagingSenderId: "498805508106",
  appId: "1:498805508106:web:c199a3fb381d5b0fdab7f3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
