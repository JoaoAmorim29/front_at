import type { AppProps } from 'next/app'
import AppProvider from '../context'
import { GlobalStyles } from '../styles/global'
import '../styles/tailwind.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <GlobalStyles />
    </>

  )
}

export default MyApp
