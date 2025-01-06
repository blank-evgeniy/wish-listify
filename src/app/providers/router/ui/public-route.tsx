import { Navigate } from "react-router";
import { RoutePath } from "../model/routes";

type PublicRouteProps = {
  isAuthenticated?: boolean;
  children: React.ReactNode;
};

const PublicRoute = ({
  children,
  isAuthenticated = false,
}: PublicRouteProps) => {
  return !isAuthenticated ? children : <Navigate to={RoutePath.WISHLIST} />;
};

export default PublicRoute;
