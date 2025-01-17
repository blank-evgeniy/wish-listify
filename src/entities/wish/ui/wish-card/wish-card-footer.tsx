import { RoutePath } from "@/app/config/routes";
import DeleteIcon from "@/shared/assets/icons/delete";
import EditIcon from "@/shared/assets/icons/edit";
import { IconButton } from "@/shared/ui/icon-button";
import { IconLink } from "@/shared/ui/icon-link";
import { twMerge } from "tailwind-merge";

interface WishCardFooterProps {
  className?: string;
  wishId: string;
  onDelete: () => void;
}

export const WishCardFooter = ({
  className,
  wishId,
  onDelete,
}: WishCardFooterProps) => {
  return (
    <footer className={twMerge("flex justify-end gap-x-2", className)}>
      <IconLink
        to={RoutePath.EDIT_WISH.replace(":id", wishId)}
        size="sm"
        accentColor="default"
      >
        <EditIcon className="w-full h-full" />
      </IconLink>
      <IconButton size="sm" accentColor="danger" onClick={onDelete}>
        <DeleteIcon className="w-full h-full" />
      </IconButton>
    </footer>
  );
};
