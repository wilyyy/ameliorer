import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Ameliorer - English to French Translation</title>
         </Head>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
