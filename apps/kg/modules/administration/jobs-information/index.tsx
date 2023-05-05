import { FC, ReactElement } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useFamilyInformation,
  useJobInformationStatus,
  usePrivateInformationStatus,
} from '../hooks';
import {
  optionFatherJob,
  optionMotherJob,
  optionFatherIncome,
  optionMotherIncome,
  optionOwnIncome,
  optionCollegeFeesPaid,
  optionLiveWith,
  optionOwnJob,
} from '../constant';
import {
  Button,
  SelectField,
  TextField,
} from '@mknows-frontend-services/components/atoms';
import { Accordion } from '@mknows-frontend-services/components/molecules';

export const JobsInformation: FC = (): ReactElement => {
  const schema = z.object({
    father_name: z.string().min(1, { message: 'Nama ayah harus diisi' }),
    father_occupation: z
      .string()
      .min(1, { message: 'Pekerjaan ayah harus diisi' }),
    father_salary: z
      .string()
      .min(1, { message: 'Penghasilan ayah harus diisi' }),
    mother_name: z.string().min(1, { message: 'Nama ibu harus diisi' }),
    mother_occupation: z
      .string()
      .min(1, { message: 'Pekerjaan ibu harus diisi' }),
    mother_salary: z
      .string()
      .min(1, { message: 'Penghasilan ibu harus diisi' }),
    self_salary: z
      .string()
      .min(1, { message: 'Penghasilan sendiri harus diisi' }),
    live_with: z.string().min(1, { message: 'Tinggal dengan harus diisi' }),
    tuition_payer: z.string().min(1, { message: 'Biaya kuliah harus diisi' }),
    self_occupation: z
      .string()
      .min(1, { message: 'Pekerjaan sendiri harus diisi' }),
  });

  const { setJobStatus, getJobStatus } = useJobInformationStatus();
  const { getPrivateStatus } = usePrivateInformationStatus();
  const { mutate } = useFamilyInformation();

  type ValidationSchema = z.infer<typeof schema>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
    mode: 'all',
    defaultValues: {
      father_name: '',
      father_occupation: '',
      father_salary: '',
      mother_name: '',
      mother_occupation: '',
      mother_salary: '',
      self_salary: '',
      live_with: '',
      tuition_payer: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    try {
      mutate(data, {
        onSuccess: () => {
          setJobStatus(true);
        },
      });
    } catch (err) {
      setJobStatus(false);
    }
  });

  return (
    <Accordion
      title="Informasi Pekerjaan"
      idAccordion={getJobStatus ? '' : 'privat-information'}
      disabled={getPrivateStatus ? (getJobStatus ? true : false) : true}
    >
      <form className="flex w-full flex-col" onSubmit={onSubmit}>
        <div className="lg:flex w-full gap-[55px] ">
          <div className="w-full">
            <TextField
              name={'father_name'}
              control={control}
              label={'Nama Ayah'}
              type={'text'}
              variant="lg"
              required
              placeholder={'Masukan nama ayah'}
              className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
            />

            <TextField
              name={'mother_name'}
              control={control}
              label={'Nama Ibu'}
              variant="lg"
              type={'text'}
              required
              placeholder={'Masukan nama ibu'}
              className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
            />
          </div>
          <div className="w-full mt-2">
            <SelectField
              variant="lg"
              control={control}
              options={optionFatherJob}
              name={'father_occupation'}
              label={'Pekerjaan Ayah'}
              required
              defaultValue="Pilih pekerjaan ayah"
            />

            <SelectField
              variant="lg"
              control={control}
              options={optionMotherJob}
              name={'mother_occupation'}
              label={'Pekerjaan Ibu'}
              required
              defaultValue="Pilih pekerjaan ibu"
            />
          </div>
          <div className="w-full mt-2">
            <SelectField
              variant="lg"
              control={control}
              options={optionFatherIncome}
              name={'father_salary'}
              label={'Penghasilan Ayah'}
              required
              defaultValue="Pilih penghasilan ayah"
            />

            <SelectField
              variant="lg"
              control={control}
              options={optionMotherIncome}
              name={'mother_salary'}
              label={'Penghasilan Ibu'}
              required
              defaultValue="Pilih penghasilan ibu"
            />
          </div>
        </div>
        <hr className="my-5 text-[#D9D9D9]" />
        <div className="lg:flex w-full gap-[55px]">
          <div className="w-full">
            <SelectField
              variant="lg"
              control={control}
              options={optionOwnIncome}
              name={'self_salary'}
              label={'Pekerjaan Sendiri'}
              required
              defaultValue="Pilih pekerjaan sendiri"
            />
            <SelectField
              variant="lg"
              control={control}
              options={optionLiveWith}
              name={'live_with'}
              label={'Tinggal Dengan'}
              required
              defaultValue="Pilih tinggal dengan"
            />
          </div>
          <div className="w-full">
            <SelectField
              variant="lg"
              control={control}
              options={optionCollegeFeesPaid}
              name={'tuition_payer'}
              label={'Biaya Kuliah Ditanggung Oleh'}
              required
              defaultValue="Masukan biaya kuliah ditanggung oleh"
            />
            <SelectField
              variant="lg"
              control={control}
              options={optionOwnJob}
              name={'self_occupation'}
              label={'Penghasilan Sendiri'}
              required
              defaultValue="Masukan biaya kuliah ditanggung oleh"
            />
            <div className="flex w-full my-8 justify-end">
              <Button
                disabled={!isValid}
                className="my-4 w-[211px] rounded-[8px] disabled:bg-neutral-base disabled:text-neutral-200 bg-primary-base text-white font-bold p-3 text-1xl"
                type={'submit'}
              >
                Simpan Informasi Pekerjaan
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Accordion>
  );
};
