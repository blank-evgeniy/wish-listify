import { HomePage } from "@/pages/home";

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
}

export const routes: Route[] = [
  {
    path: RoutePath.HOME,
    element: <HomePage />,
  },
  {
    path: RoutePath.LOGIN,
    element: <div>login</div>,
  },
  {
    path: RoutePath.REGISTRATION,
    element: <div>registration</div>,
  },
  {
    path: RoutePath.WISHLIST,
    element: <div>wishlist</div>,
  },
  {
    path: RoutePath.FRIENDS,
    element: <div>friends</div>,
  },
];
