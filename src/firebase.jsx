// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { addDoc,collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1JFTA3URaHvjB5MRx7l8Af6rs0vUUgAg",
  authDomain: "chatsphere-9d942.firebaseapp.com",
  projectId: "chatsphere-9d942",
  storageBucket: "chatsphere-9d942.appspot.com",
  messagingSenderId: "2414159736",
  appId: "1:2414159736:web:f2618644847a05082dca8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export  {addDoc,collection};
