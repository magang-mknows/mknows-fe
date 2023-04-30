// import './styles.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Source_Sans_Pro } from 'next/font/google';
import 'react-alice-carousel/lib/alice-carousel.css';

const queryClient = new QueryClient();

const source_sans_pro = Source_Sans_Pro({
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
          <main className={source_sans_pro.className}>
            <Component {...pageProps} />
          </main>
        </RecoilRoot>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default CustomApp;
