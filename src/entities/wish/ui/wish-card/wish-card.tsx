import { WishDto } from "../../model/type";
import { twMerge } from "tailwind-merge";
import GiftIcon from "@/shared/assets/icons/gift";
import { useDeleteWish } from "../../lib/use-delete-wish";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { WishCardFooter } from "./wish-card-footer";

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
        "flex lg:flex-col justify-between bg-bg-300 sm:p-4 p-2 rounded-lg shadow relative",
        isLoading && "opacity-50 pointer-events-none animate-pulse",
        className
      )}
    >
      <div className="flex lg:flex-col items-center xs:gap-x-4 gap-x-2 w-full">
        <FallbackImage
          className="lg:max-w-[420px] xs:max-w-[120px] max-w-[80px] object-cover w-full aspect-square rounded-md bg-bg-200"
          placeholder={
            <GiftIcon className="h-full w-full p-4 text-text-200 grayscale" />
          }
          src={imgLink}
        />
        <div className="w-full h-full">
          <p className="xs:text-lg font-semibold mt-2 leading-none">{title}</p>
          {!!price && <p className="xs:text-xl font-bold">{price} ₽</p>}
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
              ссылка
            </a>
          )}
        </div>
      </div>
      <WishCardFooter
        className="pt-2 lg:static absolute right-2 bottom-2"
        onDelete={() => handleDeleteWish(data.id)}
      />
    </article>
  );
};
