import Link from "next/link";
import React from "react";
import Socials from '@/components/socials/Socials'
import SelectInput from "../button/SelectInput";

type Props = {};

function Footer({}: Props) {
  const date = new Date()
  let year =date.getFullYear()

  const footerColOne = [
    { name: "Réserver", icon: "", href: "/oujouer" },
    { name: "Où jouer ?", icon: "", href: "/oujouer" },
    { name: "Tarifs", icon: "", href: "/tarifs" },
  ];

  const footerColTwo = [
    { name: "Privatisation", icon: "", href: "/tarifs" },
    { name: "Carte cadeau", icon: "", href: "/cartecadeau" },
    { name: "Ouvrir une franchise", icon: "", href: "/franchise" },
    { name: "Coupe de France", icon: "", href: "/coupedefrance" },
  ];

  const footerColThree = [
    { name: "Nos jeux", icon: "", href: "#" },
    { name: "After-H Battle Arena", icon: "", href: "#" },
    { name: "After-H Battle Zombies", icon: "", href: "#" },
  ];

  const footerColFour = [
    { name: "Videos", icon: "", href: "#" },
    { name: "Contactez-nous", icon: "", href: "/nouscontacter" },
    { name: "Carrière", icon: "", href: "/jobs" },
  ];

  const footerColFive = [
    { name: "Mesures Covid", icon: "", href: "#" },
    { name: "CGV-CGU", icon: "", href: "#" },
    { name: "Politique de confidentialité", icon: "", href: "#" },
    { name: "Mentions légales", icon: "", href: "#" },
    { name: "Cookies", icon: "", href: "#" },
  ];

  return (
    <footer className="w-screen flex flex-col items-center justify-center gap-10 relative pb-28 lg:pb-12 px-12 pt-12 bg-black/95 text-white">

      <div className="w-full flex flex-col items-center gap-6 md:text-2xl before:content-[''] before:w-10 before:h-10 before:border-t-2 before:border-l-2 before:self-start after:content-[''] after:w-10 after:h-10 after:border-b-2 after:border-r-2 after:self-end">
        <h2 className="text-4xl uppercase font-bold">Suivez-nous</h2>
        <Socials/>
      </div>
      
      <div className="w-full flex flex-col md:flex-row items-start  justify-center gap-x-20 gap-y-10 flex-wrap">
        <ul className="flex flex-col items-start justify-center gap-4">
          {footerColOne.map((item, i) => (
            <li key={i}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col items-start justify-center gap-4">
          {footerColTwo.map((item, i) => (
            <li key={i}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col items-start justify-center gap-4">
          {footerColThree.map((item, i) => (
            <li key={i}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col items-start justify-center gap-4">
          {footerColFour.map((item, i) => (
            <li key={i}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col items-start justify-center gap-4">
          {footerColFive.map((item, i) => (
            <li key={i}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 ">
        <SelectInput content={[{name:'Français'},{name:'Anglais'}]} iconName={'language-outline'} placeHolder={'Choisir une Langue'}/>
        <SelectInput content={[{name:'Europe'},{name:'U.S.A'}]} iconName={'flag-outline'} placeHolder={'Choisir une Région'}/>
      </div>

      <div className="flex items-start text-center gap-2">
           <span className="border-[2px] rounded-full px-1 text-sm">C</span>  {year} - EVA Esports Virtual Arenas <br />Tous droits réservés <br /> v5.4.0 (789d28b)
      </div>
    </footer>
  );
}

export default Footer;
