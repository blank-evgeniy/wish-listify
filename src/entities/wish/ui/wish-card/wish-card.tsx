import { WishDto } from "../../model/type";
import EditIcon from "@/shared/assets/icons/edit";
import DeleteIcon from "@/shared/assets/icons/delete";
import { twMerge } from "tailwind-merge";
import GiftIcon from "@/shared/assets/icons/gift";
import { useDeleteWish } from "../../lib/use-delete-wish";
import { IconButton } from "@/shared/ui/icon-button";
import { IconLink } from "@/shared/ui/icon-link";
import { RoutePath } from "@/app/config/routes";

interface WishCardProps {
  data: WishDto;
  className?: string;
}

export const WishCard = ({ data, className }: WishCardProps) => {
  const { title, srcLink, imgLink, price, description } = data;
  const { handleDeleteWish, isLoading } = useDeleteWish();

  return (
    <article
      className={twMerge(
        "flex flex-col justify-between bg-bg-300 p-4 rounded-lg shadow",
        isLoading && "opacity-50 pointer-events-none animate-pulse",
        className
      )}
    >
      <div>
        {imgLink ? (
          <img
            alt={title}
            src={imgLink}
            className="max-w-[420px] w-full aspect-square rounded-md"
          />
        ) : (
          <div className="max-w-[420px] aspect-square bg-bg-200 rounded flex items-center justify-center">
            <GiftIcon className="h-full w-full p-4 text-text-200 grayscale" />
          </div>
        )}

        <p className="text-lg font-semibold mt-2">{title}</p>
        {!!price && <p className="text-xl font-bold">{price} ₽</p>}
        {!!description && (
          <p className="text-text-200 leading-none text-sm h-[42px] line-clamp-3">
            {description}
          </p>
        )}
        {!!srcLink && (
          <a
            href={srcLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-100 hover:opacity-80 transition-opacity text-base leading-none h-4 line-clamp-1 mt-2"
          >
            ссылка на источник
          </a>
        )}
      </div>
      <footer className="flex justify-end gap-x-2 pt-2">
        <IconLink to={RoutePath.ADD_WISH} size="sm" accentColor="default">
          <EditIcon className="w-full h-full" />
        </IconLink>
        <IconButton
          size="sm"
          accentColor="danger"
          onClick={() => handleDeleteWish(data.id)}
        >
          <DeleteIcon className="w-full h-full" />
        </IconButton>
      </footer>
    </article>
  );
};
