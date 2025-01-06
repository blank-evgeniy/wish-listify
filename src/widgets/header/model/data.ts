import { RoutePath } from "@/app/config/routes";
import { LinkType } from "@/shared/types";

export const authLinks: LinkType[] = [
  { title: "Вход", href: RoutePath.LOGIN },
  { title: "Регистрация", href: RoutePath.REGISTRATION },
];
