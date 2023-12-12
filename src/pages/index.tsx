import Layout from "@/components/Layout/Layout";
import Advantages from "@/components/UI/Advantages/Advantages";
import Faq from "@/components/UI/Faq/Faq";
import Func from "@/components/UI/Func/Func";
import Main from "@/components/UI/Main/Main";
import Screens from "@/components/UI/Screens/Screens";
import Tariffs from "@/components/UI/Tariffs/Tariffs";
import Video from "@/components/UI/Video/Video";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SC2Cheats</title>
      </Head>
      <Layout>
        <Main />
        <Advantages />
        <Screens />
        <Video />
        <Func />
        <Tariffs />
        <Faq />
      </Layout>
    </>
  );
}