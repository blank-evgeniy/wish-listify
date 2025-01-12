import { usePasswordAuth } from "@/features/auth";
import { authErrorCheck } from "@/shared/lib/auth-error-check";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { useState } from "react";

const PasswordForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const {
    handleSignIn: handlePasswordSignIn,
    error,
    isLoading,
  } = usePasswordAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePasswordSignIn({ email, password });
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
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

      {!!error && <p className="text-red-400">{authErrorCheck(error)}</p>}

      <Button isLoading={isLoading} className="ml-auto mt-4" type="submit">
        Войти
      </Button>
    </form>
  );
};

export default PasswordForm;
