import React from "react";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Stats from "./pages/Stats/Stats";
import Greeting from "./components/assets/Greeting";
import { RequireAuth } from "./redux/requireAuth";
import Employees from "./pages/Employees/Employees";
import Update from "./pages/Update.js/Update";
import Unauthenticated from "./components/assets/Unauthenticated";
import FrameCard from "./pages/Update Admin/FrameCard";
import UpdateAdmin from "./pages/Update Admin/UpdateAdmin";

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
                    path: "/dashboard/update",
                    element: <Update />,
                },
                {
                    path: "/dashboard/updateemp",
                    element: <UpdateAdmin />,
                },
            ],
        },
        // {
        //   path: "/*",
        //   element: <Unauthenticated />,
        // },
    ]);

    return routes;
};

export default App;
