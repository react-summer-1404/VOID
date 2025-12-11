// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";
const OstadYaranFehrest  = lazy(()=> import("../../pages/OstadYaran/OstadYaranFehrest"))
import OstadYaranEdit from "../../pages/OstadYaran/OstadYaranEdit"
import OstadYaranCreate from "../../pages/OstadYaran/OstadYaranCreate"
import AddToCourse from "../../pages/OstadYaran/AddToCourse";
import DepartmentsCreate from "../../pages/Departments/DepartmentsCreate";
import DepartmentsEdit from "../../pages/Departments/DepartmentsEdit";
import DepartmentsList from "../../pages/Departments/DepartmentsList";
import BuildingsCreate from "../../pages/Buildings/BuildingsCreate";
import BuildingsEdit from "../../pages/Buildings/BuildingsEdit";
import BuildingsList from "../../pages/Buildings/BuildingsList";
// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/home";

const Home = lazy(() => import("../../pages/Home"));

const SecondPage = lazy(() => import("../../pages/SecondPage"));
const Sample = lazy(() => import("../../pages/Sample"));
///////////////////////////////////////////////////////////
const Login = lazy(() => import("../../pages/authentication/Login"));
const Register = lazy(() => import("../../pages/Register"));
const ForgotPassword = lazy(() => import("../../pages/ForgotPassword"));
const Error = lazy(() => import("../../pages/Error"));


// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
 

  {
    path: "/second-page",
    element: <SecondPage />,
  },


  {
    path: "/sample",
    element: <Sample />,
  },
   {
     path:"/ostad-yaran",
     element:<OstadYaranFehrest />
  },

  {
    path: '/ostad-yaran/edit/:id',
    element: <OstadYaranEdit />
  },
  {
    path: '/ostad-yaran/create',
    element: <OstadYaranCreate />
  },
  {
    path: '/ostad-yaran/add-to-course/:assistanceId',
    element: <AddToCourse />
  },
{
    path: '/departments',
    element: <DepartmentsList />
  },
  {
    path: '/departments/create',
    element: <DepartmentsCreate />
  },
  {
    path: '/departments/edit/:id',
    element: <DepartmentsEdit />
  },
  {
    path: '/buildings',
    element: <BuildingsList />
  },
  {
    path: '/buildings/create',
    element: <BuildingsCreate />
  },
  {
    path: '/buildings/edit/:id',
    element: <BuildingsEdit />
  },













  
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "*",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
