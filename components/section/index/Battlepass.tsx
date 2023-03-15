import React from "react";
import Image from "next/image";
import battlePassMain from "../../../assets/images/battlepass/main.png";
import battlePassBronze from "../../../assets/images/battlepass/bronze.png";
import battlePassSilver from "../../../assets/images/battlepass/silver.png";
import battlePassGold from "../../../assets/images/battlepass/gold.png";
import IonIcon from "@reacticons/ionicons";
import BtnPurple from "@/components/button/BtnPurple";

type Props = {};

function Battlepass({}: Props) {
  return (
    <section className="w-screen  flex flex-col md:flex-row lg:justify-start items-center justify-center relative bg-gradient-to-b from-[#060322] to-[#1d1c3d] text-white  py-20 overflow-hidden">
      <Image
        src={
          "https://www.eva.gg/static/media/battlepass-group-background.edae1b07.webp"
        }
        alt={""}
        width={1920}
        height={905}
        className="absolute hidden md:flex z-0 h-full"
      />
      <div className="w-full lg:w-1/3 flex flex-col items-center  gap-2 lg:pl-10 ">
        <div className="relative w-60">
          <Image src={battlePassMain} alt={""} className="" />
        </div>
        <div className="flex flex-col items-center justify-center text-center uppercase text-3xl font-bold  -translate-y-10">
          <h2 className="text-6xl">BattlePass</h2>
          <p>Découvrir nos 3 nouvelles offres</p>
        </div>
        <div className="flex items-center justify-evenly md:justify-center md:gap-10 relative w-full ">
          <div className="flex flex-col items-center justify-center relative font-bold uppercase ">
            <Image src={battlePassBronze} alt={""} className="w-28" />
            <h3 className="">battlepass</h3>
            <p className="text-2xl">essentiel</p>
          </div>
          <div className="flex flex-col items-center justify-center relative font-bold uppercase ">
            <Image src={battlePassSilver} alt={""} className="w-28" />
            <h3 className="">battlepass</h3>
            <p className="text-2xl">plus</p>
          </div>
          <div className="flex flex-col items-center justify-center relative font-bold uppercase ">
            <Image src={battlePassGold} alt={""} className="w-28" />
            <h3 className="">battlepass</h3>
            <p className="text-2xl">ultra</p>
          </div>
        </div>
        <BtnPurple
            content={"Voir plus"}
            href={"/battlepass"}
            className={"w-1/2 md:w-1/3 self-center hidden md:flex my-6 z-10"}
          />
      </div>

      <div className="flex flex-col items-start justify-center gap-4 py-10 px-4 w-full lg:w-[500px] lg:ml-10  z-10 ">
        <div className="flex items-center justify-start gap-4 text-2xl  w-full bg-[#0c111d]  p-2 px-4 h-28">
          <span className="border-r-2 pr-4">
            <IonIcon name="shield" size="large" />
          </span>
          <div className="flex flex-col">
            <h3>À partir de</h3>
            <p>49.00 €</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4 text-2xl  w-full bg-[#0c111d]  p-2 px-4 h-28">
          <span className="border-r-2 pr-4">
            <IonIcon name="pricetags-outline" size="large" />
          </span>
          <div>
            <h3>Avantages et tarifs exclusifs</h3>
            <p></p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4 text-2xl  w-full bg-[#0c111d]  p-2 px-4 h-28">
          <span className="border-r-2 pr-4">
            <IonIcon name="location-outline" size="large" />
          </span>
          <div className="flex flex-col">
            <h3>jouer dans les arènes enf rance et belgique</h3>
            <p></p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4 text-2xl  w-full bg-[#0c111d]  p-2 px-4 h-28">
          <span className="border-r-2 pr-4">
            <IonIcon name="glasses-outline" size="large" />
          </span>
          <div className="flex flex-col">
            <h3>jusqu&apos;à</h3>
            <p>
              <span className="text-4xl font-bold">16</span> sessions de jeu par
              mois
            </p>
          </div>
        </div>
        <BtnPurple
          content={"Voir plus"}
          href={"/battlepass"}
          className={"w-1/2 md:w-1/3 self-center md:hidden"}
        />
      </div>
    </section>
  );
}

export default Battlepass;
