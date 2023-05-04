import { FC, ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { optionsGender, optionsLastEducation } from '../constant';
import {
  usePrivateInformationStatus,
  useAdministrationStatus,
  usePrivateInformation,
} from '../hooks';
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

  const { mutate } = usePrivateInformation();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    watch,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      gender: '',
      phone: '',
      birthdate: '',
      birthplace: '',
      address: '',
      last_education: '',
      nim: '',
      university: '',
      major: '',
      semester: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    try {
      mutate(
        {
          ...data,
          birthdate: new Date(data.birthdate).toISOString(),
        },
        {
          onSuccess: () => {
            setPrivateStatus(true);
            setAdministrationStatus('onProgress');
          },
        }
      );
    } catch (err) {
      setPrivateStatus(false);
    }
  });

  console.log(watch());

  // useEffect(() => {
  //   if (data) {
  //     setPrivateStatus(true);
  //     setAdministrationStatus('onProgress');
  //   }
  // }, [data]);

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
                placeholder="Pilih jenis kelamin"
                required={true}
                options={optionsGender}
                variant={'lg'}
                error={errors.gender?.message}
                className=" rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300 w-full mt-1"
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 ring-1 ring-[#DDE0E3]"
                type="text"
                label={'Tempat Lahir'}
                name="birthplace"
                placeholder={'Masukkan tempat lahir'}
                required
                status={errors.birthplace ? 'error' : 'none'}
                message={errors.birthplace?.message}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 ring-1 ring-[#DDE0E3]"
                type="text"
                label={'Alamat Lengkap'}
                name={'address'}
                placeholder={'Masukkan alamat lengkap'}
                required={true}
                status={errors.address ? 'error' : 'none'}
                message={errors.address?.message}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                type={'text'}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 ring-1 ring-[#DDE0E3]"
                label={'NIM atau NPM (optional)'}
                name={'nim'}
                placeholder={'masukkan NIM atau NPM (optional)'}
                required={false}
                status={errors.nim ? 'error' : 'none'}
                message={errors.nim?.message}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 ring-1 ring-[#DDE0E3]"
                type={'text'}
                label={'Program Studi (optional)'}
                name={'major'}
                placeholder={'Masukkan Program Studi (optional)'}
                required={false}
                status={errors.major ? 'error' : 'none'}
                message={errors.major?.message}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 ring-1 ring-[#DDE0E3]"
                type={'number'}
                label={'Nomor Handphone'}
                name={'phone'}
                placeholder={'Masukkan nomor handphone'}
                required={true}
                status={errors.phone ? 'error' : 'none'}
                message={errors.phone?.message}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 ring-1 ring-[#DDE0E3]"
                type={'date'}
                label={'Tanggal Lahir'}
                name={'birthdate'}
                placeholder={'Masukkan tanggal lahir'}
                required={true}
                status={errors.birthdate ? 'error' : 'none'}
                message={errors.birthdate?.message}
              />
            </div>
            <div className="form-label">
              <SelectField
                placeholder="Pilih pendidikan terakhir"
                control={control}
                label="Pendidikan Terakhir"
                name="last_education"
                required={true}
                options={optionsLastEducation}
                variant={'lg'}
                error={errors.last_education?.message}
              />
            </div>
            <div className="form-label">
              <TextField
                control={control}
                type="text"
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 ring-1 ring-[#DDE0E3]"
                variant="lg"
                label={'Universitas Asal (optional)'}
                name={'university'}
                placeholder={'Masukkan universitas asal'}
                required={false}
                status={errors.university ? 'error' : 'none'}
                message={errors.university?.message}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="lg"
                control={control}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 ring-1 ring-[#DDE0E3]"
                type="text"
                label={'Semester (optional)'}
                name={'semester'}
                placeholder={'Masukkan pendidikan terakhir'}
                required={false}
                status={errors.semester ? 'error' : 'none'}
                message={errors.semester?.message}
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
