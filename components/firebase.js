import {initializeApp} from "firebase/app"
import { getFirestore} from 'firebase/firestore';
import {getAuth, signOut, onAuthStateChanged} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBUMgohaRQkFosfZWtL34bfdP9nu-KmUgQ",
    authDomain: "rendezvous-8a6de.firebaseapp.com",
    projectId: "rendezvous-8a6de",
    storageBucket: "rendezvous-8a6de.appspot.com",
    messagingSenderId: "1087509764619",
    appId: "1:1087509764619:web:0072f50785609e912d450e",
    measurementId: "G-ZW7XVZSMNF"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);


  export {db, auth, signOut, onAuthStateChanged};