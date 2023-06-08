import { FC, Fragment, ReactElement, ReactNode, useEffect } from "react";
import { Button } from "@mknows-frontend-services/components/atoms";
import { useGetMyStudyAssignmentById, useMyStudyAssignmentItem } from "./hooks";
import { UploadDragbleField } from "@mknows-frontend-services/components/atoms";
import { BaseLayout } from "../../common";
import { useRouter } from "next/router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateSubmissionMyStudyAssigment } from "./hooks";
import {
  TMyStudyAssignmentItem,
  TMyStudyAssignmentSubmissionPayload,
  TPayloadRequest,
} from "./type";
import Image from "next/image";
import Link from "next/link";
import pdf from "./assets/pdf.svg";

export const Status: FC = (): ReactElement => {
  const router = useRouter();
  const { data: beforeSubmissionData } = useGetMyStudyAssignmentById(
    router.query.assignmentId as string,
  );
  const { data: afterSubmissionData, mutate } = useUpdateSubmissionMyStudyAssigment();
  const { getMyStudyAssignmentItem, setMyStudyAssignmentItem } = useMyStudyAssignmentItem();

  useEffect(() => {
    setMyStudyAssignmentItem(afterSubmissionData?.data as TMyStudyAssignmentItem);
  }, [afterSubmissionData]);

  useEffect(() => {
    setMyStudyAssignmentItem(beforeSubmissionData?.data as TMyStudyAssignmentItem);
  }, [beforeSubmissionData]);

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
      files: null,
    },
  });

  const onSubmitHandler = handleSubmit((data) => {
    if (data) {
      const payloadReq: TPayloadRequest = {
        files: data.files[0],
        filesToDelete:
          getMyStudyAssignmentItem?.student_progress.assignment_answer !== null
            ? getMyStudyAssignmentItem?.student_progress.assignment_answer?.[0]
            : null,
      };
      const payload: TMyStudyAssignmentSubmissionPayload = {
        id: router.query.assignmentId as string,
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
    getMyStudyAssignmentItem?.student_progress.timestamp_taken as string,
    getMyStudyAssignmentItem?.student_progress.deadline as string,
  );

  const tabelState: {
    namaTabel: string;
    response: string | string[] | number | ReactNode;
  }[] = [
    {
      namaTabel: "Status Pengumpulan",
      response:
        getMyStudyAssignmentItem?.student_progress.assignment_answer === null ||
        (getMyStudyAssignmentItem?.student_progress.assignment_answer.length as number) < 1
          ? "Belum Mengumpulkan"
          : "Terkirim",
    },
    {
      namaTabel: "Status Penilaian",
      response:
        getMyStudyAssignmentItem?.student_progress.score === null
          ? "Belum dinilai"
          : getMyStudyAssignmentItem?.student_progress.score,
    },
    {
      namaTabel: "Tanggal batas pengumpulan ",
      response: getMyStudyAssignmentItem?.student_progress.deadline + " WIB",
    },
    { namaTabel: "Waktu tersisa", response: timestamp_remaining },
    {
      namaTabel: "Terakhir diubah",
      response: getMyStudyAssignmentItem?.student_progress.timestamp_submitted
        ? getMyStudyAssignmentItem?.student_progress.timestamp_submitted + " WIB"
        : "",
    },
    {
      namaTabel: "Pengiriman Tugas",
      response:
        getMyStudyAssignmentItem?.student_progress.assignment_answer === null
          ? ([] as string[])
          : (getMyStudyAssignmentItem?.student_progress.assignment_answer as string[]),
    },
  ];

  const lateState = (): string => {
    if (tabelState[3].response === "Telah melewati batas waktu") {
      return "bg-[#ffc4c4] dark:bg-[#a3342c]";
    }
    return "bg-transparent";
  };
  return (
    <BaseLayout>
      <section className="bg-white dark:bg-[#222529]  lg:py-[92px] md:py-[70px] py-[50px] lg:px-[109px] md:px-[70px] px-[50px] w-full">
        <p className="text-[20px] font-semibold mb-[8px]">
          {getMyStudyAssignmentItem?.assignment.title}
        </p>
        <p className="text-[16px] font-medium mb-[8px]">
          Tugas [Pertemuan ke-{getMyStudyAssignmentItem?.assignment.session_assignment.session_no}]
        </p>
        <p className="text-[16px] font-medium mb-[8px]">
          {
            getMyStudyAssignmentItem?.assignment.session_assignment.subject_session.teacher_subject
              .full_name
          }
        </p>
        <p className="text-[14px] mb-[35px] font-normal">
          {getMyStudyAssignmentItem?.assignment.timestamp_created} WIB
        </p>
        <p className="text-[16px] font-normal">
          Silahkan baca dan kerjakan tugas pada modul berikut ini.
        </p>
        <div className="flex-col gap-y-2">
          {getMyStudyAssignmentItem?.assignment.documents.map((document, i) => (
            <div key={i} className="w-full flex items-center gap-x-1">
              <Image
                src={pdf}
                alt="File tugas"
                className="inline-block mr-[8px] scale-[0.8] lg:scale-[1]"
              />
              <Link
                href={document}
                target="_blank"
                className="w-fit overflow-hidden whitespace-nowrap text-ellipsis hover:underline hover:text-[#106FA4]"
              >
                {document}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-[36px]">
          <p className="text-[20px] font-semibold mb-[25px]">Status Penugasan</p>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-5 lg:text-[12px] text-[10px]">
            {tabelState.map((row, index) => {
              return (
                <Fragment key={index}>
                  <div className="lg:col-span-1 md:col-span-1 col-span-2 bg-[#F5F5F5] dark:bg-[#1B1E21] py-[20px] px-[20px] border-solid border-b-[1px] border-[#D4D4D4] font-semibold">
                    {row.namaTabel}
                  </div>
                  <div
                    className={`flex items-center col-span-3 py-[20px] px-[20px] border-solid border-b-[1px] border-[#D4D4D4] font-medium ${
                      row.namaTabel === "Pengiriman Tugas" && "text-[#106FA4]"
                    }
                  ${
                    row.response === "Belum Mengumpulkan"
                      ? lateState()
                      : row.response === "Terkirim" && "bg-[#C2F7B6] dark:bg-[#4c9b3b]"
                  }
                  ${row.response === "Telah melewati batas waktu" && "text-[#EE2D24] font-bold"}`}
                  >
                    {row.namaTabel === "Pengiriman Tugas" ? (
                      row.response instanceof Array && row.response.length > 0 ? (
                        <Fragment>
                          {row.response instanceof Array &&
                            row.response.map((link, index) => (
                              <Link
                                href={link as string}
                                target="_blank"
                                key={index}
                                className="block w-full overflow-hidden whitespace-nowrap text-ellipsis hover:underline"
                              >
                                {link}
                              </Link>
                            ))}
                        </Fragment>
                      ) : (
                        ""
                      )
                    ) : (
                      row.response
                    )}
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
        <form onSubmit={onSubmitHandler}>
          <UploadDragbleField
            control={control}
            name="files"
            className="border-dashed border-2 border-[#D4D4D4] mt-[28px]"
            variant={"sm"}
          />
          <p className="text-[#A3A3A3] text-[14px] font-medium my-[24px]">
            <span className="font-semibold">Note</span> : Pastikan berkas sudah sesuai dengan
            ketentuan
          </p>
          <Button
            type={"submit"}
            className="mx-auto py-6 lg:py-0 w-full h-[27px] md:w-[160px] md:h-[48px] text-[16px] font-medium bg-[#106FA4] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3] flex gap-x-2 rounded justify-center items-center hover:opacity-50 transition-opacity duration-300"
          >
            Unggah Tugas
          </Button>
        </form>
      </section>
    </BaseLayout>
  );
};
