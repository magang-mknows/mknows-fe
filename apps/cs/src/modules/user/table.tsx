import { FC, ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/molecules/card";
import { Dialog } from "@headlessui/react";
import { IconDropdown, IconEdit, IConDelete, IconCheck, IconError } from "../../components/atoms";
import ToolTip from "../../components/atoms/tooltip";
import { useUser, useFilterAction } from "./hooks";
import { formatDate } from "@mknows-frontend-services/utils";
const Table: FC = (): ReactElement => {
  const { getFilterAction } = useFilterAction();
  const { data } = useUser(getFilterAction);
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500 ">
        <thead className="text-xs font-semibold border text-[#A3A3A3] bg-[#F6FBFA]  ">
          <tr>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>No</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-6 py-2">
              <th scope="col" className="px-6 py-2 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>NIK</p>
                  <IconDropdown />
                </div>
              </th>
            </th>
            <th scope="col" className="px-6 py-2">
              <th scope="col" className="px-6 py-2 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>Nama</p>
                  <IconDropdown />
                </div>
              </th>
            </th>
            <th scope="col" className="px-6 py-2">
              <th scope="col" className="px-6 py-2 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>Tanggal</p>
                  <IconDropdown />
                </div>
              </th>
            </th>
            <th scope="col" className="px-10 py-2">
              Berkas
            </th>
            <th scope="col" className="px-6 py-2">
              Action
            </th>
          </tr>
        </thead>
        {data?.data.map((item, key) => {
          return (
            <tbody key={key}>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4 text-[#262626] cursor-default">{key + 1}</td>
                <td className="px-6 py-4 text-[#262626] cursor-default">{item.nik}</td>
                <td className="px-6 py-4 font-bold text-[#262626] cursor-default">{item.name}</td>
                <td className="px-6 py-4 text-[#262626] cursor-default">
                  {formatDate({ date: new Date(item.createdAt) })}
                </td>
                <td className="px-6 py-4 text-[#262626] text-blue-500 font-semibold">
                  <Link to={"/dashboard/user/detail-data"}>
                    <div className="flex flex-row items-center gap-2 text-[#3D628D] cursor-pointer ">
                      <p>Lihat Detail</p>
                      <div className="">
                        {/* {item.berkas === 'success' ? (
                          <ToolTip
                            tooltip="3/3 Data Terisi"
                            className="border-[#54B435] text-[#54B435] bg-white"
                          >
                            <IconCheck />
                          </ToolTip>
                        ) : (
                          <ToolTip
                            tooltip="1/3 Data Terisi"
                            className=" border-[#EE2D24] text-[#EE2D24] bg-white"
                          >
                            <IconError />
                          </ToolTip>
                        )} */}{" "}
                        <ToolTip
                          tooltip="3/3 Data Terisi"
                          className="border-[#54B435] text-[#54B435] bg-white"
                        >
                          <IconCheck />
                        </ToolTip>
                      </div>
                    </div>
                  </Link>
                </td>
                <td>
                  <div className="flex gap-2">
                    <Link to={"/dashboard/user/edit-data"}>
                      <div className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer">
                        <ToolTip className="bg-white" tooltip="Edit">
                          <IconEdit />
                        </ToolTip>
                      </div>
                    </Link>
                    <button
                      className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer"
                      onClick={() => setisOpen(true)}
                    >
                      <ToolTip className="bg-white" tooltip="Delete">
                        <IConDelete />
                      </ToolTip>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <Dialog
        open={isOpen}
        onClose={() => setisOpen(false)}
        className="absolute lg:left-[45%] md:left-[30%] top-[40%] left-[20%]"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <Card className="hover:cursor-pointer md:w-[348px] w-[300px]  h-fit shadow-2xl py-4 px-6">
              <div className="w-full flex flex-col gap gap-y-2">
                <div className="flex justify-center items-center w-8 h-8 bg-error-100 rounded-full cursor-pointer">
                  <IConDelete />
                </div>
                <p className="font-semibold text-sm">Hapus data</p>
                <p className="font-base text-xs text-neutral-400">
                  Apakah anda setuju untuk menghapus data ini?
                </p>
                <div className="flex flex-row w-full gap gap-x-3">
                  <button
                    className="w-full text-sm py-1 border border-error-300 text-error-300 bg-white"
                    onClick={() => setisOpen(false)}
                  >
                    Tidak
                  </button>
                  <button
                    onClick={() => setisOpen(false)}
                    className="w-full text-sm py-1 bg-error-500 text-white"
                  >
                    Iya
                  </button>
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
