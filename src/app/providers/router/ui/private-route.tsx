import { Navigate } from "react-router";
import { RoutePath } from "../model/routes";

type PrivateRouteProps = {
  isAuthenticated?: boolean;
  children: React.ReactNode;
};

const PrivateRoute = ({
  children,
  isAuthenticated = false,
}: PrivateRouteProps) => {
  return isAuthenticated ? children : <Navigate to={RoutePath.LOGIN} />;
};

export default PrivateRoute;
