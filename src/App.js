import React from "react";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { useRoutes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { RequireAuth } from "./hooks/auth";

const App = () => {
  const routes = useRoutes([
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    }
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
