import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, Navigate } from "react-router-dom";

const initialState = { user: null };

const authContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { user: action.payload };
    case "logout":
      return { user: null };
    default:
      throw new Error();
  }
};

export function AuthProvider({ children }) {
  const [activeUser, dispatch] = useReducer(reducer, initialState);
  return (
    <authContext.Provider value={{ activeUser, dispatch }}>
      {children}
    </authContext.Provider>
  );
}

export default function AuthConsumer() {
  return useContext(authContext);
}
export const RequireAuth = ({ children }) => {
  const { activeUser } = AuthConsumer();
  const location = useLocation();
  const role = activeUser?.user?.roleId;
  return role === 1 || role === 2 ? (
    children
  ) : (
    <Navigate to={"/signin"} replace state={{ path: location.pathName }} />
  );
};
