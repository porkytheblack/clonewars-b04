import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../utils/theme'
import CustomGlobalStyles from '../utils/GlobalStyles'
import Layout from '../Layout'
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <CustomGlobalStyles/>
    <Head>
      <title>WorkOS — Your app, Enterprise Ready.</title>
      <meta name="description" content="A clone of the workos.com website by porkytheblack" />
      <link rel="icon" href="/workos32x32.png" sizes='32x32'  />
      <link rel="apple-touch-icon" href="/workos256x256.png" sizes='256x256' />
    </Head>
    <Layout>
    <Component {...pageProps} theme={theme} />
    </Layout>
  </ChakraProvider> 
}

export default MyApp
