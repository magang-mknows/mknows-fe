// import './styles.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Montserrat } from 'next/font/google';

const queryClient = new QueryClient();

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
});
function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <RecoilRoot>
          <main className={montserrat.className}>
            <Component {...pageProps} />
          </main>
        </RecoilRoot>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default CustomApp;
