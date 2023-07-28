import { store } from '@/redux/store'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return <Provider store={store}>
    <Toaster position='top-right'/>
      {getLayout(<Component {...pageProps} />)}
  </Provider>
}
