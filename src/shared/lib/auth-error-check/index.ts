import { FirebaseError } from "firebase/app";

export const authErrorCheck = (error: unknown) => {
  if (!error) {
    return null;
  }

  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/invalid-credential":
        return "Неправильный логин или пароль";
      case "auth/credential-already-in-use":
        return "Пользователь с таким логином уже существует";
      case "auth/email-already-in-use":
        return "Пользователь с таким email уже существует";
      case "auth/internal-error":
        return "Внутренняя ошибка сервера";
      case "auth/invalid-email":
        return "Неправильный email";
      case "auth/wrong-password":
        return "Неправильный пароль";
      default:
        return "Неизвестная ошибка";
    }
  } else {
    return "Неизвестная ошибка";
  }
};
