import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../layouts/auth';
import { BaseLayout } from '../layouts/base';
import { ErrorModules } from '../modules/common/errorpage';
import Spinner from '../components/atoms/loading/spinner';

const LoginPages = lazy(() => import('../pages/auth/login'));
const HomePages = lazy(() => import('../pages/home'));
const UserPages = lazy(() => import('../pages/user'));
const AddDataPages = lazy(() => import('../pages/user/add-data'));
const EditDataPages = lazy(() => import('../pages/user/edit-data'));
const RequestPages = lazy(() => import('../pages/request'));
const GetRequest = lazy(() => import('../pages/request/get-request'));
const ReportPages = lazy(() => import('../pages/report'));
const QuotaPages = lazy(() => import('../pages/quota'));

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Spinner />}>
            <LoginPages />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<Spinner />}>
        <BaseLayout />
      </Suspense>
    ),
    errorElement: <ErrorModules />,
    children: [
      {
        path: '/dashboard/home',
        element: (
          <Suspense fallback={<Spinner />}>
            <HomePages />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/user',
        element: (
          <Suspense fallback={<Spinner />}>
            <UserPages />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/user/add-data',
        element: (
          <Suspense fallback={<Spinner />}>
            <AddDataPages />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/user/edit-data',
        element: (
          <Suspense fallback={<Spinner />}>
            <EditDataPages />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/user/detail-data',
        element: (
          <Suspense fallback={<Spinner />}>
            <EditDataPages />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/request',
        element: (
          <Suspense fallback={<Spinner />}>
            <RequestPages />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/get-request',
        element: (
          <Suspense fallback={<Spinner />}>
            <GetRequest />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/report',
        element: (
          <Suspense fallback={<Spinner />}>
            <ReportPages />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/quota',
        element: (
          <Suspense fallback={<Spinner />}>
            <QuotaPages />
          </Suspense>
        ),
      },
    ],
  },
]);
