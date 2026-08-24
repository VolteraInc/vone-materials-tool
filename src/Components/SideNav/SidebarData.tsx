import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

//change to hook to avoir rerendering?
export const SidebarData = [
  {
    title: "Account",
    icon: <AccountCircleIcon />,
    link: "/account",
  },
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
];
