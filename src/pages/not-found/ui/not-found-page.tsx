import { RoutePath } from "@/app/config/routes";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { AppLink } from "@/shared/ui/link";

export const NotFoundPage = () => {
  return (
    <div className="sm:sm-h-screen-fixed h-screen-fixed sm:">
      <Container className="h-full flex flex-col items-center justify-center">
        <Heading>{"Страница не найдена :*("}</Heading>
        <p className="text-text-200">Попробуйте перейти на главную страницу</p>
        <AppLink className="mt-4" variant="filled" to={RoutePath.HOME}>
          На главную
        </AppLink>
      </Container>
    </div>
  );
};
