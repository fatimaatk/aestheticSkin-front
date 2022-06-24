import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRouteUser = () => {
  const token = Cookies.get("token");
  const tokenObj = JSON.parse(token);

  return (
    <>{token && tokenObj.role === "0" ? <Outlet /> : <Navigate to="/" />}</>
  );
};
export default ProtectedRouteUser;
