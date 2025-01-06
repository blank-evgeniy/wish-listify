import { RoutePath } from "@/app/providers/router";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { AppLink } from "@/shared/ui/link";
import PasswordForm from "./password-form";
import { GoogleAuthButton } from "@/features/auth";

const LoginPage = () => {
  return (
    <main className="min-h-[calc(100vh-var(--header))] bg-rose-950 flex items-center">
      <Container className="relative bottom-10">
        <Heading className="text-center">Вход</Heading>
        <div className="bg-rose-700 border-rose-900 shadow-md rounded-lg mx-auto mt-8 px-4 py-8 max-w-[480px] flex flex-col gap-y-4">
          <GoogleAuthButton />

          <p className="text-center text-rose-100">или введите ваши данные</p>

          <PasswordForm />
        </div>
        <div className="text-center mt-2">
          Нет аккаунта? -{" "}
          <AppLink to={RoutePath.REGISTRATION}>Зарегистрироваться</AppLink>
        </div>
      </Container>
    </main>
  );
};

export default LoginPage;
