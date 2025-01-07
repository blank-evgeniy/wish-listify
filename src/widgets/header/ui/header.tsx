import { Link } from "react-router";

import Container from "@/shared/ui/container";
import Logo from "./logo";
import { authLinks } from "../model/data";
import { useUser } from "@/app/providers/user";
import Button from "@/shared/ui/button";
import { useSignOut } from "@/features/auth";

export const Header = () => {
  const { handleSignOut } = useSignOut();
  const { user, loading } = useUser();

  const renderedLinks = authLinks.filter(
    ({ href }) => !loading && !user && href
  );

  return (
    <div className="bg-rose-950">
      <Container>
        <header className="h-header flex items-center">
          <Logo />

          {!!renderedLinks.length && (
            <ul className="flex ml-auto xxs:gap-x-8 gap-x-4 text-lg text-rose-300 border-2 border-rose-300 rounded-lg leading-none py-2 xxs:px-4 px-2">
              {renderedLinks.map(({ title, href }) => (
                <li
                  key={title}
                  className="hover:text-rose-50 transition-colors"
                >
                  <Link to={href}>{title}</Link>
                </li>
              ))}
            </ul>
          )}

          {!!user && (
            <Button
              buttonType="underline-light"
              className="ml-auto"
              onClick={() => handleSignOut()}
            >
              Выйти
            </Button>
          )}
        </header>
      </Container>
    </div>
  );
};
