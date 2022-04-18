import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Meta } from '../src/components/meta/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta></Meta>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
