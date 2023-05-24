import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Button,
  TextField,
  UploadDragbleField,
} from '@mknows-frontend-services/components/atoms';
import { RxCross1 } from 'react-icons/rx';
import { RiSendPlaneFill } from 'react-icons/ri';
import { useSetRecoilState } from 'recoil';
import { isModalOpen } from '../../../store';
import { useCreateDiscussion } from './hooks';
import { TDiscussionPayload } from './types';

export const PostCreateModal: FC = (): ReactElement => {
  type ValidationSchema = z.infer<typeof validationSchema>;
  const setOptionOpen = useSetRecoilState(isModalOpen);
  const { mutate, isLoading } = useCreateDiscussion();

  const MAX_FILE_SIZE = 3 * 1024 * 1024;
  const ACCEPTED_MEDIA_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'video/mp4',
  ];

  const validationSchema = z.object({
    title: z
      .string()
      .min(5, { message: 'Min. 5 Karakter' })
      .max(250, { message: 'Maks. 250 Karakter' }),
    content: z.string().max(1000, { message: 'Isi diskusi melebihi batas' }),
    images: z.optional(
      z
        .any()
        .refine(
          (files: File) => files !== undefined && files?.size <= MAX_FILE_SIZE,
          'Ukuran maksimum adalah 3mb.'
        )
        .refine(
          (files: File) => ACCEPTED_MEDIA_TYPES.includes(files?.type),
          'hanya menerima .jpg, .jpeg, .png, .webp, dan .mp4.'
        )
    ),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      title: '',
      content: '',
      images: undefined,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      mutate(data as TDiscussionPayload);
      setOptionOpen(false);
      reset(data);
    } catch (err) {
      console.log('Gagal Mengunggah');
    }
  });

  return (
    <section className="bg-neutral-50 min-w-[500px]">
      <header className=" flex justify-center border-b-[0.5px] pt-2 pb-4 border-neutral-300  relative">
        <h1 className="text-lg font-bold text-neutral-900">
          Buat Diskusi Baru
        </h1>
        <RxCross1
          className="absolute right-0 text-xl cursor-pointer text-neutral-400"
          onClick={() => {
            setOptionOpen(false);
          }}
        />
      </header>
      <main className="px-4 py-8">
        <form onSubmit={onSubmit}>
          <TextField
            required
            labelClassName="!text-sm text-left !font-normal"
            type="text"
            variant="md"
            control={control}
            name={'title'}
            placeholder="Ketik judul diskusi kamu"
            label="Judul Diskusi"
            className="!h-[46px] text-sm !rounded-[8px] !border-[1px] !border-[#D4D4D4]"
            status={errors.title ? 'error' : undefined}
            message={errors.title?.message}
          />
          <p className="mb-5 -mt-2 text-xs text-neutral-400">
            Maks. 250 karakter
          </p>

          <h1 className="mb-2 text-sm text-left">Isi Diskusi</h1>
          <section className="border-[1px] border-[#D4D4D4] rounded-md">
            <TextField
              labelClassName="!text-sm text-left !font-normal"
              type="text"
              variant="md"
              control={control}
              name={'content'}
              placeholder="Mau diskusi apa hari ini?"
              className="h-[46px] !border-[0px] text-sm px-4 py-2"
              isTextArea={true}
              status={errors.content ? 'error' : undefined}
              message={errors.content?.message}
            />
            <section className="border-[1px] p-2 -mt-2 border-[#D4D4D4] rounded-md flex flex-col justify-center items-center  m-4 gap-2">
              <UploadDragbleField
                className="border-none min-h-[110px]"
                name={'images'}
                variant={'lg'}
                control={control}
                status={errors.images ? 'error' : undefined}
                // message={errors.images?.message}
              />
            </section>
          </section>
          <p className="mt-2 mb-4 text-xs text-neutral-400">
            Maks. 250 karakter
          </p>
          <section className="grid mt-2 place-items-end">
            <Button
              disabled={!isValid}
              type="submit"
              className="relative z-10 flex items-center justify-center gap-2 py-2 text-sm font-bold transition-colors duration-300 ease-in-out border-2 rounded-md border-version2-500 disabled:bg-neutral-300 bg-[#3EB449] text-neutral-100 hover:opacity-75 w-28"
            >
              <RiSendPlaneFill />
              <h1>{isLoading ? 'Sedang Mengirim' : 'Kirim'} </h1>
            </Button>
          </section>
        </form>
      </main>
    </section>
  );
};
