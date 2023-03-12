import IonIcon from "@reacticons/ionicons";
import Link from "next/link";
import React from "react";

type Props = {};

function Socials({}: Props) {
  const social = [
    { name: "discord", icon: "logo-discord", href: "" },
    { name: "twtich", icon: "logo-twitch", href: "" },
    { name: "youtube", icon: "logo-youtube", href: "" },
    { name: "facebook", icon: "logo-facebook", href: "" },
    { name: "instagram", icon: "logo-instagram", href: "" },
    { name: "twitter", icon: "logo-twitter", href: "" },
    { name: "tiktok", icon: "logo-tiktok", href: "" },
  ];

  return (
    <ul className="flex items-center justify-center gap-4">
      {social.map((item, i) => (
        <li key={i}>
            <Link href={item.href} >
                <IonIcon name={item.icon} size='large'/>
            </Link>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
