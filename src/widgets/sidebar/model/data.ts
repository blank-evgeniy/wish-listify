import { RoutePath } from "@/app/config/routes";
import { LinkType } from "@/shared/types";

export const sidebarLinks: LinkType[] = [
  { title: "Мои желания", href: RoutePath.WISHLIST },
  { title: "Друзья", href: RoutePath.FRIENDS },
  { title: "Профиль", href: RoutePath.PROFILE },
];
