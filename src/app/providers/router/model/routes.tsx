import { HomePage } from "@/pages/home";
import LoginPage from "@/pages/login/ui/login-page";
import { RegistrationPage } from "@/pages/registration";

export enum RoutePath {
  HOME = "/",
  LOGIN = "/login",
  REGISTRATION = "/registration",
  WISHLIST = "/wishlist",
  FRIENDS = "/friends",
}

interface Route {
  path: RoutePath;
  element: JSX.Element;
  authOnly?: boolean;
  publicOnly?: boolean;
}

export const routes: Route[] = [
  {
    path: RoutePath.HOME,
    element: <HomePage />,
  },
  {
    path: RoutePath.LOGIN,
    element: <LoginPage />,
    publicOnly: true,
  },
  {
    path: RoutePath.REGISTRATION,
    element: <RegistrationPage />,
    publicOnly: true,
  },
  {
    path: RoutePath.WISHLIST,
    element: <div>wishlist</div>,
    authOnly: true,
  },
  {
    path: RoutePath.FRIENDS,
    element: <div>friends</div>,
    authOnly: true,
  },
];
