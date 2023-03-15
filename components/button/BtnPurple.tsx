import Link from 'next/link'
import React from 'react'

type Props = {content:string ,href:string, className?:string}

function BtnPurple({content,href ,className}: Props) {
  return (
    <Link href={href}  className={`p-2 bg-[#5d46d3] text-white  before:content-[""] before:w-2 before:h-2 before:border-t-2 before:border-l-2 after:content-[""] after:w-2 after:h-2 after:border-b-2 after:border-r-2 flex items-center justify-between gap-2 before:self-start after:self-end font-semibold ${className}`}>
        {content}
    </Link>
  )
}

export default BtnPurple