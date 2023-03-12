import Footer from '@/components/footer/Footer'
import NavigationMobile from '@/components/navigation/NavigationMobile'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavigationMobile/>
      <Component {...pageProps} />
    <Footer/>
    </>
  )
}
