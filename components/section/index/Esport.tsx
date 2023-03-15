import BtnPurpleVideo from '@/components/button/BtnPurpleVideo'
import Image from 'next/image'
import React from 'react'

type Props = {}

function Esport({}: Props) {
  return (
    <section className="w-screen  flex flex-col lg:flex-row lg:h-screen items-center justify-center relative bg-black ">
      <Image src={'https://www.eva.gg/static/media/lines-2.48fbb854.svg'} alt={''} width={82} height={208} className='absolute bottom-2 left-2 z-20'/>
      <Image src={'https://www.eva.gg/static/media/lines-7.6be4c5cc.svg'} alt={''} width={82} height={208} className='absolute top-4 right-2 lg:right-10 z-20 -rotate-90'/>

      <div className=' w-full lg:w-1/2 h-full relative '>
        <Image src={'https://www.eva.gg/static/media/Alpha-afterH.d4aad651.webp'} alt={''} width={1821} height={1019} className='object-cover min-h-[432px] h-full'/>
      </div>
      <div className='w-full lg:w-1/2 h-full relative flex flex-col items-center justify-center gap-6 p-12 text-xl text-white'>
        <h2 className='uppercase text-5xl font-bold text-center'>EVA: Le futur de l&apos;esport</h2>
        <p><strong>Nouvelle discipline esportive</strong> , EVA propose une expérience unique au monde d&apos;esport VR.</p>
        <p>De vraies arènes pour de vraies compétitions : <strong>préparez-vous à entrer sur un terrain de 500 m2 et affrontez d&apos;autres joueurs dans cette toute nouvelle ère !</strong> </p>
        <p>Entraînez-vous, montez en compétences pour devenir le champion de l&apos;Arène !</p>
        <BtnPurpleVideo content={'voir la bande annonce'} className='uppercase' />
      </div> 
    </section>
  )
}

export default Esport