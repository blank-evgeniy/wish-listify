import { useGoogleAuth, usePasswordAuth } from "@/features/auth";
import Button from "@/shared/ui/button";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import Input from "@/shared/ui/input";
import { AppLink } from "@/shared/ui/link";
import { useState } from "react";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { handleSignIn: handleGoogleSignIn } = useGoogleAuth();
  const { handleSignIn: handlePasswordSignIn } = usePasswordAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePasswordSignIn({ email, password });
  };

  return (
    <main className="min-h-[calc(100vh-var(--header))] bg-rose-950 flex items-center">
      <Container className="relative bottom-10">
        <Heading className="text-center">Вход</Heading>
        <form
          className="bg-rose-700 border-rose-900 shadow-md rounded-lg mx-auto mt-8 px-4 py-8 max-w-[480px] flex flex-col gap-y-4"
          onSubmit={handleSubmit}
        >
          <Button
            className="bg-blue-500 hover:bg-blue-400 mb-4"
            onClick={() => handleGoogleSignIn()}
            type="button"
          >
            Войти с помощью Google
          </Button>

          <Input
            type="email"
            name="email"
            id="email"
            label="Почта"
            placeholder="Введите почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            name="password"
            id="password"
            label="Пароль"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="ml-auto mt-4" type="submit">
            Войти
          </Button>
        </form>
        <div className="text-center mt-2">
          Нет аккаунта? -{" "}
          <AppLink to="/registration">Зарегистрироваться</AppLink>
        </div>
      </Container>
    </main>
  );
};

export default LoginPage;
