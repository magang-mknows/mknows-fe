import { FC, ReactElement } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useUser, useFilterAction, useDeleteUser } from "./hooks";
import { TUserItem } from "./types";
import { formatDate } from "@mknows-frontend-services/utils";
import {
  IconDelete,
  IconCheck,
  IconEdit,
  IconDropdown,
  IconEmptyState,
} from "@mknows-frontend-services/components/atoms";
import { ToolTip } from "@mknows-frontend-services/components/atoms";
import { Link } from "react-router-dom";

const Table: FC = (): ReactElement => {
  const { getFilterAction } = useFilterAction();
  const { data, refetch } = useUser(getFilterAction);
  const { mutate: deleteUser } = useDeleteUser();
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
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Tanggal",
      width: "26%",
      selector: (row) =>
        formatDate({
          date: new Date(row.createdAt),
        }),
    },
    {
      name: "Berkas",
      cell: (row) => (
        <Link to={"/dashboard/user/detail-data"}>
          <div className="flex flex-row items-center gap-2 text-[#3D628D] cursor-pointer ">
            <p>Lihat Detail</p>
            <div className="pt-1">
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
              <ToolTip className="bg-white z-50" tooltip="Edit">
                <IconEdit />
              </ToolTip>
            </div>
          </Link>

          <ToolTip className="bg-white" tooltip="Delete">
            <div
              onClick={() =>
                deleteUser(row._id, {
                  onSuccess: () => refetch(),
                })
              }
              className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer"
            >
              <IconDelete />
            </div>
          </ToolTip>
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
