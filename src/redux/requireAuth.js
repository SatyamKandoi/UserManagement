import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ReduxConsumer = () => {
    return useSelector((state) => state.Employee.currentUser);
};

export const RequireAuth = ({ children }) => {
    const user = ReduxConsumer();
    const location = useLocation();
    const role = user?.roleId;
    return role === 1 || role === 2 ? (
        children
    ) : (
        <Navigate to={"/"} replace state={{ path: location.pathname }} />
    );
};
