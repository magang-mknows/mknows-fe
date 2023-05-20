import { FC, ReactElement, useState } from 'react';
import {
  Button,
  TextField,
  Checkbox,
} from '@mknows-frontend-services/components/atoms';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from './hooks';

const LoginModules: FC = (): ReactElement => {
  const navigate = useNavigate();
  const validationSchema = z.object({
    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
    password: z.string().min(1, { message: 'Password harus diisi' }),
    remember: z.boolean().optional(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { control, formState, handleSubmit } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const { mutate, isLoading } = useLogin();
  const [getError, setError] = useState<string | undefined>('');

  const onSubmit = handleSubmit((data) => {
    // navigate('/dashboard/home');
    mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          navigate('/dashboard/home');
          console.log('berhasil masuk');
        },
        onError: (e) => {
          setError(e.response?.data.message);
        },
      }
    );
  });

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white items-center justify-center p-6 shadow-gray-300 shadow-lg  w-[400px] h-auto rounded-sm overflow-hidden"
    >
      <h1 className="text-primary-base text-center font-[600] font-sans text-5xl">
        Masuk
      </h1>
      <p className="text-base text-gray-400 text-center">
        Silahkan masuk dengan email dan kata sandi anda
      </p>
      <div className="flex bg-error-100 rounded-md text-error-300 w-full justify-center my-2">
        {getError}
      </div>
      <TextField
        type="email"
        label="Email"
        name="email"
        control={control}
        placeholder="msdqn@psu.org"
        status={formState.errors.email ? 'error' : 'none'}
        message={formState.errors.email?.message}
        variant="md"
        required
        rules={{
          required: true,
        }}
      />
      <TextField
        type="password"
        label="Password"
        name="password"
        required
        status={formState.errors.password ? 'error' : 'none'}
        message={formState.errors.password?.message}
        rules={{
          required: true,
        }}
        placeholder="Masukkan Password Anda"
        control={control}
        variant="md"
      />
      <Checkbox
        name="remember"
        variant="md"
        control={control}
        label="Ingatkan Saya"
      />
      <div className="flex flex-col mt-6">
        <Button
          type="submit"
          loading={isLoading ? 'Sedang Masuk...' : undefined}
          className="flex disabled:bg-neutral-200 justify-center w-full p-3 rounded-md border bg-primary-400 text-white font-bold"
          disabled={!formState.isValid}
        >
          Masuk
        </Button>
      </div>
    </form>
  );
};

export default LoginModules;
