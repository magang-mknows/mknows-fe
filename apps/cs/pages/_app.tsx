import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Credit Scoring</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
