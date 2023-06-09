import { FC, Fragment, ReactElement, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useUser, useFilterAction } from "./hooks";
import { TUserItem } from "./types";
import { formatDate } from "@mknows-frontend-services/utils";
import {
  IConDelete,
  IconCheck,
  IconEdit,
  IconDropdown,
  IconEmptyState,
} from "@mknows-frontend-services/components/atoms";
import { ToolTip } from "@mknows-frontend-services/components/atoms";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { CardCS } from "@mknows-frontend-services/components/molecules";
import { Button } from "@mknows-frontend-services/components/atoms";

const Table: FC = (): ReactElement => {
  const dummyData = [
    {
      request_number: 123121,
      nik: "30710040582",
      name: "Sucipta",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "GAGAL",
    },
    {
      request_number: 155671,
      nik: "30710040582",
      name: "Yayan Ruhiyan",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "MENUNGGU",
    },
    {
      request_number: 1231,
      nik: "30710040582",
      name: "Iwan Fals",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "MENUNGGU",
    },
    {
      request_number: 123,
      nik: "30710040582",
      name: "Iwan",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "GAGAL",
    },
    {
      request_number: 15521,
      nik: "30710040582",
      name: "Jajang",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "MENUNGGU",
    },
    {
      request_number: 112513,
      nik: "30710040582",
      name: "Bambang",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "MENUNGGU",
    },
    {
      request_number: 1231,
      nik: "30710040582",
      name: "Iwan Fals",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "MENUNGGU",
    },
    {
      request_number: 123,
      nik: "30710040582",
      name: "Iwan",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "GAGAL",
    },
    {
      request_number: 15521,
      nik: "30710040582",
      name: "Jajang",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "MENUNGGU",
    },
    {
      request_number: 112513,
      nik: "30710040582",
      name: "Bambang",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "MENUNGGU",
    },
    {
      request_number: 1231,
      nik: "30710040582",
      name: "Iwan Fals",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "MENUNGGU",
    },
    {
      request_number: 123,
      nik: "30710040582",
      name: "Iwan",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "GAGAL",
    },
    {
      request_number: 15521,
      nik: "30710040582",
      name: "Jajang",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "MENUNGGU",
    },
    {
      request_number: 112513,
      nik: "30710040582",
      name: "Bambang",
      requested_at: "Senin, 17 Maret 2023",
      finished_at: "Selasa, 18 Maret 2023",
      status: "MENUNGGU",
    },
  ];
  type TDataDummy = {
    request_number: number;
    nik: string;
    name: string;
    requested_at: string;
    finished_at: string;
    status: string;
  };

  const { getFilterAction } = useFilterAction();
  const { data } = useUser(getFilterAction);
  const [isOpen, setisOpen] = useState(false);
  const paginationComponentOptions = {
    rowsPerPageText: "Data per halaman",
    rangeSeparatorText: "dari",
  };

  const sortIcon = (
    <div className="m-2">
      <IconDropdown />
    </div>
  );

  const columns: TableColumn<TDataDummy>[] = [
    {
      name: "No",
      cell: (row, rowIndex) => <div className="px-2">{rowIndex + 1}</div>,
    },
    {
      name: "NIK",
      selector: (row) => row.nik,
      sortable: true,
    },
    {
      name: "Nama",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Tanggal",
      selector: (row) =>
        formatDate({
          date: new Date(row.requested_at),
        }),
      sortable: true,
    },
    {
      name: "Berkas",
      cell: (row) => (
        <Link to={"/dashboard/user/detail-data"}>
          <div className="flex flex-row items-center gap-2 text-[#3D628D] cursor-pointer ">
            <p>Lihat Detail</p>
            <div>
              <ToolTip
                tooltip="3/3 Data Terisi"
                className="border-[#54B435] text-[#54B435] bg-white"
              >
                <IconCheck />
              </ToolTip>
            </div>
          </div>
        </Link>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <Link to={"/dashboard/user/edit-data"}>
            <div className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer">
              <ToolTip className="bg-white z-[999]" tooltip="Edit">
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
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "45px",
      },
    },

    headCells: {
      style: {
        backgroundColor: "#F5F8FF",
        textColor: "#A3A3A3",
      },
    },
    cells: {
      style: {
        paddingLeft: "4px",
        paddingRight: "2px",
      },
    },
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={dummyData}
        sortIcon={sortIcon}
        customStyles={customStyles}
        fixedHeader={true}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        noDataComponent={
          <div className="flex flex-col w-full h-screen justify-center items-center">
            <IconEmptyState />
            <h1 className="font-bold my-2">Data Tidak Tersedia</h1>
            <p>Data akan ditampilkan apabila sudah tersedia data yang diperlukan</p>
          </div>
        }
      />
      <Dialog
        open={isOpen}
        onClose={() => setisOpen(false)}
        className="absolute lg:left-[45%] md:left-[30%] top-[40%] left-[20%]"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <CardCS className="hover:cursor-pointer md:w-[348px] w-[300px]  h-fit shadow-2xl py-4 px-6">
              <div className="w-full flex flex-col gap gap-y-2">
                <div className="bg-[#D0E6F5] rounded-full w-fit p-1">
                  <IConDelete />
                </div>
                <p className="font-semibold text-gray-600">Hapus Data</p>
                <p className="font-base text-xs text-neutral-400 pb-2">
                  Apakah anda setuju untuk menghapus data ini ?
                </p>
                <div className="flex flex-row w-full gap gap-x-3">
                  <Button
                    type="button"
                    className="w-full text-sm py-1 border-full border-secondary-blue-500 text-secondary-blue-500 font-semibold border-solid border-2 rounded-md"
                    onClick={() => setisOpen(false)}
                  >
                    Tidak
                  </Button>
                  <Button
                    type="button"
                    className="w-full text-sm py-1 bg-secondary-blue-500 text-white rounded-md"
                    onClick={() => setisOpen(false)}
                  >
                    Iya
                  </Button>
                </div>
              </div>
            </CardCS>
          </Dialog.Title>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Table;
