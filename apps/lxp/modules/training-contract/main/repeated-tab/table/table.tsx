import { Button } from "@mknows-frontend-services/components/atoms";
import Image from "next/image";
import { FC, ReactElement } from "react";
import { IoMdAdd } from "react-icons/io";

export const RepeatTrainingTable: FC = (): ReactElement => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle  scrollbar-hide md:scrollbar-default">
          <div className=" rounded-lg shadow overflow-hidden ">
            <table className="min-w-full  divide-neutral-400 ">
              <thead className="bg-secondary-blue-100/20 border-b-2 border-neutral-200">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Nama Pelatihan
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 px-6 py-3 text-center  text-neutral-800 text-base "
                  >
                    Kode
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Poin
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Batch
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Nilai
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Pertemuan
                  </th>
                  <th scope="col" className="px-6 py-3 text-center  text-neutral-800 text-base ">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className=" text-center   text-neutral-800 ">
                <tr className="bg-neutral-100/80">
                  <td className="px-6 py-4 text-neutral-800 border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm ">
                    1
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm ">
                    <section className="flex gap-4 items-center">
                      <figure className="h-14 w-14">
                        <Image
                          src={`https://res.cloudinary.com/dvsqy8n1a/image/upload/v1682825462/sub_thumbnail_f7b760be-5193-4bd4-aaa6-b57322bdf347.png`}
                          alt="offer-view"
                          className=" w-full h-full relative z-20  "
                          height={50}
                          width={50}
                          loading="eager"
                        />
                      </figure>
                      <section className="flex flex-col items-start justify-start">
                        <h1 className="font-bold text-base text-neutral-800">
                          Pelatihan Komunikasi Efektif
                        </h1>
                        <p className="text-sm font-normal text-neutral-400">
                          18 Karyawan Terdaftar
                        </p>
                      </section>
                    </section>
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm ">
                    172GHWF
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                    3 Poin
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200 dark:border-r-white whitespace-nowrap text-sm">
                    1
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200  dark:border-r-white whitespace-nowrap text-sm">
                    E
                  </td>
                  <td className="px-6 py-4  border-b-2 border-neutral-200  dark:border-r-white whitespace-nowrap text-sm">
                    14 Pertemuan
                  </td>
                  <td className="px-6 py-4   border-b-2 border-neutral-200  dark:border-r-white whitespace-nowrap text-sm">
                    <input
                      type="checkbox"
                      id="test"
                      name="test"
                      value="test"
                      className="h-5 w-5 hover:cursor-pointer border-[0.5px] border-version2-300 text-version2-400"
                    />
                  </td>
                </tr>

                <tr className="font-bold">
                  <td scope="col" className="text-left py-4 "></td>
                  <td scope="col" className="text-left py-4 px-6 " colSpan={2}>
                    Total Poin
                  </td>
                  <td className="col-span-4 py-4 ">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-end">
        <Button
          type="submit"
          className="!bg-[#3EB449] !px-8 !border-none hover:!bg-[#319a3b] disabled:bg-version2-200/70 disabled:border-none  text-neutral-100 hover:border-version2-300 text-sm py-2 w-[200px] font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 "
        >
          <IoMdAdd />
          <h1>Mengajukan</h1>
        </Button>
      </div>
    </div>
  );
};
