import Container from "@/shared/ui/container";
import Logo from "./logo";
import { authLinks } from "../model/data";
import { useUser } from "@/app/providers/user";
import { AppLink } from "@/shared/ui/link";
import { ThemeSwitcher } from "@/widgets/theme-switcher";

export const Header = () => {
  const { user, loading } = useUser();

  const renderedLinks = authLinks.filter(
    ({ href }) => !loading && !user && href
  );

  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur z-20">
      <Container>
        <header className="h-header flex items-center gap-x-2">
          <Logo />

          <div className="flex gap-x-4 items-center ml-auto">
            <ThemeSwitcher />

            {!!renderedLinks.length && (
              <ul className="flex xxs:gap-x-8 gap-x-4 text-lg text-text-100 border-2 border-text-200 rounded-lg leading-none py-2 xxs:px-4 px-2">
                {renderedLinks.map(({ title, href }) => (
                  <li key={title}>
                    <AppLink className="leading-none" to={href}>
                      {title}
                    </AppLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </header>
      </Container>
    </div>
  );
};
