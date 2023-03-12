import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import Link from "next/link";
import Language from "../language/Language";
import Socials from "../socials/Socials";
import Connection from "../connection/Connection";

type Props = {};

function Navigation({}: Props) {
  const [toggle, setToggle] = useState<Boolean>(false);

  const menuMobile = [
    { name: "Accueil", icon: "home-outline", href: "/" },
    { name: "Jeux", icon: "game-controller-outline", href: "#" },
    { name: "Réserver", icon: "calendar-outline", href: "/oujouer" },
    { name: "Battle Pass", icon: "shield-outline", href: "/battlepass" },
  ];

  const popupMobilePartOne = [
    { name: "Salles", icon: "", href: "/oujouer" },
    { name: "Tarifs", icon: "", href: "/tarifs" },
    { name: "Battle Pass", icon: "shield-outline", href: "/battlepass" },
    { name: "Carte cadeau", icon: "", href: "/cartecadeau" },
    { name: "Privatisation", icon: "", href: "#" },
    { name: "Coupe de france", icon: "", href: "/coupedefrance" },
  ];

  const popupMobilePartTwo = [
    { name: "Franchise", icon: "", href: "#" },
    { name: "Contactez-nous", icon: "", href: "nouscontacter" },
    { name: "Carrière", icon: "", href: "/jobs" },
    { name: "Consulter les conditions générales", icon: "", href: "#" },
  ];

  return (
    <>
      <nav className="w-full fixed bottom-0 bg-[#0c0c10] px-2 pb-1 flex text-white gap-6 items-center justify-center md:hidden">
        <ul className="flex items-center justify-center gap-6 text-white relative h-16 ">
          {menuMobile.map((item, i) => (
            <li key={i} className={`z-10  ${i === 2 ? "" : ""} `}>
              <Link
                href={item.href}
                className="text-sm flex flex-col items-center  "
              >
                <span
                  className={` ${
                    i === 2
                      ? " -translate-y-6 bg-[#5d46d3]  flex items-center justify-center rounded-full text-2xl p-4"
                      : "text-lg"
                  }`}
                >
                  <IonIcon name={item.icon} />
                </span>
                <h3 className={`${i === 2 ? "-translate-y-3.5" : ""}`}>
                  {item.name}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className="flex flex-col items-center justify-center text-sm "
        >
          <span className="text-lg">
            <IonIcon name="list-outline" />
          </span>
          <span>Plus</span>
        </button>
        <div
          className={`px-4 py-8 h-screen w-screen absolute -translate-y-[45vh] z-50 flex flex-col items-center justify-center bg-[#0c0c10] text-white duration-500 gap-8 ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className="self-end "
          >
            <IonIcon name="close" size="large" />
          </button>{" "}
          <Connection/>
          <nav className="flex flex-col gap-8 w-full h-full uppercase ">
            <ul className="w-full">
              {popupMobilePartOne.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className="font-bold text-2xl"
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <ul className="w-full">
              {popupMobilePartTwo.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className="font-semibold"
                >
                  <Link href={item.href}>{item.name}</Link>{" "}
                </li>
              ))}
            </ul>
            <Language/>
            <Socials/>
          </nav>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
