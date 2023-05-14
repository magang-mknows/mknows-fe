'use client';
import type { NextPage } from 'next';
import type { ReactElement } from 'react';
import {
  Button,
  TextField,
  UploadField,
} from '@mknows-frontend-services/components/atoms';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProfile } from '../lib/profile/hooks';

const RootPage: NextPage = (): ReactElement => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

  const authValidationSchema = z.object({
    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
    password: z.string().min(1, { message: 'Password harus diisi' }),
    remember: z.boolean().optional(),
  });

  const facultyValidationSchema = z.object({
    name: z.string().min(1, { message: 'Nama harus diisi' }),
    thumbnail: z
      .object({
        size: z.number(),
        type: z.string().refine((value) => ALLOWED_FILE_TYPES.includes(value), {
          message:
            'Tipe File tidak valid. Hanya JPEG, PNG, and GIF yang dizinkan.',
        }),
      })
      .refine((value) => value.size <= MAX_FILE_SIZE, {
        message: 'File Terlalu besar.',
      }),
  });

  type AuthValidationSchema = z.infer<typeof authValidationSchema>;

  type FacultyValidationSchema = z.infer<typeof facultyValidationSchema>;

  const { data: session } = useSession();

  const { data: profile } = useProfile();

  const {
    control: controlFaculty,
    formState: { isValid: facultyIsValid, errors: facultyError },
    watch,
  } = useForm<FacultyValidationSchema>({
    mode: 'all',
    resolver: zodResolver(facultyValidationSchema),
    defaultValues: {
      name: '',
      thumbnail: undefined,
    },
  });

  console.log(watch());

  const {
    control: controlAuth,
    formState: { isValid: authIsValid },
    handleSubmit: authSubmit,
  } = useForm<AuthValidationSchema>({
    resolver: zodResolver(authValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onAuthSubmit = authSubmit(async (data) => {
    await signIn('login', {
      email: data.email,
      password: data.password,
      redirect: false,
    });
  });

  return (
    <main className="flex gap-x-6 px-16 justify-center h-screen items-center w-full">
      <section className="flex flex-col items-center border-2 border-neutral-400 rounded-lg h-1/2 w-1/2 p-6">
        <div className="flex w-full justify-between">
          <h1 className="text-black text-4xl font-[700]">Auth Test</h1>
        </div>
        <div className="flex w-full px-16 items-center h-full">
          {!session ? (
            <form onSubmit={onAuthSubmit} className="w-full flex flex-col">
              <TextField
                label="Alamat Email"
                name={'email'}
                type={'email'}
                control={controlAuth}
                variant="lg"
                placeholder="Masukan email anda"
              />
              <TextField
                label="Kata Sandi"
                name={'password'}
                type={'password'}
                control={controlAuth}
                variant="lg"
                placeholder="Masukan password anda"
              />
              <Button
                disabled={!authIsValid}
                type={'submit'}
                className="w-auto h-auto p-4 rounded-lg bg-primary-300 font-[700] disabled:bg-neutral-400 text-white"
              >
                Masuk
              </Button>
            </form>
          ) : (
            <h1>Your Authenticated as {profile?.data?.user?.full_name}</h1>
          )}
        </div>
        <div className="flex"></div>
      </section>
      <section className="flex flex-col items-center border-2 border-neutral-400 rounded-lg h-1/2 w-1/2 p-6">
        <div className="flex w-full justify-between">
          <h1 className="text-black text-4xl font-[700]">Form Add Faculty</h1>
          {session && (
            <Button onClick={() => signOut()} type="button">
              Logout
            </Button>
          )}
        </div>
        <div className="flex items-center h-full">
          {session ? (
            <form className="w-full flex-col flex">
              <TextField
                label="Nama Lengkap"
                name={'name'}
                control={controlFaculty}
                variant="md"
                placeholder="Masukan nama anda"
                status={facultyError.name ? 'error' : 'none'}
                message={facultyError.name?.message}
              />
              <UploadField
                variant="md"
                label="Thumbnail"
                control={controlFaculty}
                name="thumbnail"
                status={facultyError.thumbnail ? 'error' : 'none'}
                message={facultyError.thumbnail?.message}
              />
              <Button
                disabled={!facultyIsValid}
                type={'submit'}
                className="w-auto h-auto p-4 rounded-lg bg-success-400 font-[700] disabled:bg-neutral-400 text-white"
              >
                Buat Fakultas
              </Button>
            </form>
          ) : (
            <h1 className="text-black text-4xl font-[700]">
              Need Authentication
            </h1>
          )}
        </div>
        <div className="flex"></div>
      </section>
    </main>
  );
};

export default RootPage;
