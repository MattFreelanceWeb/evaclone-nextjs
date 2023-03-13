import IonIcon from "@reacticons/ionicons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BtnReserver from "../button/BtnReserver";
import Connection from "../connection/Connection";
import Language from "../language/Language";

type Props = {};

function NavigationDesktop({}: Props) {
  const menuDesktop = [
    { name: "Salles", icon: "home-outline", href: "/oujouer" },
    { name: "Nos Jeux", icon: "home-outline", href: "#" },
    { name: "Battle Pass", icon: "home-outline", href: "/battlepass" },
    { name: "Tarifs", icon: "home-outline", href: "/tarifs" },
    { name: "Carte Cadeau", icon: "gift", href: "/cartecadeau" },
    { name: "Privatisation", icon: "home-outline", href: "/tarifs" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-screen hidden py-4 md:flex flex-col xl:flex-row items-center justify-between px-4 bg-[#0c0c10] text-white font-semibold text-sm uppercase  border-b-2 border-b-white">

      <ul className="flex items-center justify-center gap-4 ">
      <Link href={'/'} className="relative">
        <Image src={"https://www.eva.gg/static/media/EVA-header-icon.4defa039.svg"} alt={""} width={100} height={100}/>
      </Link>
        {menuDesktop.map((item, i) => (
          <li key={i}>
            
            <Link href={item.href} className='flex items-center justify-center gap-1'> {i===4?  <span className="text-xl"><IonIcon name={item.icon} /></span> : ''}{item.name}</Link>{" "}
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center ">
        <li className="border-r-2 px-2">
            <Link href={'#'}>Franchise</Link>
        </li>
        <li className="border-r-2 px-2">
            <Language/>
        </li>
        <li className="px-2">
            <Connection/>
        </li>
        <li className="px-2">
            <BtnReserver/>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationDesktop;
