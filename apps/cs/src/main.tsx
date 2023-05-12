import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { routes } from './routers';
import './styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const htmlElement = document.getElementById('root') as HTMLElement;
const root = createRoot(htmlElement);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>
);
