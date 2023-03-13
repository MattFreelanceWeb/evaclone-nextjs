import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import Villes from "@/components/villes/Villes";
import BtnReserver from "@/components/button/BtnReserver";


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
        <section className="w-screen h-screen flex items-center justify-center relative">
          <div className="absolute h-screen w-screen flex items-center justify-center overflow-hidden">
          <iframe
            className="w-[200%] h-[200%] aspect-video -z-10"
            title="id-jC1KMY3bFSU"
            src="https://www.youtube.com/embed/u_nnwyW4XSM?autoplay=1&amp;amp;modestbranding=1&amp;amp;controls=0&amp;amp;showinfo=0&amp;amp;loop=1&amp;amp;rel=0&amp;amp;enablejsapi=1&amp;amp;version=3&amp;amp;origin=https%3A%2F%2Feva.gg&amp;amp;allowfullscreen=1&amp;amp;wmode=transparent&amp;amp;iv_load_policy=3&amp;amp;html5=1&amp;amp;widgetid=1&amp;amp;mute=1&amp;amp;playlist=u_nnwyW4XSM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <div className=" absolute w-full h-full bg-black/40 z-10"/>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-6 text-white w-full h-full z-20 ">
            <Image
              src={"https://www.eva.gg/static/media/EVA-logo.a39e12ee.svg"}
              alt=""
              width={400}
              height={400}
              className='p-12'
            />
            <h1 className="text-3xl text-center font-bold ">ENTREZ DANS LE MONDE <br /> DE L&apos;ESPORT VR !</h1>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Villes/>
              <BtnReserver className="h-full w-full md:w-40"/>
            </div>
          </div>
        </section>
        <section className="h-screen">
          Battlepass
        </section>
        <section className="h-screen">
         EVA:le futur de l&apos;esport
        </section>
        <section className="h-screen">
         communauté eva
        </section>
        <section className="h-screen">
         première arène esport vr au monde
        </section>
        <section className="h-screen">
         nos jeux
        </section>
        <section className="h-screen">
         play.drink.eat.repeat
        </section>
      </main>
    </>
  );
}
