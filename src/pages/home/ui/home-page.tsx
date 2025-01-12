import Container from "@/shared/ui/container";
import GiftboxImage from "@/shared/assets/images/giftbox.png";
import { Heading } from "@/shared/ui/heading";
import { AppLink } from "@/shared/ui/link";
import { RoutePath } from "@/app/config/routes";

export const HomePage = () => {
  return (
    <main className="min-h-[calc(100vh-var(--header))] flex items-center">
      <Container>
        <div className="flex max-sm:flex-col items-center">
          <div className="flex flex-col gap-4 sm:max-w-[calc(var(--container)/2)]">
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

          <img
            className="pointer-events-none object-cover sm:max-w-[50%] max-sm:max-h-[50vh]"
            src={GiftboxImage}
            alt="giftbox"
          />
        </div>
      </Container>
    </main>
  );
};
