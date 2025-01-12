import Button from "@/shared/ui/button";
import { useGoogleAuth } from "../api/use-google-auth";
import { authErrorCheck } from "@/shared/lib/auth-error-check";
import GoogleIcon from "@/shared/assets/icons/google";

export const GoogleAuthButton = () => {
  const { handleSignIn: handleGoogleSignIn, error } = useGoogleAuth();

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        className="bg-blue-500 hover:bg-blue-400 mb-4 text-white hover:text-white"
        onClick={() => handleGoogleSignIn()}
        type="button"
      >
        Войти с помощью Google
        <GoogleIcon className="w-6 h-6" />
      </Button>

      {/* TODO: move to toast */}
      {!!error && <p>{authErrorCheck(error)}</p>}
    </div>
  );
};
