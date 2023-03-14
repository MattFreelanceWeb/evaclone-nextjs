import IonIcon from '@reacticons/ionicons';
import React, { useState } from 'react'

type Props = {content:any[], iconName:string, placeHolder:string}

function SelectInput({content, iconName, placeHolder}: Props) {
    const [toggle, setToggle] = useState<boolean>(false);
    const [chooseContent, setChooseContent] = useState<string | undefined>();

  return (
    <div className="relative">
    <div
      className={`absolute w-full border-2 -translate-y-full  overflow-y-auto bg-[#0c0c10] text-xl  py-4 uppercase ${
        toggle ? "flex flex-col gap-4  px-4" : "hidden"
      }`}
    >
      <ul className="flex flex-col gap-2 ">
        {content.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              setChooseContent(item.name );
              setToggle(!toggle)
            }}
            className='cursor-pointer'
          >
            {item.name}
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
      <IonIcon name={iconName} size="large" />
      <input
        type="text"
        placeholder={chooseContent ? chooseContent : placeHolder}
        value={chooseContent}
        onChange={(e) => {
          setChooseContent(e.target.value);
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
  )
}

export default SelectInput