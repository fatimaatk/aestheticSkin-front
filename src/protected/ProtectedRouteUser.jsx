import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRouteUser = () => {
  const token = Cookies.get("token");
  console.log(token);
  return <>{token ? <Outlet /> : <Navigate to="/panier" />}</>;
};
export default ProtectedRouteUser;
