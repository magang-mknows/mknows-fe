import { FC, Fragment, ReactElement, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAdministrationStatus, useGetAllAdministration, usePrivateInformation } from "../hooks";
import { Button, TextField } from "@mknows-frontend-services/components/atoms";

const PrivateInformationAccordion: FC = (): ReactElement => {
  const { data } = useGetAllAdministration();
  console.log("data", data?.data);
  const administrationData = data?.data;
  const validationSchema = z.object({
    full_name: z.string().min(1, { message: "Nama lengkap harus diisi" }),
    employee_id_number: z.string().min(1, { message: "NIP harus diisi" }),
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    department: z.string().min(1, { message: "Divisi / departemen harus diisi" }),
    company: z.string().min(1, { message: "Nama Perusahaan harus diisi" }),
    leader: z.string().min(1, { message: " Kepala Divisi harus diisi" }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;
  const { mutate } = usePrivateInformation();
  const { setAdministrationStatus } = useAdministrationStatus();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      company: "",
      email: "",
      leader: "",
      employee_id_number: "",
      full_name: "",
      department: "",
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
            setAdministrationStatus("finished");
          },
        },
      );
    } catch (err) {
      console.log(err);
    }
  });
  useEffect(() => {
    reset(administrationData);
    administrationData === undefined
      ? setAdministrationStatus("none")
      : setAdministrationStatus("finished");
  }, [reset, administrationData]);
  return (
    <Fragment>
      <section className="bg-neutral-200 font-bold w-full py-3.5 mb-2 px-4 rounded-md shadow-sm">
        <h1>Informasi Pribadi</h1>
      </section>
      <form onSubmit={onSubmit} className="p-4">
        <div className="lg:flex w-full gap-[55px]">
          <div className="w-full">
            <div className="form-label">
              <TextField
                variant="md"
                control={control}
                defaultValue={data?.data.full_name}
                type={"text"}
                label={"Nama Lengkap"}
                name={"full_name"}
                placeholder={"Masukkan nama lengkap"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block  mb-2  text-sm font-medium text-gray-900 "
                status={errors.full_name ? "error" : "none"}
                message={errors.full_name?.message}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="md"
                control={control}
                type={"number"}
                label={"Nomor Induk Pegawai"}
                name={"employee_id_number"}
                placeholder={"masukkan NIP"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2  text-sm font-medium text-gray-900 "
                status={errors.employee_id_number ? "error" : "none"}
                message={errors.employee_id_number?.message}
                defaultValue={data?.data.employee_id_number}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="md"
                control={control}
                type={"email"}
                label={"Alamat Email"}
                name={"email"}
                placeholder={"Masukkan alamat email"}
                required={true}
                status={errors.email ? "error" : "none"}
                message={errors.email?.message}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2 text-sm font-medium text-gray-900 "
                defaultValue={data?.data.email}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="form-label">
              <TextField
                variant="md"
                control={control}
                type={"text"}
                label={"Nama Perusahaan"}
                name={"company"}
                placeholder={"Masukkan Nama Perusahaan"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2  text-sm font-medium text-gray-900 "
                status={errors.company ? "error" : "none"}
                message={errors.company?.message}
                defaultValue={data?.data.company}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="md"
                control={control}
                type={"text"}
                label={"Divisi / Departemen"}
                name={"department"}
                placeholder={"Masukkan Divisi / Departemen"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2  text-sm font-medium text-gray-900 "
                status={errors.department ? "error" : "none"}
                message={errors.department?.message}
                defaultValue={data?.data.department}
              />
            </div>
            <div className="form-label">
              <TextField
                variant="md"
                control={control}
                type={"text"}
                label={"Nama Kepala Divisi"}
                name={"leader"}
                placeholder={"Nama Kepala Divisi"}
                required={true}
                className="rounded-lg md:mb-2 py-2 md:py-3 px-2 outline-none focus:outline-none"
                labelClassName="block mb-2  text-sm font-medium text-gray-900 "
                status={errors.leader ? "error" : "none"}
                message={errors.leader?.message}
                defaultValue={data?.data.leader}
              />
            </div>
            <div className="flex w-full my-8 justify-end">
              <Button
                className={`my-4 w-[240px] rounded-[8px] disabled:bg-gray-400  
                  bg-version3-500
                 font-bold p-3 text-1xl text-white disabled:bg-neutral-200 `}
                type={"submit"}
                disabled={!isValid}
              >
                Simpan Informasi Pribadi
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default PrivateInformationAccordion;
