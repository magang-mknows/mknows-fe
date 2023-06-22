import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Spinner } from "@mknows-frontend-services/components/atoms";
import { AuthLayout } from "../layouts/auth";
import { BaseLayout } from "../layouts/base";
import { ErrorModules } from "../modules/common/errorpage";
import { Guest, Protected } from "../modules/auth/middleware";

const LoginPages = lazy(() => import("../pages/auth/login"));
const HomePages = lazy(() => import("../pages/home"));
const UserPages = lazy(() => import("../pages/user"));
const AddDataPages = lazy(() => import("../pages/user/add-data"));
const EditDataPages = lazy(() => import("../pages/user/edit-data"));
const RequestPages = lazy(() => import("../pages/request"));
const ChoiceFeature = lazy(() => import("../modules/request/feature/choice-feature"));
const CheckResultModule = lazy(() => import("../modules/request/check-result"));
const ReportPage = lazy(() => import("../pages/report"));
const QuotaPages = lazy(() => import("../pages/quota"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Guest>
        <AuthLayout />
      </Guest>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <LoginPages />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Protected>
        <Suspense fallback={<Spinner />}>
          <BaseLayout />
        </Suspense>
      </Protected>
    ),
    errorElement: <ErrorModules />,
    children: [
      {
        path: "/dashboard/home",
        element: (
          <Suspense fallback={<Spinner />}>
            <HomePages />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/user",
        element: (
          <Suspense fallback={<Spinner />}>
            <UserPages />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/user/add-data",
        element: (
          <Suspense fallback={<Spinner />}>
            <AddDataPages />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/user/edit-data",
        element: (
          <Suspense fallback={<Spinner />}>
            <EditDataPages />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/user/detail-data",
        element: (
          <Suspense fallback={<Spinner />}>
            <EditDataPages />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/request/check-result",
        element: (
          <Suspense fallback={<Spinner />}>
            <CheckResultModule />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/request/choice-feature",
        element: (
          <Suspense fallback={<Spinner />}>
            <ChoiceFeature />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/request",
        element: (
          <Suspense fallback={<Spinner />}>
            <RequestPages />
          </Suspense>
        ),
      },

      {
        path: "/dashboard/report",
        element: (
          <Suspense fallback={<Spinner />}>
            <ReportPage />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/quota",
        element: (
          <Suspense fallback={<Spinner />}>
            <QuotaPages />
          </Suspense>
        ),
      },
    ],
  },
]);
