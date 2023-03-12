import IonIcon from '@reacticons/ionicons'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Connection({}: Props) {
  return (
    <Link
    href=""
    className=" self-start flex items-center gap-2 font-bold uppercase"
  >
    <span className=" bg-[#5d46d3] w-9 h-9 rounded-full flex items-center justify-center">
      <IonIcon name="person-outline" />
    </span>
    <p>se connecter</p>
  </Link>
  )
}

export default Connection