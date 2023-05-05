import { FC, ReactElement } from "react";
import { z } from "zod";

import Modal from "@/components/Common/Modal";
import Form from "@/components/Form";
import GlobalButton from "@/components/Common/GlobalButton";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import ControlledUploadDragbleField from "@/components/ControlledInputs/ControlledUploadDragbleField";

import { PopupModalProps } from "@/components/Common/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateDiscussion } from "@/hooks/Discussion/useCreateDiscussion";
import { usePopupCreateDiscussionStatus } from "@/hooks/Discussion/usePopupCreateDiscussionStatus";

import { handleError } from "@/utilities/helper";
import PopupCreateEditSkeleton from "@/components/Loading/Discussion/PopupCreateEditSkeleton";
import SuspenseError from "../Common/SuspenseError";
import { TDiscussionPayload } from "@/services/Discussion/types";

const PopupModalCreateDiscussion: FC<PopupModalProps> = (): ReactElement => {
  const { setPopupCreateStatus, getPopupCreateStatus } = usePopupCreateDiscussionStatus();

  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const ACCEPTED_MEDIA_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "video/mp4"];

  const validationSchema = z.object({
    title: z
      .string()
      .min(5, { message: "Min. 5 Karakter" })
      .max(250, { message: "Maks. 250 Karakter" }),
    images: z
      .any()
      .refine((files: File) => files !== undefined, "Harus ada file yang di upload.")
      .refine(
        (files: File) => files !== undefined && files?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File) => ACCEPTED_MEDIA_TYPES.includes(files?.type),
        "hanya menerima .jpg, .jpeg, .png, .webp, dan .mp4.",
      ),
    content: z.string(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { mutate, isLoading } = useCreateDiscussion();

  const {
    control,
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      title: "",
      content: "",
      images: undefined,
    },
  });

  const onSubmit = handleSubmit((data) => {
    try {
      mutate(data as TDiscussionPayload);
    } catch (err) {
      throw handleError(err);
    }
  });
  return (
    <Modal
      lookup={getPopupCreateStatus}
      onClose={() => setPopupCreateStatus(!getPopupCreateStatus)}
      hasButton={true}
      hasImage={false}
      withClose={true}
      widthModal={"!w-full md:!w-2/5"}
    >
      <SuspenseError loadingFallback={<PopupCreateEditSkeleton />}>
        <div className="flex items-center justify-center w-full">
          <Form onSubmit={onSubmit}>
            <h1 className="text-center text-neutral-800 text-[20px] font-semibold ">
              Buat Diskusi Baru
            </h1>
            <div className="flex flex-col w-full gap-4">
              <div className="form-label text-start">
                <ControlledTextField
                  hasLabel
                  control={control}
                  type={"text"}
                  label={"Judul Diskusi"}
                  name={"title"}
                  placeholder={"Ketik Judul Diskusi Kamu"}
                  required={true}
                  className="px-2 py-2 rounded-lg md:mb-2 md:py-3 focus:outline-none"
                />
                <p className="text-[12px] text-[#A3A3A3] -mt-2 ">Maks. 250 karakter</p>
              </div>
              <div className="form-label text-start">
                <section className="flex flex-col my-2">
                  <label className={"font-medium text-start text-neutral-800 text-1xl"}>
                    Isi Diskusi
                  </label>
                  <div className="flex flex-col my-2 border-2 border-neutral-300 gap-y-2 p-[12px] rounded-lg">
                    <input
                      type="text"
                      {...register("content")}
                      className="px-2 py-1 bg-transparent border-2 border-transparent rounded-lg outline-none focus:outline-1 focus:border-1 focus:outline-none"
                      placeholder="Mau diskusi apa hari ini?"
                    />
                    <ControlledUploadDragbleField control={control} name={"images"} />
                  </div>
                </section>
                <p className="text-[12px] text-[#A3A3A3]">Maks. 1000 karakter</p>
              </div>
              <div className="flex justify-end">
                <GlobalButton
                  className="!w-[111px] !h-[40px]"
                  disabled={!isValid}
                  type="submit"
                  text={isLoading ? "Sedang Mengirim..." : "Kirim"}
                  color="green"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.2493 5.03142C19.1578 4.95506 19.0315 4.93581 18.9214 4.98147L4.19219 11.0653C4.07176 11.1155 3.99385 11.2338 3.99526 11.3643C3.99667 11.4947 4.07711 11.6113 4.1986 11.6589L8.25361 13.2337C8.35323 13.2725 8.46567 13.2591 8.55332 13.1978L13.9327 9.37206C14.0693 9.27328 14.2591 9.29736 14.3667 9.42712C14.4744 9.55689 14.4629 9.74788 14.3406 9.86388L9.85781 14.1834C9.7952 14.2437 9.75983 14.327 9.75983 14.4139V18.7257C9.76025 18.87 9.8571 18.9962 9.99637 19.0339C10.1356 19.0716 10.2829 19.0115 10.356 18.8871L12.3842 15.4129C12.4282 15.338 12.5238 15.3116 12.6 15.3534L16.331 17.4027C16.4196 17.4515 16.526 17.4556 16.6181 17.4137C16.7102 17.3718 16.777 17.2889 16.7985 17.1901L19.3601 5.34266C19.3825 5.22649 19.3401 5.1073 19.2493 5.03142Z"
                        fill="white"
                      />
                      <mask
                        id="mask0_4334_7648"
                        maskUnits="userSpaceOnUse"
                        x="3"
                        y="4"
                        width="17"
                        height="16"
                      >
                        <path
                          d="M19.2493 5.03142C19.1578 4.95506 19.0315 4.93581 18.9214 4.98147L4.19219 11.0653C4.07176 11.1155 3.99385 11.2338 3.99526 11.3643C3.99667 11.4947 4.07711 11.6113 4.1986 11.6589L8.25361 13.2337C8.35323 13.2725 8.46567 13.2591 8.55332 13.1978L13.9327 9.37206C14.0693 9.27328 14.2591 9.29736 14.3667 9.42712C14.4744 9.55689 14.4629 9.74788 14.3406 9.86388L9.85781 14.1834C9.7952 14.2437 9.75983 14.327 9.75983 14.4139V18.7257C9.76025 18.87 9.8571 18.9962 9.99637 19.0339C10.1356 19.0716 10.2829 19.0115 10.356 18.8871L12.3842 15.4129C12.4282 15.338 12.5238 15.3116 12.6 15.3534L16.331 17.4027C16.4196 17.4515 16.526 17.4556 16.6181 17.4137C16.7102 17.3718 16.777 17.2889 16.7985 17.1901L19.3601 5.34266C19.3825 5.22649 19.3401 5.1073 19.2493 5.03142Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_4334_7648)"></g>
                    </svg>
                  }
                />
              </div>
            </div>
          </Form>
        </div>
      </SuspenseError>
    </Modal>
  );
};

export default PopupModalCreateDiscussion;
