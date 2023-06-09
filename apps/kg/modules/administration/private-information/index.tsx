import { FC, ReactElement, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { optionsGender, optionsLastEducation } from "../constant";
import {
  usePrivateInformationStatus,
  useAdministrationStatus,
  usePrivateInformation,
} from "../hooks";
import { Accordion } from "@mknows-frontend-services/components/molecules";
import { SelectField, TextField, Button } from "@mknows-frontend-services/components/atoms";
import { useProfile } from "../../profile/section/edit-profile/hooks";

export const PrivateInformation: FC = (): ReactElement => {
  const validationSchema = z.object({
    full_name: z.string().min(1, { message: "Nama lengkap harus diisi" }),
    gender: z.string().min(1, { message: "Jenis kelamin harus diisi" }),
    phone_number: z.string().max(13).min(11, {
      message: "Nomor handphone harus diisi",
    }),
    birthdate: z.string().min(1, { message: "Tanggal lahir harus diisi" }),
    birthplace: z.string().min(1, { message: "Tempat lahir harus diisi" }),
    address: z.string().min(1, { message: " Alamat harus diisi" }),
    last_education: z.string().min(1, { message: " Pendidikan terakhir harus diisi" }),
    nim: z.string().optional(),
    university: z.string().optional(),
    major: z.string().optional(),
    semester: z.number().optional(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { setPrivateStatus, getPrivateStatus } = usePrivateInformationStatus();
  const { setAdministrationStatus } = useAdministrationStatus();
  const { data } = useProfile();
  const getUserMe = data?.data?.user;
  const { mutate } = usePrivateInformation();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      full_name: "",
      gender: "",
      phone_number: "",
      birthdate: "",
      birthplace: "",
      address: "",
      last_education: "",
      nim: "",
      university: "",
      major: "",
      semester: 0,
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
            setAdministrationStatus("onProgress");
          },
        },
      );
    } catch (err) {
      setPrivateStatus(false);
    }
  });
  useEffect(() => {
    reset(getUserMe);
  }, [getUserMe]);

  return (
    <Accordion
      idAccordion={getPrivateStatus ? "" : "privat-information"}
      title="Informasi Pribadi"
      disabled={getPrivateStatus ? true : false}
    >
      <form onSubmit={onSubmit}>
        <div className="lg:flex w-full gap-[55px]">
          <div className="w-full">
            <div className="form-label mb-3">
              <TextField
                variant="md"
                control={control}
                className="outline outline-none focus:outline-none !border-2 !border-[#DDE0E3]"
                type="text"
                label={"Nama Lengkap"}
                name="full_name"
                placeholder={"Masukkan nama lengkap"}
                defaultValue={getUserMe?.full_name}
                required
                status={errors.full_name ? "error" : "none"}
                message={errors.full_name?.message}
              />
            </div>
            <div className="form-label mb-3 ">
              <SelectField
                control={control}
                label="Jenis Kelamin"
                name="gender"
                placeholder="Pilih jenis kelamin"
                required={true}
                options={optionsGender}
                variant={"md"}
                error={errors.gender?.message}
                styleText="!text-black text-[10px]"
              />
            </div>
            <div className="form-label mb-3">
              <TextField
                variant="md"
                control={control}
                className="outline outline-none focus:outline-none !border-2 !border-[#DDE0E3]"
                type="text"
                label={"Tempat Lahir"}
                name="birthplace"
                placeholder={"Masukkan tempat lahir"}
                required
                status={errors.birthplace ? "error" : "none"}
                message={errors.birthplace?.message}
              />
            </div>
            <div className="form-label mb-3">
              <TextField
                variant="md"
                control={control}
                className="outline outline-none focus:outline-none !border-2 !border-[#DDE0E3]"
                type="text"
                label={"Alamat Lengkap"}
                name={"address"}
                placeholder={"Masukkan alamat lengkap"}
                required={true}
                status={errors.address ? "error" : "none"}
                message={errors.address?.message}
              />
            </div>
            <div className="form-label mb-3">
              <TextField
                variant="md"
                control={control}
                type={"text"}
                className="outline outline-none focus:outline-none !border-2 !border-[#DDE0E3]"
                label={"NIM atau NPM (optional)"}
                name={"nim"}
                placeholder={"Masukkan NIM atau NPM (optional)"}
                required={false}
                status={errors.nim ? "error" : "none"}
                message={errors.nim?.message}
              />
            </div>
            <div className="form-label mb-3">
              <TextField
                variant="md"
                control={control}
                className="outline outline-none focus:outline-none !border-2 !border-[#DDE0E3]"
                type={"text"}
                label={"Program Studi (optional)"}
                name={"major"}
                placeholder={"Masukkan Program Studi (optional)"}
                required={false}
                status={errors.major ? "error" : "none"}
                message={errors.major?.message}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="form-label mb-5 cursor-default">
              <label className="text-[#000] text-[16px] font-bold">
                Email <span className="ml-1 font-bold text-error-600">*</span>
              </label>
              <div className="outline outline-none focus:outline-none !border-2 !border-[#DDE0E3] bg-[#DDE0E3] py-2 w-full rounded-md mt-3 ">
                <div className="ml-4">{getUserMe?.email}</div>
              </div>
            </div>

            <div className="form-label mb-2">
              <TextField
                variant="md"
                control={control}
                className="outline outline-none focus:outline-none !border-2 !border-[#DDE0E3]"
                type={"number"}
                label={"Nomor Handphone"}
                name={"phone_number"}
                placeholder={"Masukkan nomor handphone"}
                required
                status={errors.phone_number ? "error" : "none"}
                message={errors.phone_number?.message}
              />
            </div>
            <div className="form-label mb-2">
              <TextField
                variant="md"
                control={control}
                className="outline outline-none focus:outline-none !border-2 !border-[#DDE0E3]"
                type={"date"}
                label={"Tanggal Lahir"}
                name={"birthdate"}
                placeholder={"Masukkan tanggal lahir"}
                required={true}
                status={errors.birthdate ? "error" : "none"}
                message={errors.birthdate?.message}
              />
            </div>
            <div className="form-label mb-3">
              <SelectField
                placeholder="Pilih pendidikan terakhir"
                control={control}
                label="Pendidikan Terakhir"
                name="last_education"
                required={true}
                options={optionsLastEducation}
                variant={"md"}
                error={errors.last_education?.message}
                styleText="!text-black text-[10px]"
              />
            </div>
            <div className="form-label mb-3">
              <TextField
                control={control}
                type="text"
                className="outline outline-none focus:outline-none !border-2 !border-[#DDE0E3]"
                variant="md"
                label={"Universitas Asal (optional)"}
                name={"university"}
                placeholder={"Masukkan universitas asal"}
                required={false}
                status={errors.university ? "error" : "none"}
                message={errors.university?.message}
              />
            </div>
            <div className="form-label mb-3">
              <label className="text-[#000] text-[16px] font-bold">Semester (optional)</label>
              <input
                className="outline outline-none focus:outline-none !border-2 !border-[#c5c8ca] py-2 w-full rounded-md mt-2 px-3"
                type="number"
                name="semester"
                required={false}
                placeholder={"Masukkan semester terakhir"}
              />
            </div>
            <div className="flex w-full my-8 justify-end">
              <Button
                disabled={!isValid}
                className="my-4 w-[211px] rounded-[8px] disabled:bg-[#c5c3c3] disabled:text-white bg-[#106FA4] text-white font-bold p-3 text-1xl"
                type={"submit"}
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
