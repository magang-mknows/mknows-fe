import { AiFillCamera } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { editPhotoState } from "./store";
import {
  TextField,
  UploadField,
  SelectField,
  Button,
} from "@mknows-frontend-services/components/atoms";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUserData } from "./hook";
import { useEffect } from "react";
import Image from "next/image";
import { ImSpinner5 } from "react-icons/im";
import { useProfile } from "../../hooks";
import { useGetImagePreview } from "@mknows-frontend-services/utils";

export const EditProfileSection = () => {
  const [isEditPhoto, setEditPhoto] = useRecoilState(editPhotoState);

  const MAX_FILE_SIZE = 3000000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/webp", "image/png"];

  const genders = [
    { id: 1, value: "LAKI-LAKI", label: "Laki-Laki" },
    { id: 2, value: "PEREMPUAN", label: "Perempuan" },
  ];

  const profileDataValidationSchema = z.object({
    avatar: z.union([
      z.string(), //allow profile link from API so its still valid at first load
      z
        .any()
        .refine(
          (files: File[]) => files !== undefined && files?.length >= 1,
          "Harus ada file yang di upload.",
        )
        .refine(
          (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
          "Ukuran maksimun adalah 3mb.",
        )
        .refine(
          (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
          "hanya menerima .jpg, .jpeg, dan .webp.",
        ),
    ]),

    full_name: z.string().min(1, { message: "Nama lengkap harus diisi" }),
    phone_number: z.string().min(1, { message: "Nomor handphone harus diisi" }),
    gender: z.string(),
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
  });

  type ProfileDataValidationSchema = z.infer<typeof profileDataValidationSchema>;

  const { data } = useProfile();
  const userData = data?.data;

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<ProfileDataValidationSchema>({
    resolver: zodResolver(profileDataValidationSchema),
    mode: "all",
    defaultValues: {
      avatar: undefined,
      full_name: "",
      phone_number: "",
      gender: "",
    },
  });

  const { preview, onSelectFile } = useGetImagePreview();

  const { mutate, isLoading } = useUpdateUserData();

  const handleSubmitData = handleSubmit((data) => {
    console.log(data);
    mutate(
      {
        ...data,
        full_name: data?.full_name,
        phone_number: data?.phone_number,
        gender: data?.gender,
        avatar: data?.avatar[0],
      },
      {
        onSuccess: () => {
          console.log("data terupdate");
        },
      },
    );
  });

  useEffect(() => {
    reset(userData?.dataUser);
  }, [reset, userData]);

  return (
    <main className="bg-neutral-50 px-8 pt-8 pb-14 rounded-md shadow-sm min-h-[80vh]">
      <header className="mb-4">
        <h1 className="text-xl font-bold text-neutral-800">Edit Profile</h1>
      </header>
      <main className="w-full">
        <section className="grid w-full py-16 place-items-center">
          <figure className="bg-neutral-200 h-[140px] border-2 border-neutral-100 w-[140px] rounded-full relative">
            {userData?.dataUser?.avatar !== null && userData?.dataUser?.avatar !== undefined ? (
              <Image
                src={preview ? (preview as string) : userData?.dataUser?.avatar}
                alt="avatar"
                height={100}
                width={"100"}
                loading="eager"
                priority
                className="h-full w-full rounded-full  object-cover  border-[1px] border-neutral-100"
              />
            ) : null}
            <section className="absolute bottom-0 right-2">
              <div
                className="grid rounded-full shadow-md cursor-pointer bg-version2-300 w-9 h-9 place-items-center"
                onClick={() => {
                  setEditPhoto(!isEditPhoto);
                }}
              >
                <AiFillCamera className="text-xl text-neutral-200" />
              </div>
              <div
                className={`${
                  isEditPhoto ? "absolute" : "hidden"
                }  flex flex-col border-[1px] h-[4.3rem] overflow-hidden  border-neutral-100 rounded-md  transition-all duration-100 ease-in-out shadow-sm w-36 text-xs mt-2 `}
              >
                <p
                  className="text-neutral-700 cursor-pointer bg-neutral-50 hover:bg-neutral-100 px-4 py-2 border-b-[0.5px] border-neutral-200"
                  onClick={() => {
                    setEditPhoto(false);
                  }}
                >
                  Ambil Foto
                </p>
                <label
                  htmlFor="avatar"
                  className="px-4 py-2 cursor-pointer text-neutral-700 bg-neutral-50 hover:bg-neutral-100"
                  onClick={() => {
                    setEditPhoto(false);
                  }}
                >
                  Unggah Foto
                  <UploadField
                    variant="sm"
                    name={"avatar"}
                    control={control}
                    className="hidden"
                    onChange={onSelectFile}
                  />
                </label>
              </div>
            </section>
          </figure>
        </section>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmitData}>
          <TextField
            labelClassName="!text-sm text-left"
            disabled
            type="email"
            variant="md"
            control={control}
            name={"email"}
            placeholder="bangrudy@gmail.com"
            label="Email"
            status={errors.email ? "error" : "none"}
            message={errors.email?.message}
            className="!h-[40px] text-sm !rounded-[8px] !border-[0.5px] !border-neutral-200 disabled:!bg-neutral-100 disabled:!text-neutral-500"
          />
          <SelectField
            placeholder="Laki-Laki"
            control={control}
            label="Jenis Kelamin"
            options={genders}
            name={"gender"}
            variant={"md"}
            labelClassName="text-sm"
            styleText="!text-sm"
            className="!h-[40px] !rounded-[8px] !text-neutral-800"
          />
          <TextField
            labelClassName="!text-sm text-left"
            type="text"
            variant="md"
            control={control}
            name={"full_name"}
            placeholder="Mamang Racing"
            label="Nama Lengkap"
            status={errors.full_name ? "error" : "none"}
            message={errors.full_name?.message}
            className="!h-[40px] text-sm !rounded-[8px] !border-[0.5px] !border-neutral-200"
          />
          <TextField
            labelClassName="!text-sm text-left"
            type="number"
            variant="md"
            control={control}
            name={"phone_number"}
            placeholder="089277771623"
            label="Nomer Handphone"
            status={errors.phone_number ? "error" : "none"}
            message={errors.phone_number?.message}
            className="!h-[40px] text-sm !rounded-[8px] !border-[0.5px] !border-neutral-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <section className="flex justify-end w-full col-span-2">
            <Button
              disabled={!isValid}
              type="submit"
              className="disabled:bg-version2-200/70 disabled:border-none bg-version2-400 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 text-sm h-10 w-32"
            >
              {isLoading ? (
                <ImSpinner5 className="animate-spin duration-200 delay-150" />
              ) : (
                <h1>Simpan</h1>
              )}
            </Button>
          </section>
        </form>
      </main>
    </main>
  );
};
