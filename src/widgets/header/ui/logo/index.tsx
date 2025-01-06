import { Link } from "react-router";

import { RoutePath } from "@/app/config/routes";
import GiftIcon from "@/shared/assets/icons/gift";

const Logo = () => {
  return (
    <Link
      className=" text-rose-200 hover:text-rose-50 transition-colors flex gap-x-2 items-center"
      to={RoutePath.HOME}
    >
      <GiftIcon className="w-12 h-12 xs:block hidden" />
      <div>
        <div className="text-lg font-semibold leading-none w-full flex items-center justify-center bg-rose-100 text-rose-950 p-1 rounded-lg">
          WISH LISTIFY
        </div>
        <span className="xs:inline hidden">твой список желаний</span>
      </div>
    </Link>
  );
};

export default Logo;
