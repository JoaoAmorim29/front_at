import type { AppProps } from 'next/app'
import AppProvider from '../context'
import { GlobalStyles } from '../styles/global'
import '../styles/tailwind.css'
import { Bounce, Flip, Slide, ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <GlobalStyles />
      {/* Limita o número de notificações na tela */}
      <ToastContainer 
        limit={3} transition={Bounce}
        theme='colored'
        pauseOnFocusLoss={false}
        ></ToastContainer>
    </>

  )
}

export default MyApp
