import GameCard from "@/components/card/GameCard";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

function Games({}: Props) {

  const [translateX, setTranslateX] = useState<string>('')
  const [index, setIndex] = useState<number>(0)

  const translateTo = (index:number) =>{ 

    let translateX = '-translate-x-'+(index * 72).toString()
    setTranslateX(translateX)
  }


  const games = [
    {
      name: "after-h battel arena",
      src: "https://www.eva.gg/static/media/AfterHBattleArena.0685df78.webp",
      content: "pvp fps 2-10 joueurs",
    },
    {
      name: "after-h zombies",
      src: "https://www.eva.gg/static/media/AfterHZombies.a250d563.webp",
      content: "coop fps 2-8 joueurs",
    },
  ];

  return (
    <section className="w-screen flex flex-col items-center justify-center relative bg-[#1d1c2b]  text-white gap-8 py-20 px-12" id="games">
      <Image
        src={
          "https://www.eva.gg/static/media/alpha-white-gradient.08f36171.svg"
        }
        alt={""}
        width={1044}
        height={1104}
        className=" absolute h-full py-20 z-0"
      />
      <h2 className="font-bold uppercase text-5xl">Nos Jeux</h2>
      <div className="w-screen overflow-scroll scrollbar-none">
        <div className={` flex lg:justify-center gap-4 px-12 duration-500 ${translateX}`}>
          {games.map((item, i) => (
            <GameCard
              src={item.src}
              title={item.name}
              content={item.content}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 h-6">
        {games.map((item, i) => (
          <div
          onClick={()=>{translateTo(i);setIndex(i)}}
            className={` border-2 rounded-full cursor-pointer duration-500 z-10 lg:hidden ${i == index ? 'w-2 h-2 bg-slate-600': 'w-4 h-4'}`}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Games;
