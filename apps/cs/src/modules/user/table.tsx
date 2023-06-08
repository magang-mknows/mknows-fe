import { FC, ReactElement, useState } from "react";
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
} from "../../components/atoms";
import ToolTip from "../../components/atoms/tooltip";
import { Link } from "react-router-dom";

const Table: FC = (): ReactElement => {
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

  const columns: TableColumn<TUserItem>[] = [
    {
      name: "No",
      width: "7%",
      cell: (row, rowIndex) => <div className="px-2">{rowIndex + 1}</div>,
    },
    {
      name: "NIK",
      width: "19%",
      selector: (row) => row.nik,
      sortable: true,
    },
    {
      name: "Nama",
      cell: (row) => <div className="font-semibold">{row.name}</div>,
      sortable: true,
    },

    {
      name: "Tanggal",
      width: "26%",
      selector: (row) =>
        formatDate({
          date: new Date(row.createdAt),
        }),
      sortable: true,
    },
    {
      name: "Berkas",
      cell: (row) => (
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
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2 ml-[-15px]">
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
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data?.data as TUserItem[]}
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
  );
};

export default Table;
