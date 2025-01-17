import Input from "@/shared/ui/input";
import Textarea from "@/shared/ui/textarea";
import Button from "@/shared/ui/button";
import { AppLink } from "@/shared/ui/link";
import { RoutePath } from "@/app/config/routes";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddWish } from "@/entities/wish";
import { useNavigate } from "react-router";
import { FormData } from "../../model/type";

const AddWishForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { handleAddWish, isLoading, isSuccess } = useAddWish();

  if (isSuccess) {
    navigate(RoutePath.WISHLIST);
  }

  const submit: SubmitHandler<FormData> = (data) => {
    handleAddWish(data);
  };

  const onSubmit = handleSubmit(submit);

  return (
    <form onSubmit={onSubmit}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <Input
          label="Название"
          placeholder="Введите название"
          id="title"
          required
          error={errors.title?.message}
          {...register("title", { required: "Пожалуйста, введите название" })}
        />
        <Input
          label="Ссылка на подарок"
          placeholder="Вставьте ссылку, где можно купить подарок"
          id="link"
          {...register("srcLink")}
        />
        <Input
          label="Ссылка на картинку"
          placeholder="Вставьте ссылку на изображение подарка"
          id="image"
          {...register("imgLink")}
        />
        <Input
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
        <Button variant="filled" isLoading={isLoading}>
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default AddWishForm;
