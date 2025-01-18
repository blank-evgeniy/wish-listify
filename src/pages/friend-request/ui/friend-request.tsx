import { RoutePath } from "@/app/config/routes";
import { useSendRequest } from "@/entities/friend/lib/friend-request/use-send-request";
import { Loader } from "@/shared/ui/loader";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export const FriendsRequest = () => {
  const { id } = useParams<{ id: string }>();
  const { handleSendRequest, isSuccess, isError } = useSendRequest();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    if (isSuccess) {
      navigate(RoutePath.FRIENDS);
      return;
    }
    if (isError) {
      navigate(RoutePath.NOT_FOUND);
      return;
    }

    handleSendRequest(id);
  }, [isSuccess, isError, navigate, handleSendRequest, id]);

  return (
    <div className="h-[calc(100vh-var(--header))] flex items-center justify-center">
      <Loader />
    </div>
  );
};
