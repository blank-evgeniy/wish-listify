import { RoutePath } from "@/app/config/routes";

import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { AppLink } from "@/shared/ui/link";
import WishlistImage from "@/shared/assets/images/wishlist.png";

export const HomePage = () => {
  return (
    <main className="min-h-screen-fixed sm:sm-min-h-screen-fixed flex items-center">
      <Container>
        <div className="flex max-sm:flex-col items-center">
          <div className="flex flex-col gap-4 sm:max-w-[calc(var(--container)/2)] z-10">
            <Heading>СОЗДАЙ СВОЙ ИДЕАЛЬНЫЙ СПИСОК ЖЕЛАНИЙ.</Heading>
            <h2 className="sm:text-3xl text-xl leading-[1.125] text-text-200">
              Легко добавляй, делись и вдохновляйся новыми идеями.
            </h2>
            <AppLink
              variant="filled"
              to={RoutePath.REGISTRATION}
              className="max-w-[320px] max-sm:mx-auto"
            >
              Создать свой список желаний
            </AppLink>
          </div>

          <div className="sm:max-w-[50%] sm:mt-0 mt-8 relative group">
            <img
              className={
                "pointer-events-none max-sm:max-h-[40vh] object-cover opacity-90 group-hover:-rotate-3 transition-transform"
              }
              src={WishlistImage}
              alt="giftbox"
            />
          </div>
        </div>
      </Container>
    </main>
  );
};
