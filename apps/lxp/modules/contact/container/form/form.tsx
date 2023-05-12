import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mknows-frontend-services/components/atoms';

export const ContactForm = () => {
  const validationSchema = z.object({
    name: z.string().min(1, { message: 'Masukan Nama Anda' }),
    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
    question: z.string().min(1, { message: 'Masukan pertanyaan Anda' }),
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
      name: '',
      email: '',
      question: '',
    },
  });

  return (
    <form className="w-full flex flex-col ">
      <section className="flex flex-col gap-2 mb-4 text-base">
        <TextField
          type="text"
          variant="sm"
          control={control}
          name={'name'}
          placeholder="Masukan Nama"
          label="Name"
          className="!border-[0.5px] !border-neutral-500 !rounded-md px-3 py-3 text-xs !ring-0 "
        />
        <TextField
          type="email"
          variant="sm"
          control={control}
          name={'email'}
          placeholder="Masukan Email"
          label="Email"
          className="!border-[0.5px] !border-neutral-500 !rounded-md px-3 py-3 text-xs !ring-0 "
        />
        <TextField
          type="text"
          variant="sm"
          control={control}
          name={'question'}
          placeholder="Masukan Pertanyaan"
          label="Pertanyaan"
          isTextArea={true}
          className="!border-[0.5px] !border-neutral-500 !rounded-md px-3 py-3 text-xs !ring-0 "
        />
      </section>
      <Button
        type="submit"
        className="disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 w-full text-sm py-4 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 "
      >
        <h1>Kirim</h1>
      </Button>
    </form>
  );
};
