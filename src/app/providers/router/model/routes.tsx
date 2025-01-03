import { HomePage } from "@/pages/home";

export enum RoutePath {
  HOME = "/",
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
];
