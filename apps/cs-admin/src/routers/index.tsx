import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthLayout } from "../layout/auth";

const LoginPages = lazy(() => import("../pages/auth/login"));

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
]);
