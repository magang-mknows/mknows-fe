import Image from "next/image";
import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";
import { showDetailTraining, showSelectedDetail } from "./store";
import TrainingDetail from "../detail/detail";
import { ISubjectDepartmentItem } from "../../content/types";
import { TsubjectTableProps } from "./types";

export const TrainingInformationTable: FC<TsubjectTableProps> = ({ subjectData }): ReactElement => {
  const [isShowDetail, setShowDetail] = useRecoilState(showDetailTraining);
  const [selectedDetail, setSelectedDetail] = useRecoilState(showSelectedDetail);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle  scrollbar-hide md:scrollbar-default">
          <div className=" rounded-lg shadow overflow-hidden ">
            <table className="min-w-full  divide-neutral-400 ">
              <thead className="bg-secondary-blue-100/20 border-b-2 border-neutral-200">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-normal  text-neutral-800 text-base "
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-normal  text-neutral-800 text-base "
                  >
                    Nama Pelatihan
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 px-6 py-3 text-center font-normal  text-neutral-800 text-base "
                  >
                    Kode Pelatihan
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-normal  text-neutral-800 text-base "
                  >
                    Jumlah Kredit Poin
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-normal  text-neutral-800 text-base "
                  >
                    Batch
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-normal text-neutral-800 text-base "
                  >
                    Jumlah Pertemuan
                  </th>
                </tr>
              </thead>
              <tbody className=" text-center   text-neutral-800 ">
                {subjectData?.map((subject: ISubjectDepartmentItem, index: number) => {
                  return (
                    <tr
                      className="bg-neutral-100/80"
                      key={index}
                      onClick={() => {
                        setSelectedDetail(subject.id);
                      }}
                    >
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm text-neutral-800 ">
                        {index + 1}
                      </td>
                      <td
                        className="px-6 py-4 cursor-pointer  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm text-neutral-800"
                        onClick={() => {
                          setShowDetail(!isShowDetail);
                        }}
                      >
                        <section className="flex gap-4 items-center">
                          <figure className="h-16 w-16">
                            <Image
                              src={subject?.thumbnail}
                              alt="offer-view"
                              className=" w-full h-full relative z-20  "
                              height={50}
                              width={50}
                              loading="lazy"
                            />
                          </figure>
                          <section className="flex flex-col items-start justify-start">
                            <h1 className="font-bold text-base text-neutral-800">
                              {subject?.name}
                            </h1>
                            <p className="text-sm font-normal text-neutral-400">
                              18 Karyawan Terdaftar
                            </p>
                          </section>
                        </section>
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm ">
                        {subject?.subject_code}
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200  dark:border-r-white whitespace-nowrap text-sm">
                        {subject?.credit} Poin
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                        {subject?.level}
                      </td>
                      <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                        {subject?.session_total_number} Pertemuan
                      </td>
                      <td
                        className={`${isShowDetail ? " top-0 bottom-0 " : " -bottom-[200%]"} ${
                          selectedDetail === subject.id ? "" : "hidden"
                        }  transition-all left-0 right-0 bg-neutral-600/20 ease-in-out  flex justify-center items-end duration-300  z-50 lg:px-48  flex-wrap absolute `}
                      >
                        <TrainingDetail
                          name={subject.name}
                          basic_competencies={subject?.basic_competencies}
                          session_total_number={subject?.session_total_number}
                          indicator={subject?.indicator}
                          teaching_materials={subject?.teaching_materials}
                          tools_needed={subject?.tools_needed}
                          study_experience={subject?.study_experience}
                        />
                      </td>
                    </tr>
                  );
                })}

                <tr className="font-bold">
                  <td scope="col" className="text-left py-4 "></td>
                  <td scope="col" className="text-left py-4 px-6 " colSpan={2}>
                    Total Poin
                  </td>
                  <td className="col-span-4 py-4 ">
                    {subjectData?.reduce(
                      (prev: number, subject: ISubjectDepartmentItem) => prev + subject.credit,
                      0,
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
