import 'tailwindcss/tailwind.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import { AppProps } from 'next/app';
import { RecoilEnv, RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Montserrat } from 'next/font/google';
import { Suspense, useEffect, useState } from 'react';
import { LoadingSpinner } from '@mknows-frontend-services/components/atoms';

const queryClient = new QueryClient();

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
});

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return <LoadingSpinner />;
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <RecoilRoot>
          <main className={montserrat.className}>
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
