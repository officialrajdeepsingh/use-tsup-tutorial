import '@/styles/globals.css'
import "node_modules/tsup-tutorial/dist/tailwind.css";
import type { AppProps } from 'next/app'
import { Header } from 'tsup-tutorial';
import { Footer } from 'tsup-tutorial';

export default function App({ Component, pageProps }: AppProps) {
  return <>
   <Header
        logo="Tsup Tutorial"
        navItem={[
          { name: "Home", url: "/use-tsup-tutorial/" },
          { name: "About", url: "/use-tsup-tutorial/about" },
          { name: "Contact", url: "/use-tsup-tutorial/contact" }
        ]}
      />
  <div className="mx-auto w-3/6 p-5 my-3">

  <Component {...pageProps} />
  </div>
  <Footer copyrightText={"Copy Right by Rajdeep Singh"} />

  </> 
}
