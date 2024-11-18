import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import { Suspense, lazy } from "react";

// Lazy load the pages

const Loader = lazy(() => import("../components/Loader"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader/>}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loader/>}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<Loader/>}>
            <RegisterPage />
          </Suspense>
        ),
      },
    ],
  },
]);
