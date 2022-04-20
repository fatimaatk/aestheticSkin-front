import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const token = Cookies.get("token");
  const tokenObj = JSON.parse(token);

  return (
    <>{token && tokenObj.role === "1" ? <Outlet /> : <Navigate to="/" />}</>
  );
};
export default ProtectedRoute;
