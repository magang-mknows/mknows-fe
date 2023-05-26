import Image from "next/image";
import React, { Fragment, ReactElement } from "react";
import ChoiceFaculty from "../assets/choicefaculty.svg";
import { Card } from "@mknows-frontend-services/components/molecules";
import Search from "../assets/search.svg";

const ContentSection = (): ReactElement => {
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
      <div className="flex justify-center items-center flex-col mt-10">
        <h1 className="text-[#171717] text-[24px] font-[700]">Mata Kuliah</h1>
        <div className="bg-[#FAFAFA] dark:bg-gray-300 dark:text-white  w-full h-[56px] mt-10 mb-10 rounded-[8px]">
          <div className="flex lg:ml-5 px-3 py-4">
            <Image src={Search} alt={"search"} className="w-auto" width={100} height={100} />
            <input
              type={"text"}
              className="bg-[#FAFAFA] w-full focus:outline-none"
              placeholder="Cari Mata Kuliah"
            />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row md:flex-wrap flex-col gap-7 md:justify-start justify-center pb-40">
        <>
          {content.length === 0 ? (
            <div className="flex flex-col w-screen h-screen gap-8 justify-center lg:items-center ">
              <div className="lg:flex hidden h-auto w-auto bg-gray-100 dark:bg-gray-600 rounded-full p-1 lg:p-4">
                <Image
                  src={"/assets/StudyPlan/DataKosong.png"}
                  width={100}
                  height={100}
                  alt="simulasi-null w-auto"
                />
              </div>
              <h1 className="text-xl font-bold">Tidak Ada Data Mata Kuliah</h1>
            </div>
          ) : (
            content.map((x, i) => (
              <Card
                hasImage={true}
                href={x.slug}
                key={i}
                imgStyle="rounded-lg h-[210px] w-auto "
                src={x.src}
                imgheight={100}
                className="rounded-lg shadow-lg lg:w-full md:w-[47%] w-full"
                imgwidth={100}
                titleStyle={"text-xl font-bold mt-0 text-[#106FA4]"}
                icon={
                  <div className="flex justify-end gap-2 py-2">
                    <div className="lg:h-[22px] text-[#FAB317] px-2 my-[10px] text-[12px] rounded-[5px]  bg-[#FEF6D0]">
                      {x.sks} SKS
                    </div>
                    <div className="lg:h-[22px] text-[#106FA4] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#E9F6FD]">
                      {x.pertemuan} Pertemuan
                    </div>
                  </div>
                }
              >
                <div className="flex flex-col w-full">
                  <p className="text-md text-gray-500">{x.kodematkul}</p>
                  <h1 className="text-lg font-bold mt-0 text-[#106FA4] w-full">
                    Matkul {x.tipematkul}
                  </h1>
                  <p className="text-md text-gray-500 pb-4">{x.namaDosen}</p>
                  <div className="flex w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <p className="text-gray-400 ext-sm pt-20 pl-2">45%</p>
              </Card>
            ))
          )}
        </>
      </div>
    </Fragment>
  );
};

export default ContentSection;
