import { Mail, Home, Airplay, Circle ,Users} from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  // {
  //   id: "secondPage",
  //   title: "Second Page",
  //   icon: <Mail size={20} />,
  //   navLink: "/second-page",
  // },
  
  {
    id: "users",
    title: "لیست کاربران",
    icon: <Users size={20} />,
    navLink: "/users"
  },
];
