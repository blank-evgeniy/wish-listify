import Container from "@/shared/ui/container";
import GiftboxImage from "@/shared/assets/images/giftbox.png";
import { Heading } from "@/shared/ui/heading";
import { AppLink } from "@/shared/ui/link";
import { RoutePath } from "@/app/config/routes";
import { Theme, useTheme } from "@/app/providers/theme";
import { twJoin } from "tailwind-merge";

export const HomePage = () => {
  const { theme } = useTheme();

  return (
    <main className="min-h-[calc(100vh-var(--header))] flex items-center">
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

          <div className="sm:max-w-[50%] max-sm:max-h-[50vh] relative group">
            <div className="absolute -left-0 -right-0 bg-accent-200 h-full shadow-md rounded-lg"></div>
            <div className="absolute -left-0 -right-0 bg-bg-300 shadow-md h-full rounded-lg rotate-3 group-hover:-rotate-3 transition-transform"></div>
            <img
              className={twJoin(
                "pointer-events-none object-cover opacity-70 group-hover:-rotate-3 transition-transform",
                theme === Theme.DARK ? "hue-rotate-180" : "hue-rotate-0"
              )}
              src={GiftboxImage}
              alt="giftbox"
            />
          </div>
        </div>
      </Container>
    </main>
  );
};
