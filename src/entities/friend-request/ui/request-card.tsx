import { ProfileDto } from "@/entities/profile";
import CheckIcon from "@/shared/assets/icons/check";
import CrossIcon from "@/shared/assets/icons/cross";
import { IconButton } from "@/shared/ui/icon-button";
import { Avatar } from "@/widgets/avatar";
import { twMerge } from "tailwind-merge";
import { useAcceptRequest } from "../lib/use-accept-request";
import { useRejectRequest } from "../lib/use-reject-request";

interface RequestCardProps {
  className?: string;
  data: ProfileDto;
}

export const RequestCard = ({ className, data }: RequestCardProps) => {
  const { email, name, avatarNumber, uid } = data;
  const { handleAcceptRequest, isLoading: isLoadingAccept } =
    useAcceptRequest();
  const { handleRejectRequest, isLoading: isLoadingReject } =
    useRejectRequest();

  const isLoading = isLoadingAccept || isLoadingReject;

  return (
    <article
      className={twMerge(
        "flex items-center justify-between gap-x-4",
        className
      )}
    >
      <div className="w-full flex items-start gap-x-4">
        <Avatar avatarNumber={avatarNumber} size="md" />
        <h3 className="font-semibold text-[20px]">{name ? name : email}</h3>
      </div>
      <div className="flex items-center gap-x-2">
        <IconButton
          accentColor="success"
          disabled={isLoading}
          onClick={() => handleAcceptRequest(uid)}
        >
          <CheckIcon className="w-6 h-6" />
        </IconButton>
        <IconButton
          accentColor="danger"
          disabled={isLoading}
          onClick={() => handleRejectRequest(uid)}
        >
          <CrossIcon className="w-6 h-6" />
        </IconButton>
      </div>
    </article>
  );
};
