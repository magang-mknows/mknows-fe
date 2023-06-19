import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthLayout } from "../layout/auth/auth";
import { BaseLayout } from "../layout/base";

const LoginPages = lazy(() => import("../pages/auth/login"));
const RequestQuotaPages = lazy(() => import("../pages/request-quota/"));
const ChartQuotaPages = lazy(() => import("../pages/chart-quota"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback="Loading">
            <LoginPages />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <BaseLayout />,
    children: [
      {
        path: "/admin/quota-request",
        element: (
          <Suspense fallback="Loading">
            <RequestQuotaPages />
          </Suspense>
        ),
      },
      {
        path: "/admin/chart-quota",
        element: (
          <Suspense fallback="Loading">
            <ChartQuotaPages />
          </Suspense>
        ),
      },
    ],
  },
]);
