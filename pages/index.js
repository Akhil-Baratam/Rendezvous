import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { useEffect } from "react";
import { auth } from "../components/firebase";
import { selectUser, login, logout } from "@/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import Login from "@/components/Login";
import { useRouter } from "next/router";

function App() {
  const user = useSelector(selectUser);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
        router.push("/explore");
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="font-RenFont">
      <Head>
        <title>Rendezvous</title>
        <meta name="Rendezvous" content="The stranger's choice" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <Banner />
    </div>
  );
}

export default App;