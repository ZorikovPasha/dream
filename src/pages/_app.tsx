import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store.ts'
import { Layout } from '../App'
import '../assets/css/app-project.css'
import Head from 'next/head'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
  <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>

    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    
    </>
  )
}
