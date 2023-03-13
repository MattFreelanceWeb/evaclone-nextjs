import IonIcon from "@reacticons/ionicons";
import { link } from "fs";
import React, { useState } from "react";

type Props = {};

function Villes({}: Props) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [town, setTown] = useState<string | undefined>();

  const cityEurope = [
    { name: "Beauchamp", cp: 95 },
    { name: "Bordeaux-lac", cp: 33 },
    { name: "Bourgoin-jallieu", cp: 38 },
    { name: "Genk", cp: 3600 },
    { name: "Grenoble", cp: 38 },
    { name: "La réunion", cp: 97 },
    { name: "La rochelle", cp: 17 },
    { name: "le havre", cp: 76 },
    { name: "les mureaux", cp: 78 },
    { name: "liège", cp: 4470 },
    { name: "lille", cp: 59 },
    { name: "lyon nord", cp: 69 },
    { name: "maurepas", cp: 78 },
    { name: "nantes", cp: 44 },
    { name: "poitiers", cp: 86 },
    { name: "reims", cp: 51 },
    { name: "rouen", cp: 76 },
    { name: "strasbourg", cp: 67 },
    { name: "toulouse", cp: 31 },
    { name: "tours", cp: 95 },
  ];

  const cityUs = [{ name: "flower mound", cp: "tx" }];

  return (
    <div className="relative">
      <div
        className={`absolute w-full border-2 -translate-y-full h-[300px] overflow-y-auto bg-[#0c0c10] text-xl  py-4 uppercase ${
          toggle ? "flex flex-col gap-4  px-4" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2 ">
          <h2 className=" text-base text-gray-500">Europe</h2>
          {cityEurope.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                setTown(item.name +'-'+item.cp );
                setToggle(!toggle)
              }}
              className='cursor-pointer'
            >
              {item.name}-{item.cp}
            </li>
          ))}
        </ul>
        <ul>
          <h2 className="text-base text-gray-500">U.S.A</h2>
          {cityUs.map((item, i) => (
            <li
              key={i}
              onClick={(e) => {
                setTown(item.name +'-'+item.cp );
                setToggle(!toggle)
              }}
              className='cursor-pointer'
            >
              {item.name}-{item.cp}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="border-2 border-white uppercase p-2 flex items-center justify-center gap-4 "
      >
        <IonIcon name="triangle-outline" size="large" />
        <input
          type="text"
          placeholder={town ? town : "choisir une arène"}
          value={town}
          onChange={(e) => {
            setTown(e.target.value);
          }}
          className="font-bold  border-r-2 border-white w-full md:w-[300px]  flex items-start bg-transparent uppercase"
        />
        <span
          className={`duration-500 text-2xl ${
            toggle ? "rotate-90" : "rotate-0"
          }`}
        >
          <IonIcon name="chevron-forward-outline" />
        </span>
      </button>
    </div>
  );
}

export default Villes;
