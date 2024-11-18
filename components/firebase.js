import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUMgohaRQkFosfZWtL34bfdP9nu-KmUgQ",
  authDomain: "rendezvous-8a6de.firebaseapp.com",
  projectId: "rendezvous-8a6de",
  storageBucket: "rendezvous-8a6de.appspot.com",
  messagingSenderId: "1087509764619",
  appId: "1:1087509764619:web:0072f50785609e912d450e",
  measurementId: "G-ZW7XVZSMNF"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };