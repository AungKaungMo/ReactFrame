import { useRoutes } from "react-router-dom";

// routes
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";

//404 page
import PageNotFound from "../views/PageNotFound";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const isLogin = true;

  return useRoutes([
    isLogin ? MainRoutes : AuthenticationRoutes,
    { path: "*", element: <PageNotFound /> },
  ]);
}
