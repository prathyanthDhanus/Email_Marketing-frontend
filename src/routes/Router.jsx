import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import { Suspense,lazy } from "react";

// Lazy load the pages

const Loader = lazy(()=>import("../components/Loader"));
const LandingPage = lazy(()=>import("../pages/LandingPage"));


export const router = createBrowserRouter([
  {element:<Layout/>,children:[{
  path:"/",element:(
    <Suspense fallback={Loader}>
    <LandingPage/>
    </Suspense>
  ),
  },

]}
])