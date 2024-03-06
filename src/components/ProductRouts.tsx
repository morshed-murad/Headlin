import { useContext } from "react";
import { UserContexts } from "../App";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProductRouts = () => {
  const { user } = useContext(UserContexts);
  const location = useLocation();
  if (user && user.isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
};

export default ProductRouts;
