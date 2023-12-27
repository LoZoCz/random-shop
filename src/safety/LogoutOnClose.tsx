import { useEffect } from "react";
import { useUserContext } from "../utils/siteData";

const LogoutOnClose = () => {
  const { logout } = useUserContext();

  useEffect(() => {
    const handleUnload = () => {
      const token = localStorage.getItem("userToken");
      if (token) {
        logout();
        localStorage.removeItem("userToken");
      }
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [logout]);

  return null;
};

export default LogoutOnClose;
