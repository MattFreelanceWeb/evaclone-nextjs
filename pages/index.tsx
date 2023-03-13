import Head from 'next/head'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt - EVA clone</title>
        <meta name="description" content="clone du site https://www.eva.gg/fr/ afin de montrer de possible améliorations front et promouvoir ce e-sport" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='pt-0 md:pt-32 xl:pt-24'>
        hello world
      </main>
    </>
  )
}
