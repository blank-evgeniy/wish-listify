import { RoutePath } from "@/app/config/routes";
import { LinkType } from "@/shared/types";
import { ListIcon } from "@/shared/assets/icons/list";
import { GroupIcon } from "@/shared/assets/icons/group";
import UserIcon from "@/shared/assets/icons/user";

interface NavigationLink extends LinkType {
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const navigationLinks: NavigationLink[] = [
  { title: "Мои желания", href: RoutePath.WISHLIST, Icon: ListIcon },
  { title: "Друзья", href: RoutePath.FRIENDS, Icon: GroupIcon },
  { title: "Профиль", href: RoutePath.PROFILE, Icon: UserIcon },
];
