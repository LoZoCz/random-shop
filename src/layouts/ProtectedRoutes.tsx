import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { isLogged: true };
  return user && user.isLogged;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
