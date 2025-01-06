import { RoutePath } from "@/app/config/routes";
import { GoogleAuthButton } from "@/features/auth";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { AppLink } from "@/shared/ui/link";
import CreateAccountForm from "./create-account-form";

export const RegistrationPage = () => {
  return (
    <main className="min-h-[calc(100vh-var(--header))] bg-rose-950 flex items-center">
      <Container className="relative bottom-10">
        <Heading className="text-center">Регистрация</Heading>
        <div className="bg-rose-700 border-rose-900 shadow-md rounded-lg mx-auto mt-8 px-4 py-8 max-w-[480px] flex flex-col gap-y-4">
          <GoogleAuthButton />

          <p className="text-center text-rose-100">
            или введите данные для регистрации
          </p>

          <CreateAccountForm />
        </div>
        <div className="text-center mt-2">
          Есть аккаунт? - <AppLink to={RoutePath.LOGIN}>Войти</AppLink>
        </div>
      </Container>
    </main>
  );
};
