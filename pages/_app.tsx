import Footer from '@/components/footer/Footer'
import NavigationDesktop from '@/components/navigation/NavigationDesktop'
import NavigationMobile from '@/components/navigation/NavigationMobile'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavigationDesktop/>
    <NavigationMobile/>
      <Component {...pageProps} />
    <Footer/>
    </>
  )
}
