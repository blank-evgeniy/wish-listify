import { RoutePath } from "@/app/config/routes";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { AppLink } from "@/shared/ui/link";
import PasswordForm from "./password-form";
import { GoogleAuthButton } from "@/features/auth";

const LoginPage = () => {
  return (
    <main className="min-h-screen-fixed sm:sm-min-h-screen-fixed flex items-center">
      <Container className="relative">
        <Heading className="text-center">Вход</Heading>
        <div className="bg-bg-200 shadow-inner rounded-lg mx-auto mt-8 px-4 py-8 max-w-[480px] flex flex-col gap-y-4">
          <GoogleAuthButton />

          <p className="text-center text-text-200">или введите ваши данные</p>

          <PasswordForm />
        </div>
        <div className="text-center mt-2">
          Нет аккаунта? -{" "}
          <AppLink to={RoutePath.REGISTRATION} variant="underline">
            Зарегистрироваться
          </AppLink>
        </div>
      </Container>
    </main>
  );
};

export default LoginPage;
