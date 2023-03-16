import SearchInput from "@/components/button/SearchInput";
import SelectInput from "@/components/button/SelectInput";
import IonIcon from "@reacticons/ionicons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

function ArenaSelect({}: Props) {
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

  const [region, setRegion] = useState<string>("Europe");
  const [searchContent, setSearchContent] = useState<string>("");
  const [cityArray, setCityArray] = useState<any[]>([]);

  useEffect(() => {
    {
      region === "Europe" ? setCityArray(cityEurope) : setCityArray(cityUs);
    }
    if(searchContent !== ""){
      let newCityArray = cityArray.filter((city) => city.name.toLowerCase().startsWith(searchContent.toLocaleLowerCase()) )
      setCityArray(newCityArray)
    }
  }, [region,searchContent]);

  return (
    <section className="flex flex-col  justify-start  absolute top-0 left-0 z-50 bg-black text-white  w-screen min-h-screen">
      <div className="flex items-center justify-start gap-8 p-12 pb-2 w-full border-b-2 border-white">
        <Link className=" " href={"/"}>
          <IonIcon name="arrow-back-outline" size="large" />
        </Link>
        <div className=" flex-grow flex flex-col items-start justify-center">
          <h1 className="text-4xl font-bold">Choisissez une arène</h1>
          <h2 className="font-semibold text-gray-400">{region}</h2>
        </div>
        <Link href={"/"} className=" flex-grow flex items-center justify-end ">
          <IonIcon name="close" size="large" />
        </Link>
      </div>
      <div className="self-center flex flex-col gap-2 px-12 py-4 ">
        <h3 className="font-bold uppercase text-center">
          trouver une arène dans un autre pays
        </h3>
        <SelectInput
          content={[{ name: "Europe" }, { name: "U.S.A" }]}
          iconName={"flag-outline"}
          placeHolder={"Choisir une Région"}
          Region={setRegion}
        />
      </div>
      <div className="self-center flex flex-col gap-2 px-12 py-4 w-full md:w-[500px]">
        <SearchInput content={searchContent} updateContent={setSearchContent} />
      </div>

      <div className="flex flex-col p-12 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4">
        {cityArray.map((item, i) => (
          <Link
            href={""}
            key={i}
            className="border-b-2 border-gray-400 flex items-center justify-between py-4 md:flex-col md:items-start"
          >
            <h3 className="text-2xl capitalize">
              {item.name} - {item.cp}
            </h3>
            <button className="flex items-center justify-center gap-1 font-semibold text-gray-400">
              Détails <IonIcon name="chevron-forward-outline" />
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ArenaSelect;
