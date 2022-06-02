import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <div className="font-raleway">
         <Head>
            <title>Ameliorer | To Improve</title>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <meta name="title" content="Ameliorer - To Improve" />
            <meta
               name="description"
               content="Learn English to French translations with flashcards using SM-2 spaced repetition algorithm"
            />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,600&family=Raleway:wght@200;400;600;700&display=swap"
               rel="stylesheet"
            />
         </Head>
         <div className="text-white font-playfair">
            <Component {...pageProps} />
         </div>
      </div>
   );
}

export default MyApp;
