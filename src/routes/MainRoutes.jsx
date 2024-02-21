import { lazy } from "react";

// project imports
import MainLayout from "@/layout/MainLayout";
import Loadable from "@/component/Loadable";

// DASHBOARD ROUTING
const DashboardDefault = Loadable(
  lazy(() => import("@/views/dashboard/Default"))
);

//USER MANAGEMENT
const UserManagement = Loadable(
  lazy(() => import("@/views/dashboard/UserManagement/User"))
);
const RoleManagement = Loadable(
  lazy(() => import("@/views/dashboard/UserManagement/Role"))
);
const PermissionManagement = Loadable(
  lazy(() => import("@/views/dashboard/UserManagement/Permission"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "/dashboard",
      children: [
        {
          path: "/dashboard",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "/user-management/user-list",
      element: <UserManagement />,
    },
    {
      path: "/user-management/role-list",
      element: <RoleManagement />,
    },
    {
      path: "/user-management/permission-list",
      element: <PermissionManagement />,
    },
  ],
};

export default MainRoutes;
