// import './styles.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Source_Sans_Pro } from 'next/font/google';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Suspense, useLayoutEffect, useState } from 'react';
import { LoadingSpinner } from '@mknows-frontend-services/components/atoms';

const queryClient = new QueryClient();

const source_sans_pro = Source_Sans_Pro({
  weight: '400',
  subsets: ['latin'],
});

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [mount, setMount] = useState(false);
  useLayoutEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return <LoadingSpinner />;
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <RecoilRoot>
          <main className={source_sans_pro.className}>
            <Suspense fallback={<LoadingSpinner />}>
              <Component {...pageProps} />
            </Suspense>
          </main>
        </RecoilRoot>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default CustomApp;
