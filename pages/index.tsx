import Head from "next/head";
import { Inter } from "next/font/google";
import Video from "@/components/section/index/Video";
import Battlepass from "@/components/section/index/Battlepass";
import Esport from "@/components/section/index/Esport";
import Community from "@/components/section/index/Community";
import Arena from "@/components/section/index/Arena";
import Games from "@/components/section/index/Games";
import Bar from "@/components/section/index/Bar";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
    <>
      <Head>
        <title>Matt - EVA clone</title>
        <meta
          name="description"
          content="clone du site https://www.eva.gg/fr/ afin de montrer de possible améliorations front et promouvoir ce e-sport"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-0 md:pt-24 xl:pt-16 z-0 flex flex-col">
        <Video/>
        <Battlepass/>
        <Esport/>
        <Community/>
        <Arena/>
        <Games/>
        <Bar/>
      </main>
    </>
  );
}
