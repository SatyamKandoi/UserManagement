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
        }
      ],
    },
    {
      path: "/*",
      element: <Unauthenticated />,
    },

    // {
    //   path:"/home",
    //   element:<RequireAuth><Home/></RequireAuth>,
    //   children:[
    //     {
    //     index:true,
    //     element:<Greetings></Greetings>
    //     },
    //     {
    //       path: '/profile',
    //       element: <RequireAuth><Profile /></RequireAuth>
    //     },

    //   ]
    // }
  ]);

  return routes;
};

export default App;
