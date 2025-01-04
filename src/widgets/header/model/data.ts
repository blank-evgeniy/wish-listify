import { RoutePath } from "@/app/providers/router";

interface LinkType {
  title: string;
  href: RoutePath;
}

export const authLinks: LinkType[] = [
  { title: "Вход", href: RoutePath.LOGIN },
  { title: "Регистрация", href: RoutePath.REGISTRATION },
];
