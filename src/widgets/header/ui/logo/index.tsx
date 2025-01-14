import { Link } from "react-router";

import { RoutePath } from "@/app/config/routes";
import { LogoIcon } from "@/shared/assets/icons/logo";

const Logo = () => {
  return (
    <Link
      className=" text-text-100 hover:text-text-200 transition-colors flex gap-x-2 items-center group"
      to={RoutePath.HOME}
    >
      <LogoIcon className="w-10 h-10 group-hover:-rotate-6 transition-transform" />
      <div className="xs:block hidden font-semibold leading-none shadow-inner w-full text-center p-2 bg-bg-200 rounded-lg xs:text-base text-sm">
        WISH LISTIFY
      </div>
    </Link>
  );
};

export default Logo;
