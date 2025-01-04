import { Link } from "react-router";

import Container from "@/shared/ui/container";
import Logo from "./logo";
import { authLinks } from "../model/data";

export const Header = () => {
  return (
    <div className="bg-rose-950">
      <Container>
        <header className="h-header flex items-center">
          <Logo />

          <ul className="flex ml-auto gap-x-8 text-lg text-rose-300 border-2 border-rose-300 rounded-lg leading-none py-2 px-4">
            {authLinks.map(({ title, href }) => (
              <li key={title} className="hover:text-rose-50 transition-colors">
                <Link to={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </header>
      </Container>
    </div>
  );
};
