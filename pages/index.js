import Head  from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { useEffect } from "react";
import { auth } from "@/components/firebase";
import { selectUser, login, logout } from "@/Slices/userSlice";
import {useDispatch, useSelector} from "react-redux"
import {onAuthStateChanged} from "firebase/auth"
import Login from "@/components/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="font-RenFont" >
      <Head>
        <title>Rendezvous</title>
        <meta name="Rendezvous" content="The stranger's choice" />
        <link rel="icon" href="logo.png" />
      </Head>

      <Header />

      {!user ? (
        <Login />
      ) : (
        <Banner />
      )}
            
    </div>
  );
}

export default App;