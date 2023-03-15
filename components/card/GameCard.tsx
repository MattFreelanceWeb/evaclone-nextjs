import Image from 'next/image'
import React from 'react'

type Props = {src:any, title:string, content:string}

function GameCard({src,title,content}: Props) {
  return (
    <div className=' w-72  duration-300 flex flex-col items-center gap-5 flex-shrink-0 snap-center rounded-lg bg-black pb-4 z-10 cursor-pointer'>
        <div className='relative '>
            <Image src={src} alt={''}  width={390} height={532} className='rounded-t-lg '/>
        </div>
        <div className='uppercase'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <p className='text-sm font-thin text-gray-500'>{content}</p>
        </div>
        <button className='border-2 px-8 py-2 before:content-[""] before:w-2 before:h-2 before:border-t-2 before:border-l-2 after:content-[""] after:w-2 after:h-2 after:border-b-2 after:border-r-2 flex items-center justify-between gap-2 before:self-start after:self-end after:hover:border-black before:hover:border-black hover:bg-white hover:text-black duration-300 font-bold'>
          plus
        </button>
    </div>
  )
}

export default GameCard