import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAwoj8dSS02bv2iHetvTFT2LGkXJRlIaGk",
  authDomain: "crudproyecto-22c3a.firebaseapp.com",
  databaseURL: "https://crudproyecto-22c3a-default-rtdb.firebaseio.com",
  projectId: "crudproyecto-22c3a",
  storageBucket: "crudproyecto-22c3a.appspot.com",
  messagingSenderId: "943196007724",
  appId: "1:943196007724:web:d5d24c54dc21888bf81089",
  measurementId: "G-YK442PB8Y4"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fs = getFirestore(app);