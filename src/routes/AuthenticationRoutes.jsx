import { lazy } from "react";

// project imports
import Loadable from "@/component/Loadable";
import MinimalLayout from "@/layout/MinimalLayout";
import { Navigate } from "react-router-dom";

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import("@/views/Auth/Login")));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      index: true,
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <AuthLogin />,
    },
  ],
};

export default AuthenticationRoutes;
