import { FC, ReactElement, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useFamilyInformation,
  useGetAllAdministration,
  useJobInformationStatus,
  usePrivateInformationStatus,
} from "../hooks";
import { optionOccupation, optionSalary, optionCollegeFeesPaid, optionLiveWith } from "../constant";
import { Button, SelectField, TextField } from "@mknows-frontend-services/components/atoms";
import { Accordion } from "@mknows-frontend-services/components/molecules";

export const JobsInformation: FC = (): ReactElement => {
  const schema = z.object({
    father_name: z.string().min(1, { message: "Nama ayah harus diisi" }),
    father_occupation: z.string().min(1, { message: "Pekerjaan ayah harus diisi" }),
    father_salary: z.string().min(1, { message: "Penghasilan ayah harus diisi" }),
    mother_name: z.string().min(1, { message: "Nama ibu harus diisi" }),
    mother_occupation: z.string().min(1, { message: "Pekerjaan ibu harus diisi" }),
    mother_salary: z.string().min(1, { message: "Penghasilan ibu harus diisi" }),
    self_salary: z.string().min(1, { message: "Penghasilan sendiri harus diisi" }),
    live_with: z.string().min(1, { message: "Tinggal dengan harus diisi" }),
    tuition_payer: z.string().min(1, { message: "Biaya kuliah harus diisi" }),
    self_occupation: z.string().min(1, { message: "Pekerjaan sendiri harus diisi" }),
  });

  const { setJobStatus, getJobStatus } = useJobInformationStatus();
  const { getPrivateStatus } = usePrivateInformationStatus();
  const { mutate } = useFamilyInformation();
  const { data } = useGetAllAdministration();
  const administrationData = data?.data?.familial;

  type ValidationSchema = z.infer<typeof schema>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      father_name: "",
      father_occupation: "",
      father_salary: "",
      mother_name: "",
      mother_occupation: "",
      mother_salary: "",
      self_salary: "",
      self_occupation: "",
      live_with: "",
      tuition_payer: "",
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
  useEffect(() => {
    reset(administrationData);
  }, [reset, administrationData]);

  return (
    <Accordion
      title="Informasi Pekerjaan"
      idAccordion={getJobStatus ? "" : "privat-information"}
      disabled={getPrivateStatus ? (getJobStatus ? true : false) : true}
    >
      <form className="flex w-full flex-col" onSubmit={onSubmit}>
        <div className="lg:flex w-full gap-[55px] ">
          <div className="w-full">
            <TextField
              name={"father_name"}
              control={control}
              label={"Nama Ayah"}
              type={"text"}
              variant="md"
              required
              placeholder={"Masukan nama ayah"}
              className="outline outline-none focus:outline-none !border-2 !border-[#DDE0E3]"
            />

            <TextField
              name={"mother_name"}
              control={control}
              label={"Nama Ibu"}
              variant="md"
              type={"text"}
              required
              placeholder={"Masukan nama ibu"}
              className="outline outline-none focus:outline-none !border-2 !border-[#DDE0E3]"
            />
          </div>
          <div className="w-full mt-2">
            <SelectField
              variant="md"
              control={control}
              options={optionOccupation}
              name={"father_occupation"}
              label={"Pekerjaan Ayah"}
              required
              placeholder="Pilih pekerjaan ayah"
              styleText="!text-black text-[10px]"
            />

            <SelectField
              variant="md"
              control={control}
              options={optionOccupation}
              name={"mother_occupation"}
              label={"Pekerjaan Ibu"}
              required
              placeholder="Pilih pekerjaan ibu"
            />
          </div>
          <div className="w-full mt-2">
            <SelectField
              variant="md"
              control={control}
              options={optionSalary}
              name={"father_salary"}
              label={"Penghasilan Ayah"}
              required
              placeholder="Pilih penghasilan ayah"
            />

            <SelectField
              variant="md"
              control={control}
              options={optionSalary}
              name={"mother_salary"}
              label={"Penghasilan Ibu"}
              required
              placeholder="Pilih penghasilan ibu"
              styleText="!text-black text-[10px]"
            />
          </div>
        </div>
        <hr className="my-5 text-[#D9D9D9]" />
        <div className="lg:flex w-full gap-[55px]">
          <div className="w-full">
            <SelectField
              variant="md"
              control={control}
              options={optionOccupation}
              name={"self_occupation"}
              label={"Pekerjaan Sendiri"}
              required
              placeholder="Pilih pekerjaan sendiri"
              styleText="!text-black text-[10px]"
            />
            <SelectField
              variant="md"
              control={control}
              options={optionLiveWith}
              name={"live_with"}
              label={"Tinggal Dengan"}
              required
              placeholder="Pilih tinggal dengan"
              styleText="!text-black text-[10px]"
            />
          </div>
          <div className="w-full">
            <SelectField
              variant="md"
              control={control}
              options={optionCollegeFeesPaid}
              name={"tuition_payer"}
              label={"Biaya Kuliah Ditanggung Oleh"}
              required
              placeholder="Masukan biaya kuliah ditanggung oleh"
              styleText="!text-black text-[10px]"
            />
            <SelectField
              variant="md"
              control={control}
              options={optionSalary}
              name={"self_salary"}
              label={"Penghasilan Sendiri"}
              required
              placeholder="Masukan biaya kuliah ditanggung oleh"
              styleText="!text-black text-[10px]"
            />
            <div className="flex w-full my-8 justify-end">
              <Button
                disabled={!isValid}
                className="my-4 w-[211px] rounded-[8px] disabled:bg-[#c5c3c3] disabled:text-white bg-[#106FA4] text-white font-bold p-3 text-1xl"
                type={"submit"}
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
