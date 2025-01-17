import Input from "@/shared/ui/input";
import Textarea from "@/shared/ui/textarea";
import Button from "@/shared/ui/button";
import { AppLink } from "@/shared/ui/link";
import { RoutePath } from "@/app/config/routes";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUpdateWish } from "@/entities/wish";
import { useNavigate } from "react-router";
import { FormData } from "../../model/type";
import { useWish } from "@/entities/wish/lib/use-wish";
import { Loader } from "@/shared/ui/loader";

interface EditWishFormProps {
  wishId: string;
}

const EditWishForm = ({ wishId }: EditWishFormProps) => {
  const navigate = useNavigate();
  const { wish: initialValues, isLoading, error } = useWish(wishId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const {
    handleUpdateWish,
    isLoading: isLoadingUpdate,
    isSuccess,
  } = useUpdateWish();

  if (isSuccess) {
    navigate(RoutePath.WISHLIST);
  }

  const submit: SubmitHandler<FormData> = (data) => {
    handleUpdateWish({ wishId, data });
  };

  const onSubmit = handleSubmit(submit);

  if (isLoading)
    return (
      <div className="py-10 flex justify-center">
        <Loader />
      </div>
    );

  if (error || !initialValues)
    return (
      <div className="w-full flex justify-center items-center">
        {"Такого желания не существует :("}
      </div>
    );

  return (
    <form onSubmit={onSubmit}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <Input
          defaultValue={initialValues.title}
          label="Название"
          placeholder="Введите название"
          id="title"
          required
          error={errors.title?.message}
          {...register("title", { required: "Пожалуйста, введите название" })}
        />
        <Input
          defaultValue={initialValues.srcLink}
          label="Ссылка на подарок"
          placeholder="Вставьте ссылку, где можно купить подарок"
          id="link"
          {...register("srcLink")}
        />
        <Input
          defaultValue={initialValues.imgLink}
          label="Ссылка на картинку"
          placeholder="Вставьте ссылку на изображение подарка"
          id="image"
          {...register("imgLink")}
        />
        <Input
          defaultValue={initialValues.price}
          label="Стоимость"
          placeholder="Введите стоимость"
          id="price"
          type="number"
          maxLength={6}
          {...register("price", {
            valueAsNumber: true,
            min: {
              value: 0,
              message: "Пожалуйста, введите положительное число",
            },
          })}
          error={errors.price?.message}
        />
        <Textarea
          defaultValue={initialValues.description}
          label="Описание"
          placeholder="Введите описание вашего желания(максимум 100 символов)"
          id="description"
          className="lg:col-span-2"
          maxLength={100}
          rows={2}
          {...register("description")}
        />
      </div>
      <div className="mt-8 flex gap-4 justify-end">
        <AppLink to={RoutePath.WISHLIST} variant="outlined">
          Отменить
        </AppLink>
        <Button variant="filled" isLoading={isLoadingUpdate}>
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default EditWishForm;
