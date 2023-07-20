import React from "react";
import SignUp from "./components/pages/SignUp/SignUp";
import SignIn from "./components/pages/SignIn/SignIn";
import { useRoutes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Stats from "./components/pages/Stats/Stats";
import Greeting from "./components/assets/Greeting";
import { RequireAuth } from "./redux/requireAuth";
import Employees from "./components/pages/Employees/Employees";
import Update from "./components/pages/Employees/Update.js/Update";
import Unauthenticated from './components/assets/Unauthenticated';
import FrameCard from "./components/assets/FrameCard";
import UpdateAdmin from "./components/pages/Employees/Update Admin/UpdateAdmin";

const App = () => {
  const routes = useRoutes([
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/dashboard",

      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
      children: [
        {
          index: true,
          element: <Greeting />,
        },
        {
          path: "/dashboard/stats",
          element: <Stats />,
        },
        {
          path: "/dashboard/employees",
          element: <Employees />,
        },
        {
          path:"/dashboard/update",
          element:<Update/>
        },
        {
          path:"/dashboard/updateemp",
          element:<UpdateAdmin/>
        }
      ],
    },
    {
      path: "/*",
      element: <Unauthenticated />,
    },
  ]);

  return routes;
};

export default App;
