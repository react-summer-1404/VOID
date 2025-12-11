import { Mail, Home, Airplay, Circle } from "react-feather";

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
        header : "صفحات سایت",
  },
  {
    id: "Ostad",
    title: "استاد یاران",
    icon: <Airplay size={20} />,
    // navLink: "/sample",
    children: [
      {
        id: "OstadList",
        title: "فهرست استاد یاران",
        icon: <Circle size={12} />,
        navLink: "/ostad-yaran",
      },
      
        {
        id: "CreateList",
        title: "وظایف استادیاران",
        icon: <Circle size={12} />,
        navLink: '/ostad-yaran/create',
      },
    ],
  },
  {
    id: "departments",
    title: "دپارتمان",
    icon: <Airplay size={20} />,
    navLink: "/departments",
  
  },
  {
    id: "building",
    title: "بیلدینگ ها",
    icon: <Airplay size={20} />,
    navLink: "/buildings",
  
  },
];
