import { RoutePath } from "@/app/config/routes";
import { Navigate } from "react-router";

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
