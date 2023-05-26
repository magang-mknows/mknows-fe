import { FC, ReactElement, Fragment, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { z } from "zod";
import { Menu, Transition } from "@headlessui/react";

import {
  TextField,
  SelectField,
  UploadField,
  Button,
} from "@mknows-frontend-services/components/atoms";

import { useProfile, useUpdateUserProfile } from "./hooks";

import userProfileImg from "../../assets/cewe-cantik.webp";
import camera from "../../assets/camera-ojan.webp";

export const EditProfileModule: FC = (): ReactElement => {
  const { data, refetch } = useProfile();

  const { mutate, isLoading } = useUpdateUserProfile();

  const userData = data?.data?.user;

  const options = [
    { id: 1, value: "L", label: "Laki-Laki" },
    { id: 2, value: "P", label: "Perempuan" },
  ];

  const validationSchema = z.object({
    avatar: z.any().optional(),
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    full_name: z.string().min(1, { message: "Nama lengkap harus diisi" }),
    phone_number: z.string().min(1, { message: "Nomor handphone harus diisi" }),
    gender: z.string().min(1, { message: "Gender harus dipilih" }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
      full_name: "",
      phone_number: "",
      gender: "",
    },
  });
  const onCancel = () => reset(userData);

  const onSubmit = handleSubmit(async (data) => {
    await mutate(data);
    await refetch();
    await onCancel();
  });

  useEffect(() => {
    reset(userData);
  }, [userData]);

  return (
    <div className="justify-start w-full h-full px-20 bg-neutral-100 dark:bg-black ">
      <div className="font-semibold text-[20px] w-full justify-start mb-[12px] lg:mb-[48px] mt-[30px]">
        Profile
      </div>
      <div className="flex flex-col lg:flex-row w-full mb-[30px]">
        <div className="w-full lg:w-[600px] lg:h-[50%] space-y-2 justify-center dark:bg-gray-900 bg-white rounded-lg my-2 lg:my-0">
          <div className="p-4 flex flex-col gap-y-4">
            <Button href="/profile" type="button">
              View Profile
            </Button>
            <Button href="/profile" type="button">
              Edit Profile
            </Button>
            <Button href="/profile" type="button">
              CV & Portofolio
            </Button>
            <Button type="button" href="profile/reset-password">
              Reset Password
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full mx-0 bg-white rounded-lg dark:bg-gray-900 lg:mx-9">
          <div className="flex flex-col mx-9">
            <div className="font-semibold text-[20px] mt-9 ">Edit Profile</div>
            <div className="relative w-full my-[16px] border-y">
              <div className="flex justify-center py-5 ">
                <div>
                  <form className="h-fit items-center flex flex-col">
                    <Image
                      src={userData?.avatar ?? userProfileImg}
                      alt="user profile img"
                      className="md:w-[100px] rounded-full md:h-[100px] w-[75px] h-[75px] z-20"
                      width={70}
                      height={70}
                    />
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button className="absolute items-center top-[-40px] bottom-[4px] rounded-full md:w-[32px] w-[26px] h-[26px] left-10 flex justify-center bg-yellow-100 z-20">
                        <Image src={camera} alt="camera" className="w-auto" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg left-20 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <UploadField name={"avatar"} control={control} variant={"md"} />
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    <div className="flex items-center flex-col justify-center">
                      <p className="text-lg font-semibold">{userData?.full_name}</p>
                      <p className="text-[#737373] px-4">{userData?.role}</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit}>
              <div className="flex flex-col my-4 gap-x-4 lg:flex-row">
                <div className="grid justify-between w-full grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <TextField
                    control={control}
                    placeholder="Masukkan Email"
                    label="Email"
                    type={"email"}
                    name="email"
                    variant={"md"}
                    disabled
                  />
                  <SelectField
                    placeholder="Pilih Jenis Kelamin"
                    control={control}
                    label="Jenis Kelamin"
                    options={options}
                    name={"gender"}
                    variant={"md"}
                  />
                  <TextField
                    control={control}
                    placeholder="Masukkan Nama Lengkap"
                    label="Nama Lengkap"
                    type={"text"}
                    name="full_name"
                    variant={"md"}
                    status={errors.full_name ? "error" : undefined}
                    message={errors.full_name?.message}
                  />
                  <TextField
                    control={control}
                    placeholder="Masukkan Nomor Handphone"
                    label="Nomor Handphone"
                    type={"number"}
                    name="phone_number"
                    status={errors.phone_number ? "error" : undefined}
                    variant={"md"}
                    message={errors.phone_number?.message}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-x-3 w-full my-2 lg:justify-end">
                <Button
                  type={"button"}
                  onClick={onCancel}
                  loading={isLoading ? "Sedang Mereset" : undefined}
                  className="text-white cursor-pointer font-[700] bg-error-500 rounded-lg p-3"
                >
                  Batalkan
                </Button>
                <Button
                  type={"submit"}
                  loading={isLoading ? "Sedang Menyimpan" : undefined}
                  disabled={!isValid}
                  className="text-white disabled:bg-neutral-400 cursor-pointer font-[700] bg-primary-500 rounded-lg p-3"
                >
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
