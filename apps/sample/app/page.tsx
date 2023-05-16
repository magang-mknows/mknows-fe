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
import { useCreateFaculty } from '../lib/faculty/hooks';

const RootPage: NextPage = (): ReactElement => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

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
  });

  type AuthValidationSchema = z.infer<typeof authValidationSchema>;

  type FacultyValidationSchema = z.infer<typeof facultyValidationSchema>;

  const { data: session } = useSession();

  const { data: profile } = useProfile();

  const {
    control: controlFaculty,
    formState: { isValid: facultyIsValid, errors: facultyError },
    handleSubmit: facultySubmit,
  } = useForm<FacultyValidationSchema>({
    mode: 'all',
    resolver: zodResolver(facultyValidationSchema),
    defaultValues: {
      name: '',
      thumbnail: undefined,
    },
  });

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

  const { mutate } = useCreateFaculty();

  const onFacultySubmit = facultySubmit((data) => {
    console.log(data);
    mutate({
      ...data,
      thumbnail: data.thumbnail[0] as File,
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
            <form onSubmit={onFacultySubmit} className="w-full flex-col flex">
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
                message={facultyError.thumbnail?.message as string}
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
