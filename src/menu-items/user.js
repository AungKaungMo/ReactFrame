// assets
import { IconKey } from "@tabler/icons";
import { FaUserCog } from "react-icons/fa";
// constant
const icons = {
  FaUserCog,
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const users = {
  id: "users",
  title: "Users",
  // caption: 'Pages Caption',
  type: "group",
  children: [
    {
      id: "user",
      title: "User",
      type: "collapse",
      icon: icons.FaUserCog,

      children: [
        {
          id: "userList",
          title: "User List",
          type: "item",
          url: "/user-management/user-list",
        },
        {
          id: "roleList",
          title: "Role List",
          type: "item",
          url: "/user-management/role-list",
        },
        {
          id: "permissionList",
          title: "Permission List",
          type: "item",
          url: "/user-management/permission-list",
        },
      ],
    },
  ],
};

export default users;
