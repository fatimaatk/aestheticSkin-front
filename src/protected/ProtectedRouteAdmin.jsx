import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRouteAdmin = () => {
  const token = Cookies.get("token");
  const role = token !== undefined ? JSON.parse(token) : null;

  return token && role.role === "1" ? <Outlet /> : <Navigate to="*" />;
};

export default ProtectedRouteAdmin;
