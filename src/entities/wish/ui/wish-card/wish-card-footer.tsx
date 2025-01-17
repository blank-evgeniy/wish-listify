import { RoutePath } from "@/app/config/routes";
import DeleteIcon from "@/shared/assets/icons/delete";
import EditIcon from "@/shared/assets/icons/edit";
import { IconButton } from "@/shared/ui/icon-button";
import { IconLink } from "@/shared/ui/icon-link";
import { twMerge } from "tailwind-merge";

interface WishCardFooterProps {
  className?: string;
  onDelete: () => void;
}

export const WishCardFooter = ({
  className,
  onDelete,
}: WishCardFooterProps) => {
  return (
    <footer className={twMerge("flex justify-end gap-x-2", className)}>
      <IconLink to={RoutePath.ADD_WISH} size="sm" accentColor="default">
        <EditIcon className="w-full h-full" />
      </IconLink>
      <IconButton size="sm" accentColor="danger" onClick={onDelete}>
        <DeleteIcon className="w-full h-full" />
      </IconButton>
    </footer>
  );
};
