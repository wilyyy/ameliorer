import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Ameliorer - English to French Translation</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,600&family=Raleway:wght@200;400;600;700&display=swap"
               rel="stylesheet"
            />
         </Head>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
