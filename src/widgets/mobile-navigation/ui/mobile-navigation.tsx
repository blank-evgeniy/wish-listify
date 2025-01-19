import { AppLink } from "@/shared/ui/link";
import { navigationLinks } from "../model/data";
import { useAuth } from "@/app/providers/auth";

const MobileNavigation = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-bg-300 h-mobile-nav-h z-20">
      <ul className="flex">
        {navigationLinks.map(({ href, Icon }) => (
          <li key={href} className="w-full">
            <AppLink to={href} className="w-full">
              <div className="h-mobile-nav-h flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
