import Button from "@/shared/ui/button";
import { useGoogleAuth } from "../api/use-google-auth";
import { authErrorCheck } from "@/shared/lib/auth-error-check";

export const GoogleAuthButton = () => {
  const { handleSignIn: handleGoogleSignIn, error } = useGoogleAuth();

  return (
    <div className="flex flex-col gap-2">
      <Button
        className="bg-blue-500 hover:bg-blue-400 mb-4"
        onClick={() => handleGoogleSignIn()}
        type="button"
      >
        Войти с помощью Google
      </Button>

      {/* TODO: move to toast */}
      {!!error && <p>{authErrorCheck(error)}</p>}
    </div>
  );
};
