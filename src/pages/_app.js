import { store } from '@/redux/store'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return <SessionProvider session={pageProps.session}>
    <Provider store={store}>
      <NextNProgress />
      <Toaster position='top-right' />
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  </SessionProvider>
}
