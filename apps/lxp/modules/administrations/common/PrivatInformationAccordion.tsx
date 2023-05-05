import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  usePrivateInformationStatus,
  useAdministrationStatus,
  useGetAllAdministration,
  usePrivateInformation,
} from '../hooks';
import { Accordion } from '@mknows-frontend-services/components/molecules';
import { Button, TextField } from '@mknows-frontend-services/components/atoms';

const PrivateInformationAccordion: FC = (): ReactElement => {
  const { data } = useGetAllAdministration();
  console.log('data', data);
  const validationSchema = z.object({
    fullname: z.string().min(1, { message: 'Nama lengkap harus diisi' }),
    nip: z.string().min(1, { message: ' NIP harus diisi' }),
    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
    department: z
      .string()
      .min(1, { message: 'Divisi / departemen harus diisi' }),
    companyName: z.string().min(1, { message: 'Nama Perusahaan harus diisi' }),
    leaderDivision: z
      .string()
      .min(1, { message: ' Kepala Divisi harus diisi' }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;
  const { mutate } = usePrivateInformation();
  const { setPrivateStatus, getPrivateStatus } = usePrivateInformationStatus();
  const { setAdministrationStatus } = useAdministrationStatus();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      companyName: '',
      email: '',
      leaderDivision: '',
      nip: '',
      fullname: '',
      department: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    try {
      mutate(
        {
          ...data,
        },
        {
          onSuccess: () => {
            setPrivateStatus(true);
            setAdministrationStatus('finished');
          },
        }
      );
    } catch (err) {
      setPrivateStatus(false);
    }
  });

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
              <TextField
                variant="md"
                control={control}
                type={'text'}
                label={'Nama Lengkap'}
                name={'fullname'}
                placeholder={'Masukkan nama lengkap'}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block  mb-2 dark:text-white text-sm font-medium text-gray-900 "
                status={errors.fullname ? 'error' : 'none'}
                message={errors.fullname?.message}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="md"
                control={control}
                type={'text'}
                label={'Nomor Induk Pegawai'}
                name={'nip'}
                placeholder={'masukkan NIP'}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
                status={errors.nip ? 'error' : 'none'}
                message={errors.nip?.message}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="md"
                control={control}
                type={'email'}
                label={'Alamat Email'}
                name={'email'}
                placeholder={'Masukkan alamat email'}
                required={true}
                status={errors.email ? 'error' : 'none'}
                message={errors.email?.message}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
              />
            </div>
          </div>
          <div className="w-full">
            <div className="form-label">
              <TextField
                variant="md"
                control={control}
                type={'text'}
                label={'Nama Perusahaan'}
                name={'companyName'}
                placeholder={'Masukkan Nama Perusahaan'}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
                status={errors.companyName ? 'error' : 'none'}
                message={errors.companyName?.message}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="md"
                control={control}
                type={'text'}
                label={'Divisi / Departemen'}
                name={'department'}
                placeholder={'Masukkan Divisi / Departemen'}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
                status={errors.department ? 'error' : 'none'}
                message={errors.department?.message}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="md"
                control={control}
                type={'text'}
                label={'Nama Kepala Divisi'}
                name={'leaderDivision'}
                placeholder={'Nama Kepala Divisi'}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 dark:text-white text-sm font-medium text-gray-900 "
                status={errors.leaderDivision ? 'error' : 'none'}
                message={errors.leaderDivision?.message}
              />
            </div>
            <div className="flex w-full my-8 justify-end">
              <Button
                className={`my-4 w-[211px] rounded-[8px] disabled:bg-gray-400 disabled:text-gray-200 
                  bg-[#F26800]
                 font-bold p-3 text-1xl text-[#FFFF] disabled:bg-neutral-200 `}
                type={'submit'}
                disabled={!isValid}
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

export default PrivateInformationAccordion;
