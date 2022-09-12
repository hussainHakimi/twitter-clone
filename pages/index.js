import { async } from "@firebase/util";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";

import { getProviders, getSession, useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  if (!session) return <Login providers={providers} />;
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/twitter.jpg" />
      </Head>
      {/* <h1 className="text-5xl font-bold text-[#f54748] text-center bg-black border-b-2 py-5">
        Twitter Clone
      </h1> */}
      <main className="bg-black min-h-screen max-w-[1500px] flex mx-auto">
        {/* Sidebar  */}
        <Sidebar />
        {/* Feed */}
        <Feed />

        {/* Badgets */}
        {/* Modal */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  const followResults = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
