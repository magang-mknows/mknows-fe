import Image from "next/image";
import React, { Fragment, ReactElement } from "react";
import ChoiceFaculty from "../assets/choicefaculty.svg";
import { Card } from "@mknows-frontend-services/components/molecules";
import Search from "../assets/search.svg";
import { useGetDepartment } from "../hooks";
import { TFinalProgressSubject } from "../type";

const ContentSection = (): ReactElement => {
  const { data } = useGetDepartment();
  const content = [
    {
      src: ChoiceFaculty,
      namaDosen: "Indah Saritem, S. AK, M.Ak",
      tipematkul: 4,
      pertemuan: 14,
      kodematkul: 1142,
      sks: 131,
      slug: "/pelatihanku/kursus/1",
    },
    {
      src: ChoiceFaculty,
      namaDosen: "Indah Saritem, S. AK, M.Ak",
      tipematkul: 4,
      pertemuan: 14,
      kodematkul: 1142,
      sks: 131,
      slug: "/pelatihanku/kursus/1",
    },
    {
      src: ChoiceFaculty,
      namaDosen: "Indah Saritem, S. AK, M.Ak",
      tipematkul: 4,
      pertemuan: 14,
      kodematkul: 1142,
      sks: 131,
      slug: "/pelatihanku/kursus/1",
    },
    {
      src: ChoiceFaculty,
      namaDosen: "Indah Saritem, S. AK, M.Ak",
      tipematkul: 4,
      pertemuan: 14,
      kodematkul: 1142,
      sks: 131,
      slug: "/pelatihanku/kursus/1",
    },
  ];
  return (
    <Fragment>
      <div className="flex  flex-col ">
        <h1 className=" text-neutral-900 text-[24px] mb-4 font-[700]">Pelatihan-Ku</h1>
        <div className="bg-neutral-100  w-full h-[56px] mb-10 rounded-[8px]">
          <div className="flex lg:ml-5 px-3 py-4">
            <Image src={Search} alt={"search"} className="w-auto" width={100} height={100} />
            <input
              type={"text"}
              className=" w-full bg-neutral-100 focus:outline-none px-4"
              placeholder="Cari Pelatihan"
            />
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-col md:flex-wrap flex-col gap-7 md:justify-start justify-center pb-40">
        <>
          {data?.data?.finalProgressSubject === undefined ? (
            <div className="flex flex-col w-screen h-screen gap-8 justify-center lg:items-center ">
              <div className="lg:flex hidden h-auto w-auto bg-gray-100 dark:bg-gray-600 rounded-full p-1 lg:p-4">
                <Image
                  src={"/assets/StudyPlan/DataKosong.png"}
                  width={100}
                  height={100}
                  alt="simulasi-null"
                />
              </div>
              <h1 className="text-xl font-bold">Tidak Ada Data Pelatihan</h1>
            </div>
          ) : (
            data?.data?.finalProgressSubject.map((x: TFinalProgressSubject, i: number) => (
              <Card
                hasImage={true}
                href={`/pelatihanku/kursus/${x.subject_id}/${x.last_session}/${x.batch_id}`}
                key={i}
                imgStyle="rounded-lg h-[210px] w-full "
                src={x.thumbnail}
                imgheight={100}
                className="rounded-lg shadow-lg lg:w-full md:w-[47%] w-full"
                imgwidth={100}
                titleStyle={"text-xl font-bold mt-0 text-blue-600"}
                icon={
                  <div className="flex justify-end gap-2 py-2">
                    <div className="lg:h-[22px] text-version3-500 px-3 my-[10px] text-[12px] rounded-[5px]  bg-version3-400/10 grid place-items-center">
                      {x.credit} SKS
                    </div>
                    <div className="lg:h-[22px] text-blue-600 px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-blue-100 grid place-items-center">
                      {x.session_total_number} Pertemuan
                    </div>
                  </div>
                }
              >
                <div className="flex flex-col w-full">
                  <p className="text-md text-gray-500">{x.subject_code}</p>
                  <h1 className="text-lg font-bold mt-0 text-blue-600 w-full">
                    Pelatihan {x.name}
                  </h1>
                  <p className="text-md text-gray-500 pb-4">{x.teacherName}</p>
                  <div className="flex w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <p className="text-gray-400 ext-sm pt-20 pl-2">{x.progress}%</p>
              </Card>
            ))
          )}
        </>
      </div>
    </Fragment>
  );
};

export default ContentSection;
