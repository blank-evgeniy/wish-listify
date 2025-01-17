import LoginPage from "@/pages/login/ui/login-page";
import { FriendsPage } from "@/pages/friends";
import { HomePage } from "@/pages/home";
import { ProfilePage } from "@/pages/profile";
import { RegistrationPage } from "@/pages/registration";
import { WishlistPage } from "@/pages/wishlist";
import { RoutePath } from "@/app/config/routes";
import { NotFoundPage } from "@/pages/not-found";
import { AddWishPage } from "@/pages/add-wish";
import { EditWishPage } from "@/pages/edit-wish";

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
    element: <WishlistPage />,
    authOnly: true,
  },
  {
    path: RoutePath.EDIT_WISH,
    element: <EditWishPage />,
    authOnly: true,
  },
  {
    path: RoutePath.ADD_WISH,
    element: <AddWishPage />,
    authOnly: true,
  },
  {
    path: RoutePath.FRIENDS,
    element: <FriendsPage />,
    authOnly: true,
  },
  {
    path: RoutePath.PROFILE,
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
  },
];
