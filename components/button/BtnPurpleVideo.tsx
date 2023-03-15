import IonIcon from "@reacticons/ionicons";
import React, { useState } from "react";

type Props = { content: string; className?: string };

function BtnPurpleVideo({ content, className }: Props) {
  const [toggle, setToggle] = useState<Boolean>(false);

  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className={`p-2 bg-[#5d46d3] text-white  before:content-[""] before:w-2 before:h-2 before:border-t-2 before:border-l-2 after:content-[""] after:w-2 after:h-2 after:border-b-2 after:border-r-2 flex items-center justify-between gap-2 before:self-start after:self-end font-semibold ${className}`}
      >
        <span>
          <IonIcon name="play-circle-outline" size="large" />
        </span>
        {content}
      </button>
      <div
        className={`bg-black/80 w-screen h-screen top-0 left-0 fixed  duration-300 flex items-center justify-center ${
          toggle ? " scale-100 z-10 flex" : "scale-0 -z-10"
        }`}
      >
        <button onClick={()=>{setToggle(!toggle)}} className='fixed top-28 '><IonIcon name='close' size='large'/></button>
        <iframe  src={`https://www.youtube.com/embed/blIsKcLWF5w?${toggle ? 'autoplay=1' :''}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  className={`absolute -z-10 aspect-video w-80 md:w-[500px] ${toggle? 'flex': 'hidden'}`}/>
      </div>
    </>
  );
}

export default BtnPurpleVideo;
