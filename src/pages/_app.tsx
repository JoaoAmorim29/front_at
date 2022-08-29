import type { AppProps } from 'next/app'
import AppProvider from '../context'
import { GlobalStyles } from '../styles/global'
import '../styles/tailwind.css'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <GlobalStyles />
      <ToastContainer></ToastContainer>
    </>

  )
}

export default MyApp
