import Head  from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div className="font-RenFont" >
      <Head>
        <title>Rendezvous</title>
        <meta name="Rendezvous" content="The stranger's choice" />
        <link rel="icon" href="logo.png" />
      </Head>

      <Header />
      <Banner />

      <main className="px-8 mx-auto max-w-7xl">

      </main>
      
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}