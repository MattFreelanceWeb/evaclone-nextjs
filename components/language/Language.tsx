import React from 'react'

type Props = {}

function Language({}: Props) {
  return (
    <select className='bg-black w-12'>
        <option value="FR" className='w-20 absolute'>FR</option>
        <option value="EN" className='w-20'>EN</option>
    </select>
  )
}

export default Language