import { FC, ReactElement, Fragment } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { z } from 'zod';
// import { Menu, Transition } from '@headlessui/react';

import {
  TextField,
  SelectField,
  UploadField,
  Button,
} from '@mknows-frontend-services/components/atoms';

import { useProfile, useUpdateUserProfile } from './hooks';
import { TAvatarPayload, TProfilePayload } from './types';

import userProfileImg from '@/assets/profile/profile-user-img.svg';
import camera from '@/assets/profile/camera-1.svg';

const EditProfile: FC = (): ReactElement => {
  const { data } = useProfile();

  const { mutate, isLoading } = useUpdateUserProfile();

  const userData = data?.data?.user;

  const options = [
    { id: 1, value: 'L', label: 'Laki-Laki' },
    { id: 2, value: 'P', label: 'Perempuan' },
  ];

  const MAX_FILE_SIZE = 3000000;
  const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'application/pdf',
  ];

  const validationSchema = z.object({
    avatar: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        'Harus ada file yang di upload.'
      )
      .refine(
        (files: File[]) =>
          files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        'Ukuran maksimun adalah 3mb.'
      )
      .refine(
        (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
        'hanya menerima .jpg, .jpeg, dan .webp.'
      ),

    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
    user_name: z.string().min(1, { message: 'User Name harus diisi' }),
    full_name: z.string().min(1, { message: 'Nama lengkap harus diisi' }),
    phone_number: z.string().min(1, { message: 'Nomor handphone harus diisi' }),
    gender: z.any(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      email: userData?.email,
      user_name: 'gaada username tlol',
      full_name: userData?.full_name,
      phone_number: userData?.phone_number,
      gender: userData?.gender,
      avatar: userData?.avatar,
    },
  });

  const onSubmit = handleSubmit((PayloadData) => {
    try {
      mutate(PayloadData as TProfilePayload);
    } catch (err) {
      // throw handleError(err);
    }
  });

  // const submitChange = handleSubmit((AvatarPayload) => {
  //   try {
  //     mutate(AvatarPayload as TAvatarPayload);
  //   } catch (err) {
  //     throw handleError(err);
  //   }
  // });

  return (
    <div className="justify-start w-full h-full px-20 bg-neutral-100 dark:bg-black ">
      <div className="font-semibold text-[20px] w-full justify-start mb-[12px] lg:mb-[48px] mt-[30px]">
        Profile
      </div>
      <div className="flex flex-col lg:flex-row w-full mb-[30px]">
        <div className="w-full lg:w-[600px] lg:h-[50%] space-y-2 justify-center dark:bg-gray-900 bg-white rounded-lg my-2 lg:my-0">
          <div className="mx-4 my-4 ">
            <button className="bg-primary-100 dark:bg-[#222529] !text-[#106FA4] font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]">
              Edit Profile
            </button>
            <button
              className="!text-[#737373] dark:bg-[#222529] bg-white font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
              // to="ubah-password"
            >
              Reset Password
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full mx-0 bg-white rounded-lg dark:bg-gray-900 lg:mx-9">
          <div className="flex flex-col mx-9">
            <div className="font-semibold text-[20px] mt-9 ">Edit Profile</div>
            <div className="relative w-full my-[16px] border-y">
              <div className="flex justify-center py-5 ">
                <div>
                  <form>
                    <img
                      src={userData?.avatar}
                      alt="user profile img"
                      className="w-[100px] h-[100px] z-20"
                    />
                    {/* 
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="absolute ml-[66px] top-[-40px] bottom-[4px] rounded-full w-[32px] flex justify-center bg-yellow-100 h-[32px] z-50">
                          <Image
                            src={camera}
                            alt="camera"
                            className="w-[15px] h-[11px] mt-[10px]"
                          ></Image>
                        </Menu.Button>
                      </div>
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
                            <UploadField name={'avatar'} control={control} />
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu> */}

                    <div className="my-2">
                      <p className="text-lg font-semibold">
                        {userData?.full_name}
                      </p>
                      <p className="text-[#737373] px-4">{userData?.role}</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit}>
              <div className="flex flex-col my-4 gap-x-4 lg:flex-row">
                <div className="flex flex-col w-full mt-0 mr-0 gap-y-2 lg:mr-2 lg:mt-3">
                  <TextField
                    control={control}
                    placeholder="Masukkan Email"
                    label="Email"
                    type={'email'}
                    name="email"
                    className="!h-200px !mt-1 !px-3 !py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block !w-full !rounded-md sm:text-sm focus:ring-1"
                    variant={'lg'}
                  />
                  <TextField
                    control={control}
                    placeholder="Masukkan Nama Lengkap"
                    label="Nama Lengkap"
                    type={'text'}
                    name="full_name"
                    className="!h-200px !mt-1 !px-3 !py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block !w-full !rounded-md sm:text-sm focus:ring-1"
                    variant={'lg'}
                  />
                </div>

                <div className="flex flex-col gap-y-2 mr-0 lg:mr-2 w-full mt-0 lg:mt-[26px]">
                  <SelectField
                    control={control}
                    label="Jenis Kelamin"
                    className="mt-1 px-3 py-2 lg:pt-[-10px] bg-white dark:bg-[#222529] dark:border-2 shadow-sm border-slate-300 placeholder-slate-400 block w-full rounded-md sm:text-sm !h-200px border  focus:outline-none focus:border-sky-500 focus:ring-sky-500  focus:ring-1"
                    defaultValue="Laki-Laki"
                    options={options}
                    value={''}
                    name={'gender'}
                    variant={'lg'}
                  />

                  <TextField
                    control={control}
                    placeholder="Masukkan Nomor Handphone"
                    label="Nomor Handphone"
                    type={'text'}
                    name="phone_number"
                    className="!h-200px !mt-1 !px-3 !py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block !w-full !rounded-md sm:text-sm focus:ring-1"
                    variant={'lg'}
                  />
                  <div className="flex justify-center w-full lg:justify-end">
                    <Button
                      type={'submit'}
                      disabled={!isValid}
                      className="rounded-[8px] !w-[95px] !h-[36px]  disabled:bg-gray-400 disabled:text-gray-200"
                    >
                      {isLoading ? 'Sedang Masuk...' : 'Simpan'}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
