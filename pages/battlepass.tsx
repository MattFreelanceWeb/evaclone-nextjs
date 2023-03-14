import Image from 'next/image'
import React from 'react'
import battlePassMain from '@/assets/image/battelpass/main.png'

type Props = {}

function battlepass({}: Props) {
  return (
    <main className='pt-0 md:pt-32 xl:pt-24'>
      <Image src= {battlePassMain} alt= {''}/>
    </main>
  )
}

export default battlepass