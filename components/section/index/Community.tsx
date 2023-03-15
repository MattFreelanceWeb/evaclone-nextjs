import IonIcon from "@reacticons/ionicons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Community({}: Props) {
  return (
    <section className="w-screen flex flex-col lg:flex-row lg:h-screen items-center justify-center relative py-16 overflow-hidden">
      <div className="w-full lg:w-1/2 h-full relative flex flex-col items-start justify-center gap-8 p-12 text-xl ">
      <Image src={'https://www.eva.gg/static/media/lines-2.48fbb854.svg'} alt={''} width={82} height={208} className='absolute bottom-2 left-2 z-20'/>
      <Image src={'https://www.eva.gg/static/media/lines-7.6be4c5cc.svg'} alt={''} width={82} height={208} className='absolute top-4 right-2 lg:right-10 z-20 -rotate-90'/>
        <h2 className="uppercase text-4xl font-bold ">COMMUNAUTÉ EVA</h2>
        <p>
          Rejoignez la communauté EVA sur Discord, retrouvez les joueurs de
          votre salle,{" "}
          <strong>
            accéder à des codes promos exclusifs et des actualités en avant
            première.
          </strong>
        </p>
        <Link
          href="https://discord.com/invite/zAJCrKH6qm"
          target={"_blank"}
          className="bg-blue-400 px-8 py-6 rounded-lg text-white flex items-center text-xl "
        >
          {" "}
          <span className="mx-4">
            <IonIcon name="logo-discord" size="large" />
          </span>{" "}
          Join our <span className="font-bold uppercase mx-2"> Discord</span>
        </Link>
      </div>
      <div className="w-full lg:w-1/2 h-full relative flex flex-col items-center justify-center gap-6 p-12 text-xl ">
        <iframe src="https://discord.com/widget?id=740499725291225099&theme=dark" className="w-full h-full min-h-[300px]"></iframe>
      </div>
    </section>
  );
}

export default Community;
