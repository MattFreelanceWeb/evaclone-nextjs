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
    { name: "Carte Cadeau", icon: "gift-outline", href: "/cartecadeau" },
    { name: "Privatisation", icon: "home-outline", href: "/tarifs" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-screen hidden py-4 md:flex flex-col xl:flex-row items-center justify-around bg-[#0c0c10] text-white text-lg uppercase font-bold border-b-2 border-b-white">

      <ul className="flex items-center justify-center gap-8 ">
      <Link href={'/'} className="relative">
        <Image src={"https://www.eva.gg/static/media/EVA-header-icon.4defa039.svg"} alt={""} width={100} height={100}/>
      </Link>
        {menuDesktop.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>{item.name}</Link>{" "}
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center gap-8 ">
        <li>
            <Link href={'#'}>Franchise</Link>
        </li>
        <li>
            <Language/>
        </li>
        <li>
            <Connection/>
        </li>
        <li>
            <BtnReserver/>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationDesktop;
