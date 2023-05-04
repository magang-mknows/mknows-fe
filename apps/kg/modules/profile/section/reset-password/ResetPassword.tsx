import { FC, ReactElement } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mknows-frontend-services/components/atoms';

const ResetPassword: FC = (): ReactElement => {
  const validationSchema = z.object({
    oldPassword: z.string().min(1, { message: 'Password Lama harus diisi' }),
    newPassword: z.string().min(1, { message: 'Password baru harus diisi' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Konfirmasi password baru harus diisi' }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
  });
  return (
    <div className="justify-center w-full px-20 lg:justify-start bg-neutral-100 dark:bg-black">
      <div className="font-semibold text-[20px] w-full justify-center lg:justify-start mb-[12px] lg:mb-[48px] mt-[30px]">
        Profile
      </div>
      <div className="flex flex-col lg:flex-row w-full mb-[30px]">
        <div className="w-full lg:w-[600px] dark:bg-gray-900 bg-white rounded-lg h-[50%] my-2 lg:my-0">
          <div className="mx-4 my-4 space-y-4 lg:space-y-2">
            <Button
              href="/profile"
              type="button"
              className="flex !items-center !justify-start !text-[#737373] dark:bg-[#222529] bg-white font-semibold text-sm !w-[96%] pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
            >
              View Profile
            </Button>
            <Button
              href="/profile"
              type="button"
              className="flex !items-center !justify-start !text-[#737373] dark:bg-[#222529] bg-white font-semibold text-sm !w-[96%] pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
            >
              Edit Profile
            </Button>
            <Button
              href="/profile"
              type="button"
              className="flex !items-center !justify-start !text-[#737373] dark:bg-[#222529] bg-white font-semibold text-sm !w-[96%] pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
            >
              CV & Portofolio
            </Button>
            <Button
              type="button"
              href="profile/reset-password"
              className="bg-primary-100 dark:bg-[#222529] !text-[#106FA4] font-semibold text-sm !w-[96%] flex !items-center !justify-start pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
            >
              Reset Password
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full mx-0 bg-white rounded-lg lg:mx-9 dark:bg-gray-900">
          <div className="flex flex-col mx-9">
            <div className="font-semibold text-[20px] mt-9 dark:text-white">
              Reset Password
            </div>
            <form>
              <div className="relative w-full my-[16px] border-y px-3 py-6 ">
                <TextField
                  control={control}
                  placeholder="Masukkan Password lama"
                  label="Password Lama"
                  labelClassName="dark:text-white"
                  type={'password'}
                  name="oldPassword"
                  className="mt-1 dark:bg-blacks bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block !w-full !rounded-md sm:text-sm focus:ring-1"
                  variant={'lg'}
                />
              </div>

              <div className="flex flex-col w-full px-3 rounded-md gap-y-4 focus:ring-1 ">
                <TextField
                  control={control}
                  placeholder="Masukkan Password lama"
                  label="Password Baru"
                  labelClassName="dark:text-white"
                  type={'password'}
                  name="newPassword"
                  className="mt-1  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block !w-full !rounded-md sm:text-sm focus:ring-1"
                  variant={'lg'}
                />
                <TextField
                  control={control}
                  placeholder="Konfirmasi Password Baru"
                  label="Konfirmasi Password"
                  type={'password'}
                  name="confirmPassword"
                  className="mt-1  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block !w-full !rounded-md sm:text-sm focus:ring-1"
                  variant={'lg'}
                />

                <div className="flex justify-center w-full my-8 lg:justify-end">
                  <Button
                    type="button"
                    className="text-semibold !w-[153px] !h-[36px] !rounded-lg disabled:bg-gray-400 disabled:text-gray-200"
                    disabled={!isValid}
                  >
                    Reset Password
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
