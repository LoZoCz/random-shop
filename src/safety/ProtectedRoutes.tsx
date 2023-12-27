import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../utils/siteData";

const useAuth = () => {
  const { user } = useUserContext();
  const webToken = localStorage.getItem("userToken");

  return user.token === webToken;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={"/random-shop/"} />;
};

export default ProtectedRoutes;
