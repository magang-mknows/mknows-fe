import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Spinner from '../components/atoms/loading/spinner';
import { AuthLayout } from '../layouts/auth';
import { BaseLayout } from '../layouts/base';
import { ErrorLogin } from '../modules/auth/login/error-login';
import { ErrorModules } from '../modules/common/errorpage';
import { ErrorHome } from '../modules/home/error';
import ChartReport from '../modules/report/grafik';
import { LoadingGrafik } from '../modules/report/grafik/loading';
import { LoadingReport } from '../modules/report/loading';
import ReportModules from '../modules/report/report';
import { LoadingUser } from '../modules/user/loading';
import ReportPages from '../pages/report';

const LoginPages = lazy(() => import('../pages/auth/login'));
const HomePages = lazy(() => import('../pages/home'));
const UserPages = lazy(() => import('../pages/user'));
const AddDataPages = lazy(() => import('../pages/user/add-data'));
const RequestPages = lazy(() => import('../pages/request'));
const QuotaPages = lazy(() => import('../pages/quota'));

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<ErrorLogin />}>
            <LoginPages />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<ErrorHome />}>
        <BaseLayout />
      </Suspense>
    ),
    errorElement: <ErrorModules />,
    children: [
      {
        path: '/dashboard/home',
        element: (
          <Suspense fallback={<ErrorHome />}>
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
          <Suspense fallback={<LoadingUser />}>
            <AddDataPages />
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
        path: '/dashboard/report',
        element: (
          <Suspense fallback={<Spinner />}>
            <ReportPages />
          </Suspense>
        ),
        children: [
          {
            path: '/dashboard/report',
            element: (
              <Suspense fallback={<LoadingReport />}>
                <ReportModules />
              </Suspense>
            ),
          },
          {
            path: '/dashboard/report/grafik',
            element: (
              <Suspense fallback={<LoadingGrafik />}>
                <ChartReport />
              </Suspense>
            ),
          },
        ],
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
