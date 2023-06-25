import '@/styles/globals.css'
import "node_modules/tsup-tutorial/dist/tailwind.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
