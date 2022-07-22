import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRouteAdmin = () => {
  const token = Cookies.get("token");

  return (
    <>
      {token && token.role === "1" ? (
        <Outlet />
      ) : (
        <Navigate to="*" replace={true} />
      )}
    </>
  );
};
export default ProtectedRouteAdmin;
