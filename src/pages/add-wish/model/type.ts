import { WishDto } from "@/entities/wish";

export type FormData = Omit<WishDto, "id">;
