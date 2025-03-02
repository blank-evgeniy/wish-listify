import { Link, useLocation } from "react-router";
import { twMerge } from "tailwind-merge";
import { sidebarLinks } from "../model/data";
import { memo } from "react";
import { SignOutButton } from "@/features/auth";
import { Badge } from "@/shared/ui/badge";
import { useFriendRequests } from "@/entities/friend-request/lib/use-friend-requests";

export const Sidebar = memo(() => {
  const location = useLocation();
  const pathname = location.pathname;
  const { requests } = useFriendRequests();

  return (
    <aside className="w-[240px] h-[calc(100vh-var(--header))] pb-4 md:block hidden">
      <nav className="h-[calc(100vh-var(--header)-32px)] fixed">
        <ul className="flex flex-col gap-y-4 pt-8 h-full">
          {sidebarLinks.map(({ title, href, Icon }) => {
            const isActive = pathname.startsWith(href);

            return (
              <li key={title}>
                <Link
                  className={twMerge(
                    "text-text-200 text-xl font-medium transition-colors flex items-center",
                    isActive ? "text-text-100" : "hover:opacity-80"
                  )}
                  to={href}
                >
                  <div
                    className={twMerge(
                      "w-8 h-8 rounded-lg flex items-center justify-center mr-4",
                      isActive ? "bg-accent-100" : "bg-bg-200"
                    )}
                  >
                    {<Icon className="w-5 h-5" />}
                  </div>
                  {title}
                  {title === "Друзья" && !!requests?.length && (
                    <Badge className="ml-2">1</Badge>
                  )}
                </Link>
              </li>
            );
          })}

          <li className="mt-auto">
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </aside>
  );
});
