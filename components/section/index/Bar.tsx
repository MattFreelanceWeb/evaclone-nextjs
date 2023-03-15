import Image from 'next/image'
import React from 'react'
import Pizza from '@/assets/images/eat/pizza.jpg'

type Props = {}

function Bar({}: Props) {
  return (
    <section className="w-screen h-screen flex items-center justify-center relative text-white">
      <Image src={Pizza} alt={''} width={1920} height={1003}  className='absolute h-full w-full object-cover' />
      <div className="w-full lg:w-1/2  relative flex flex-col items-start justify-center gap-8 p-12 text-xl bg-black/80 ">
      <Image src={'https://www.eva.gg/static/media/lines-2.48fbb854.svg'} alt={''} width={82} height={208} className='absolute bottom-2 left-2 z-20'/>
      <Image src={'https://www.eva.gg/static/media/lines-7.6be4c5cc.svg'} alt={''} width={82} height={208} className='absolute top-4 right-2 lg:right-10 z-20 -rotate-90'/>
        <h2 className="uppercase text-4xl font-bold ">PLAY. DRINK. EAT. REPEAT</h2>
        <p>
        Que vous soyez joueur régulier ou bien de passage, sportif ou accompagnateur, EVA vous accueille dans une ambiance conviviale où vous pourrez boire un verre ou déguster nos snacks avec vos amis tout en suivant les parties en cours.
        </p>
        <p>
        Devenir le champion de l&apos;Arène c&apos;est aussi savoir prendre des forces !
        </p>
      </div>
    </section>
  )
}

export default Bar