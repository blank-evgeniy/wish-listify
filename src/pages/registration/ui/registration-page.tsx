import { RoutePath } from "@/app/config/routes";
import { GoogleAuthButton } from "@/features/auth";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { AppLink } from "@/shared/ui/link";
import CreateAccountForm from "./create-account-form";

export const RegistrationPage = () => {
  return (
    <main className="min-h-screen-fixed sm:sm-min-h-screen-fixed flex items-center">
      <Container className="">
        <Heading className="text-center">Регистрация</Heading>
        <div className="bg-bg-200 shadow-inner rounded-lg mx-auto mt-8 px-4 py-8 max-w-[480px] flex flex-col gap-y-4">
          <GoogleAuthButton />

          <p className="text-center">или введите данные для регистрации</p>

          <CreateAccountForm />
        </div>
        <div className="text-center mt-2">
          Есть аккаунт? -{" "}
          <AppLink size="sm" variant="underline" to={RoutePath.LOGIN}>
            Войти
          </AppLink>
        </div>
      </Container>
    </main>
  );
};
