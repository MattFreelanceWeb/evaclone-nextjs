import BtnReserver from "@/components/button/BtnReserver";
import Image from "next/image";
import React from "react";

type Props = {};

function Arena({}: Props) {
  return (
    <section className="w-screen  flex flex-col lg:flex-row items-center justify-start relative text-white bg-black  ">
      <div className="h-full w-full bg-black/40 absolute z-10"/>
      <Image
        src={
          "https://www.eva.gg/static/media/BLASTAFOREVA_BG_Desktop_OPTI.396ea5f7.webp"
        }
        alt={""}
        width={1920}
        height={1092}
        className=" absolute hidden lg:flex h-screen object-cover object-top"
      />
      <div className="relative w-full h-96 lg:hidden">
        <Image
          src={
            "https://www.eva.gg/static/media/BLASTAFOREVA_BG_Desktop_OPTI.396ea5f7.webp"
          }
          alt={""}
          width={1920}
          height={1092}
          className=" absolute h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 relative flex flex-col items-start justify-center gap-8 p-12 text-xl z-10">
        <Image
          src={"https://www.eva.gg/static/media/lines-2.48fbb854.svg"}
          alt={""}
          width={82}
          height={208}
          className="absolute bottom-2 left-2 z-20"
        />
        <Image
          src={"https://www.eva.gg/static/media/lines-7.6be4c5cc.svg"}
          alt={""}
          width={82}
          height={208}
          className="absolute top-4 right-2 lg:right-10 z-20 -rotate-90"
        />
        <h2 className="uppercase text-4xl font-bold ">
          LA PREMIÈRE ARÈNE ESPORT VR AU MONDE
        </h2>
        <p>
          Technologie unique au monde présentée pour la première fois à la Paris
          Games Week 2019, EVA propose une expérience ultime en esport VR.
        </p>
        <p>
          Munis d&apos;un casque VR, d&apos;un ordinateur en sac à dos et
          d&apos;un fusil connecté, vous vous déplacez librement sur une arène
          de 500m2 ! C&apos;est ce qu&apos;on appelle le FREE ROAMING en réalité
          virtuelle.
        </p>
        <p>
          Parce que l&apos;esport c&apos;est aussi le spectacle, toutes nos
          arènes sont équipées d&apos;un dispositif pour suivre les parties en
          cours et les compétitions organisées.
        </p>
        <BtnReserver className="self-center lg:self-start"/>
      </div>
    </section>
  );
}

export default Arena;
