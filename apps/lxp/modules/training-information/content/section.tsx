import { FC, Fragment, ReactElement } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { TrainingInformationTable } from "./table";
import { LSubjectHeader, TrainingInformationHeader } from "./header";
import { useAskKRS, useGetMyWorkPlan, useGetSubjetByDeptId } from "./hook";
import { useRouter } from "next/router";
import { useGetTakenDepartments } from "../../training-plan";
import { Button } from "@mknows-frontend-services/components/atoms";
import { IoMdAdd } from "react-icons/io";
import { useRecoilState } from "recoil";
import { askKRSPopup } from "./store";
import { Modal } from "@mknows-frontend-services/components/molecules";
import { IoAlertCircle } from "react-icons/io5";

export const TrainingInformationContent: FC = (): ReactElement => {
  const router = useRouter();
  const { id_pelatihan } = router.query;
  const { data: subject, isLoading: subjectLoading } = useGetSubjetByDeptId(id_pelatihan as string);

  const subjectData = subject?.data;

  const { data: myTakenDepartment } = useGetTakenDepartments();
  const myTakenDepartmentStatus = myTakenDepartment?.data?.status as string;

  const [getAskKRSPopup, setAskKRSPopup] = useRecoilState(askKRSPopup);

  const { mutate } = useAskKRS();
  const handleAskKRS = (deptId: string) => {
    mutate(deptId, {
      onSuccess: () => {
        console.log("sukses mengajukan krs");
      },
    });
  };

  const { data: myWorkPlan } = useGetMyWorkPlan();
  const myWorkPlanData = myWorkPlan?.data;
  const ongoingCount = myWorkPlanData?.ongoing?.subjects?.length as number;
  const pendingCount = myWorkPlanData?.pending?.subjects?.length as number;

  return (
    <Fragment>
      {subjectLoading ? (
        <LSubjectHeader />
      ) : (
        <TrainingInformationHeader
          status={myTakenDepartmentStatus}
          id={subjectData?.id as string}
          name={subjectData?.name as string}
          batch={1}
          category={subjectData?.category}
          point={subjectData?.point}
        />
      )}
      <main className="px-8 md:px-14 lg:px-16  ">
        <section className="flex px-6 mb-6 flex-wrap bg-secondary-blue-200/50 py-3 rounded-md shadow-sm gap-2 items-center">
          <AiFillInfoCircle className="text-xl text-[#0C2432]" />
          <h1 className="text-sm md:text-base text-[#0C2432]">
            {myTakenDepartmentStatus !== "PENDING" && myTakenDepartmentStatus !== "ONGOING"
              ? "klik mengajukan untuk mengambil seluruh pelatihan pada batch ini."
              : "Pelatihan yang ditambahkan dapat dilihat pada tab Draft Pelatihan"}
          </h1>
        </section>
        <TrainingInformationTable subjectData={subjectData?.subject_department as []} />
        {myTakenDepartment?.data !== null && myTakenDepartmentStatus !== "PENDING" && (
          <section className="w-full flex justify-end">
            <Button
              disabled={pendingCount === 0 && ongoingCount !== 0}
              onClick={() => {
                setAskKRSPopup(true);
              }}
              type="button"
              className="!bg-[#3EB449] px-6 !border-none hover:!bg-[#319a3b] disabled:bg-version2-200/70 disabled:border-none  text-neutral-100  hover:border-version2-300 text-sm py-2 w-[180px] font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
            >
              {pendingCount > 0 && ongoingCount === 0 && <h1>Dalam Proses</h1>}
              {pendingCount === 0 && ongoingCount > 0 && <h1>Pengajuan Sukses</h1>}
              {pendingCount === 0 && ongoingCount === 0 && (
                <>
                  <IoMdAdd />
                  <h1>Mengajukan</h1>
                </>
              )}
            </Button>
          </section>
        )}
      </main>

      <Modal
        withClose={false}
        hasImage={false}
        lookup={getAskKRSPopup}
        onClose={() => {
          setAskKRSPopup(false);
        }}
      >
        <section className="flex w-full h-full flex-col px-10 py-6 bg-neutral-50">
          <header className="flex flex-col gap-2 mb-4 justify-center items-center">
            <IoAlertCircle className="text-3xl text-version3-400" />
            <h1 className="font-bold text-base">Konfirmasi</h1>
          </header>
          <main>
            <div className="w-full grid place-items-center mb-2">
              <section className="flex gap-2 w-fit items-center bg-warning-100/50 px-4 py-2 rounded-md shadow-sm">
                <IoAlertCircle className="text-xl text-warning-500" />
                <h1 className="text-xs text-warning-500">
                  Kamu tidak dapat mengganti pelatihan yang telah dipilih
                </h1>
              </section>
            </div>
            <h1 className="text-sm text-neutral-800 mb-6 text-center">
              Kamu akan mengajukan Pelatihan <span className="font-bold">{subjectData?.name}</span>
            </h1>
            <section className="flex gap-4 flex-wrap md:flex-nowrap">
              <Button
                type="button"
                className="py-2.5 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 bg-neutral-50 text-version2-500 hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400 w-full text-sm "
                onClick={() => {
                  setAskKRSPopup(false);
                }}
              >
                <h1>Batal</h1>
              </Button>

              <Button
                type="button"
                className="py-2.5 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 w-full text-sm "
                onClick={() => {
                  setAskKRSPopup(false);
                  handleAskKRS(subjectData?.id as string);
                }}
              >
                <h1>Konfrmasi</h1>
              </Button>
            </section>
          </main>
        </section>
      </Modal>
    </Fragment>
  );
};
