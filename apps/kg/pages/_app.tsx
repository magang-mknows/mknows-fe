import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to kg!</title>
      </Head>
      <main className="app">
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={session}>
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </SessionProvider>
        </QueryClientProvider>
      </main>
    </>
  );
}

export default CustomApp;
