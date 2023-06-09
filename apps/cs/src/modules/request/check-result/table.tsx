import { FC, ReactElement, useState } from "react";
import { useFilterActionProcess, useProcess } from "../hooks";
import { IConDelete } from "@mknows-frontend-services/components/atoms";
import { ToolTip } from "@mknows-frontend-services/components/atoms";
import { Dialog } from "@headlessui/react";
import { Button } from "@mknows-frontend-services/components/atoms";
import Card from "../../../components/molecules/card";

const Table: FC = (): ReactElement => {
  const { getFilterActionProcess } = useFilterActionProcess();
  const { data } = useProcess(getFilterActionProcess);
  const [isOpenDelete, setisOpenDelete] = useState(false);

  return (
    <div className="pt-4 lg:mt-0">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500 overflow-x-scroll ">
        <thead className="text-xs border text-[#A3A3A3] font-semibold bg-[#F6FBFA] dark:bg-[#F5F8FF] ">
          <tr>
            <th scope="col" className="pl-7 py-2 cursor-default ">
              <div className="">
                <p>No</p>
              </div>
            </th>
            <th scope="col" className="px-2 py-2 cursor-default">
              <div className="flex justify-center gap-2">
                <p>NIK</p>
                <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
              </div>
            </th>
            <th scope="col" className=" py-2 cursor-default">
              <div className="flex justify-center gap-2">
                <p>Nama</p>
                <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
              </div>
            </th>
            <th scope="col" className=" py-2 cursor-default ">
              <div className="">
                <p>Hapus</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((item, key) => {
            return (
              <tr key={key} className="text-[#262626] bg-white border-b  dark:bg-[#ffff] ">
                <td className="pl-8">{key + 1}</td>
                <td className="px-0 py-2 flex justify-center">{item.nik}</td>
                <td className="py-2 font-semibold ">
                  <span className="flex justify-center">{item.name}</span>
                </td>
                <td>
                  <div className="pl-1">
                    <button
                      className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer"
                      onClick={() => setisOpenDelete(true)}
                    >
                      <ToolTip className="bg-white z-50" tooltip="Delete">
                        <IConDelete />
                      </ToolTip>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Modal Delete */}
      <Dialog
        open={isOpenDelete}
        onClose={() => setisOpenDelete(false)}
        className="absolute lg:left-[45%] md:left-[30%] top-[40%] left-[20%]"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <Card className="hover:cursor-pointer md:w-[348px] w-[300px]  h-fit shadow-2xl py-4 px-6">
              <div className="w-full flex flex-col gap gap-y-2">
                <div className="bg-[#D0E6F5] rounded-full w-fit p-1">
                  <IConDelete />
                </div>
                <p className="font-semibold text-[#262626]">Hapus Data</p>
                <p className="font-base text-xs text-neutral-400 pb-2">
                  Apakah anda setuju untuk menghapus data ini ?
                </p>
                <div className="flex flex-row w-full gap gap-x-3">
                  <Button
                    type="button"
                    className="w-full text-sm py-1 border-full border-[#102542] text-[#102542] font-semibold border-solid border-2 rounded-md"
                    onClick={() => setisOpenDelete(false)}
                  >
                    Tidak
                  </Button>
                  <Button
                    type="button"
                    className="w-full text-sm py-1 bg-[#102542] text-white rounded-md"
                    onClick={() => setisOpenDelete(false)}
                  >
                    Iya
                  </Button>
                </div>
              </div>
            </Card>
          </Dialog.Title>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Table;
