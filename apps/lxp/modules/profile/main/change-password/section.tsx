import { Button, TextField } from '@mknows-frontend-services/components/atoms';
import { FC, ReactElement } from 'react';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const ChangePasswordSection: FC = (): ReactElement => {
  const validationSchema = z
    .object({
      old_password: z.string().min(1, { message: 'Password harus diisi' }),
      new_password: z.string().min(1, { message: 'Password harus diisi' }),
      new_password_confirmation: z
        .string()
        .min(1, { message: 'Konfirmasi kata sandi harus disisi' }),
    })
    .refine((data) => data.new_password === data.new_password_confirmation, {
      message: 'Konfirmasi kata sandi tidak valid',
      path: ['password_confirmation'],
    });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      old_password: '',
      new_password: '',
      new_password_confirmation: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <main className="bg-neutral-50 px-8 pt-8 pb-14 rounded-md shadow-sm min-h-[80vh]">
      <header className="mb-4 border-b-2 border-b-neutral-100 pb-4">
        <h1 className="text-xl font-bold text-neutral-800">Change Password</h1>
      </header>
      <form onSubmit={onSubmit}>
        <TextField
          labelClassName="!text-sm text-left"
          type="password"
          variant="md"
          control={control}
          name={'old_password'}
          placeholder="Masukan Password Lama"
          label="Password Lama"
          status={errors.old_password ? 'error' : 'none'}
          message={errors.old_password?.message}
          className="!h-[40px] text-sm !rounded-[8px] !border-2 !border-[#D4D4D4] mb-2 "
        />
        <span className="w-full border-b-2 border-b-neutral-100 h-2 block mb-6"></span>

        <TextField
          labelClassName="!text-sm text-left"
          type="password"
          variant="md"
          control={control}
          name={'new_password'}
          placeholder="Masukan Password Baru"
          label="Password Baru"
          status={errors.new_password ? 'error' : 'none'}
          message={errors.new_password?.message}
          className="!h-[40px] text-sm !rounded-[8px] !border-2 !border-[#D4D4D4] mb-2"
        />
        <TextField
          labelClassName="!text-sm text-left"
          type="password"
          variant="md"
          control={control}
          name={'new_password_confirmation'}
          placeholder="Konfirmasi Password Baru"
          label="Konfirmasi Password"
          status={errors.new_password_confirmation ? 'error' : 'none'}
          message={errors.new_password_confirmation?.message}
          className="!h-[40px] text-sm !rounded-[8px] !border-2 !border-[#D4D4D4] mb-4"
        />
        <section className="w-full flex justify-end col-span-2">
          <Button
            disabled={!isValid}
            type="submit"
            className="disabled:bg-version2-200/70 disabled:border-none bg-version2-400 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 text-sm py-2 w-36"
          >
            <h1>Reset Password</h1>
          </Button>
        </section>
      </form>
    </main>
  );
};
