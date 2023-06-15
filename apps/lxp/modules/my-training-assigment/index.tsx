import { FC, Fragment, ReactElement } from "react";
import { Button } from "@mknows-frontend-services/components/atoms";
import { useGetMyStudyAssignmentById, useMyStudyAssignmentItem } from "./hooks";
import { UploadDragbleField } from "@mknows-frontend-services/components/atoms";
import { useRouter } from "next/router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateSubmissionMyStudyAssigment } from "./hooks";
import { TAssigmentParams, TMyStudyAssignmentSubmissionPayload, TPayloadRequest } from "./type";
import Image from "next/image";
import Link from "next/link";
import pdf from "./assets/pdf.svg";
import { ClientProvider } from "../common/provider";

export const Status: FC = (): ReactElement => {
  const router = useRouter();
  const { query } = useRouter();
  const params: TAssigmentParams = {
    subjectID: query.subjectID as string,
    batchID: query.batchID as string,
  };
  const { data } = useGetMyStudyAssignmentById(params);
  console.log("data get", data);
  const dataSubmission = data?.data?.employeeAssignmentProgress;
  const dataAssigment = data?.data?.dataAssignment;
  const dataTeacher = data?.data?.dataTeacher?.teacher_batch;
  const { data: afterSubmissionData, mutate } = useUpdateSubmissionMyStudyAssigment();
  // const { getMyStudyAssignmentItem, setMyStudyAssignmentItem } = useMyStudyAssignmentItem();

  // useEffect(() => {
  //   setMyStudyAssignmentItem(afterSubmissionData?.data as TMyStudyAssignmentItem);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [afterSubmissionData]);

  // useEffect(() => {
  //   setMyStudyAssignmentItem(beforeSubmissionData?.data as TMyStudyAssignmentItem);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [beforeSubmissionData]);

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const ACCEPTED_MEDIA_TYPES = ["application/pdf"];
  const validationSchema = z.object({
    files: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimum adalah 5mb.",
      )
      .refine(
        (files: File[]) => ACCEPTED_MEDIA_TYPES.includes(files?.[0]?.type),
        "hanya menerima .pdf",
      ),
  });

  type TValidationSchema = z.infer<typeof validationSchema>;

  const { control, handleSubmit } = useForm<TValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      files: undefined,
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (data) {
      console.log(data);
      const payloadReq: TPayloadRequest = {
        files: data.files[0],
        // filesToDelete:
        //   getMyStudyAssignmentItem?.employeeAssignmentProgress.assignment_answer !== null
        //     ? getMyStudyAssignmentItem?.employeeAssignmentProgress.assignment_answer?.[0]
        //     : null,
      };
      const payload: TMyStudyAssignmentSubmissionPayload = {
        subjectID: router.query.subjectId as string,
        batchID: router.query.batchId as string,
        req: payloadReq,
      };
      mutate(payload);
    }
  });

  function timestampRemainingHandler(timestamp_taken: string, deadline: string) {
    const timestamp_taken_formatted = new Date(timestamp_taken);
    const deadline_formatted = new Date(deadline);

    const time_difference = deadline_formatted.getTime() - timestamp_taken_formatted.getTime();

    if (time_difference < 0) {
      return "Telah melewati batas waktu";
    }

    const seconds = Math.floor(time_difference / 1000) % 60;
    const minutes = Math.floor(time_difference / 1000 / 60) % 60;
    const hours = Math.floor(time_difference / 1000 / 3600) % 24;
    const days = Math.floor(time_difference / 1000 / 3600 / 24);

    return `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }

  const timestamp_remaining = timestampRemainingHandler(
    dataSubmission?.timestamp_taken as string,
    dataSubmission?.deadline as string,
  );

  return (
    <ClientProvider>
      <section className="bg-white lg:py-[92px] md:py-[70px] py-[50px] lg:px-[109px] md:px-[70px] px-[50px] w-full">
        <p className="text-[20px] font-semibold mb-[8px]">{dataAssigment?.description}</p>
        <p className="text-[16px] font-medium mb-[8px]">Tugas Pertemuan ke-1</p>
        <p className="text-[16px] font-medium mb-[8px]">POST - {dataTeacher?.full_name}</p>
        <p className="text-[14px] mb-[35px] font-normal">jam WIB</p>
        <p className="text-[16px] font-normal">
          Silahkan baca dan kerjakan tugas pada modul berikut ini.
        </p>
        <div className="flex-col gap-y-2">
          {dataAssigment?.document_id?.map((item: any, index: number) => {
            return (
              <div key={index} className="w-full flex items-center gap-x-1 mt-2">
                <Image
                  src={pdf}
                  alt="File tugas"
                  className="inline-block mr-[8px] scale-[0.8] lg:scale-[1]"
                />
                <Link
                  href={item}
                  target="_blank"
                  className="w-fit overflow-hidden whitespace-nowrap text-ellipsis hover:underline"
                >
                  Tugas 1
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-[36px]">
          <p className="text-[20px] font-semibold mb-[25px]">Status Penugasan</p>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-5 lg:text-[12px] text-[10px]">
            <Fragment>
              <div className="lg:col-span-1 md:col-span-1 col-span-2 bg-neutral-100  py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-semibold">
                Status Penugasan
              </div>
              <div
                className={`flex items-center col-span-3 py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-medium `}
              >
                <h1>
                  {dataSubmission?.assignment_answer == null
                    ? "Belum Mengumpulkan"
                    : dataSubmission?.assignment_answer}
                </h1>
              </div>
            </Fragment>
            <Fragment>
              <div className="lg:col-span-1 md:col-span-1 col-span-2 bg-neutral-100  py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-semibold">
                Status Penilian
              </div>
              <div
                className={`flex items-center col-span-3 py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-medium `}
              >
                <h1>{dataSubmission?.score == null ? "Belum Dinilai" : dataSubmission?.score}</h1>
              </div>
            </Fragment>
            <Fragment>
              <div className="lg:col-span-1 md:col-span-1 col-span-2 bg-neutral-100  py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-semibold">
                Tanggal batas pengumpulan
              </div>
              <div
                className={`flex items-center col-span-3 py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-medium `}
              >
                <h1>{new Date(dataSubmission?.deadline as string).toUTCString()}</h1>
              </div>
            </Fragment>
            <Fragment>
              <div className="lg:col-span-1 md:col-span-1 col-span-2 bg-neutral-100  py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-semibold">
                Waktu tersisa
              </div>
              <div
                className={`flex items-center col-span-3 py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-medium `}
              >
                <h1>{timestamp_remaining}</h1>
              </div>
            </Fragment>
            <Fragment>
              <div className="lg:col-span-1 md:col-span-1 col-span-2 bg-neutral-100  py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-semibold">
                Terakhir Diubah
              </div>
              <div
                className={`flex items-center col-span-3 py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-medium `}
              >
                <h1>
                  {dataSubmission?.timestamp_submitted
                    ? new Date(dataSubmission?.timestamp_submitted as string).toUTCString()
                    : "-"}
                </h1>
              </div>
            </Fragment>
            <Fragment>
              <div className="lg:col-span-1 md:col-span-1 col-span-2 bg-neutral-100  py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-semibold">
                Pengiriman tugas
              </div>
              <div
                className={`flex items-center col-span-3 py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-medium `}
              >
                <h1>
                  {" "}
                  {dataSubmission?.assignment_answer == null
                    ? "-"
                    : dataSubmission?.assignment_answer}
                </h1>
              </div>
            </Fragment>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <UploadDragbleField
            control={control}
            name="files"
            className="border-dashed border-2 border-neutral-300 mt-[28px]"
            variant={"sm"}
          />
          <p className="text-[#A3A3A3] text-[14px] font-medium my-[24px]">
            <span className="font-semibold">Note</span> : Pastikan berkas sudah sesuai dengan
            ketentuan
          </p>
          <Button
            type={"submit"}
            className="mx-auto py-6 lg:py-0 w-full h-[27px] md:w-[160px] md:h-[48px] text-[16px] font-medium bg-version2-500 text-white disabled:bg[#D4D4D4] disabled:text-neutral-400 flex gap-x-2 rounded justify-center items-center hover:opacity-50 transition-opacity duration-300"
          >
            Unggah Tugas
          </Button>
        </form>
      </section>
    </ClientProvider>
  );
};
