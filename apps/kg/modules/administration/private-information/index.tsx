import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { optionsGender, optionsLastEducation } from '../constant';
import { usePrivateInformationStatus, useAdministrationStatus } from '../hooks';
import { Accordion } from '@mknows-frontend-services/components/molecules';
import {
  SelectField,
  TextField,
  Button,
} from '@mknows-frontend-services/components/atoms';

export const PrivateInformation: FC = (): ReactElement => {
  const validationSchema = z.object({
    gender: z.string().min(1, { message: 'Jenis kelamin harus diisi' }),
    phone: z.string().min(1, { message: 'Nomor handphone harus diisi' }),
    birthdate: z.string().min(1, { message: 'Tanggal lahir harus diisi' }),
    birthplace: z.string().min(1, { message: 'Tempat lahir harus diisi' }),
    address: z.string().min(1, { message: ' Alamat harus diisi' }),
    last_education: z
      .string()
      .min(1, { message: ' Pendidikan terakhir harus diisi' }),
    nim: z.string().optional(),
    university: z.string().optional(),
    major: z.string().optional(),
    semester: z.string().optional(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { setPrivateStatus, getPrivateStatus } = usePrivateInformationStatus();
  const { setAdministrationStatus } = useAdministrationStatus();

  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      gender: '',
    },
  });

  const onSubmit = handleSubmit((PayloadData) => {
    try {
      setPrivateStatus(true);
      setAdministrationStatus('onProgress');
    } catch (err) {
      setPrivateStatus(false);
    }
  });

  console.log(watch());

  return (
    <Accordion
      idAccordion={getPrivateStatus ? '' : 'privat-information'}
      title="Informasi Pribadi"
      disabled={getPrivateStatus ? true : false}
    >
      <form onSubmit={onSubmit}>
        <div className="lg:flex w-full gap-[55px]">
          <div className="w-full">
            <div className="form-label">
              <SelectField
                control={control}
                label="Jenis Kelamin"
                name="gender"
                defaultValue="Pilih jenis kelamin"
                required={true}
                options={optionsGender}
                variant={'lg'}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                type="text"
                label={'Tempat Lahir'}
                name="birthplace"
                placeholder={'Masukkan tempat lahir'}
                required
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                type="text"
                label={'Alamat Lengkap'}
                name={'address'}
                placeholder={'Masukkan alamat lengkap'}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                type={'text'}
                label={'NIM atau NPM (optional)'}
                name={'nim'}
                placeholder={'masukkan NIM atau NPM (optional)'}
                required={false}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                type={'text'}
                label={'Program Studi (optional)'}
                name={'major'}
                placeholder={'Masukkan Program Studi (optional)'}
                required={false}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
          </div>
          <div className="w-full">
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                type={'number'}
                label={'Nomor Handphone'}
                name={'phone'}
                placeholder={'Masukkan nomor handphone'}
                required={true}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                type={'text'}
                label={'Tanggal Lahir'}
                name={'birthdate'}
                placeholder={'Masukkan tanggal lahir'}
                required={true}
              />
            </div>
            <div className="form-label">
              <SelectField
                control={control}
                label="Pendidikan Terakhir"
                name="last_education"
                defaultValue="Pilih pendidikan terakhir"
                required={true}
                options={optionsLastEducation}
                variant={'lg'}
              />
            </div>
            <div className="form-label">
              <TextField
                control={control}
                type="text"
                variant="lg"
                label={'Universitas Asal (optional)'}
                name={'university'}
                placeholder={'Masukkan universitas asal'}
                required={false}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                type="text"
                label={'Semester (optional)'}
                name={'semester'}
                placeholder={'Masukkan pendidikan terakhir'}
                required={false}
              />
            </div>
            <div className="flex w-full my-8 justify-end">
              <Button
                disabled={!isValid}
                className="my-4 w-[211px] rounded-[8px] disabled:bg-neutral-base disabled:text-neutral-200 bg-primary-base text-white font-bold p-3 text-1xl"
                type={'submit'}
              >
                Simpan Informasi Pribadi
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Accordion>
  );
};
