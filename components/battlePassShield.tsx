import Image from 'next/image'
import React from 'react'

type Props = {src: string  }

function battlePassShield({src}: Props) {
  return (
    <div className="flex flex-col items-center justify-center relative font-bold uppercase ">
    <Image src={src} alt={""} className="w-28" />
    <h3 className="">battlepass</h3>
    <p className="text-2xl">essentiel</p>
  </div>
  )
}

export default battlePassShield