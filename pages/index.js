import Head  from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { selectUser } from "@/Slices/userSlice";
import {useSelector} from "react-redux"
import Login from "@/components/Login";

export default function Home() {
  const user = useSelector(selectUser);

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

      {/* <Banner /> */}

      {/* <main className="px-8 mx-auto max-w-7xl">

      </main> */}
      
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}