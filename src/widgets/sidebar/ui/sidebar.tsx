import { Link, useLocation } from "react-router";
import { twMerge } from "tailwind-merge";
import { sidebarLinks } from "../model/data";
import { memo } from "react";

export const Sidebar = memo(() => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className="w-[240px]">
      <nav>
        <ul className="flex flex-col gap-y-4 pt-8">
          {sidebarLinks.map(({ title, href }) => (
            <li key={title}>
              <Link
                className={twMerge(
                  "text-rose-100 text-xl font-medium transition-colors",
                  pathname === href ? "text-rose-300" : "hover:text-rose-200"
                )}
                to={href}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
});
