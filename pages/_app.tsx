import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navigation/>
      <Component {...pageProps} />
    <Footer/>
    </>
  )
}
