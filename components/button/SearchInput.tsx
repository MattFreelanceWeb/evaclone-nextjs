import IonIcon from '@reacticons/ionicons'
import React, { useState } from 'react'

type Props = {content:string , updateContent:Function}

function SearchInput({content, updateContent}: Props) {
 
  return (
    <div className='flex items-center gap-4 bg-[#0c0c10] border-2 p-2 '>
        <IonIcon name='search' size='large' />
        <input type="search" name="" id="" placeholder='rechercher' className="font-bold  border-white w-full  flex items-start bg-transparent uppercase" value={content} onChange={(e)=>{updateContent(e.target.value)}}/>
    </div>
  )
}

export default SearchInput