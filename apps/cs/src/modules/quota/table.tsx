import { FC, ReactElement } from "react";
import { useFilterAction, useQuota } from "./hooks";
import { IconDropdown, IconEmptyState } from "@mknows-frontend-services/components/atoms";
import DataTable, { TableColumn } from "react-data-table-component";
import { TQuotaItem } from "./types";
import { formatDate } from "@mknows-frontend-services/utils";

const Table: FC = (): ReactElement => {
  const { getFilterAction } = useFilterAction();
  const { data } = useQuota(getFilterAction);
  const paginationComponentOptions = {
    rowsPerPageText: "Data per halaman",
    rangeSeparatorText: "dari",
  };

  const sortIcon = (
    <div className="m-2">
      <IconDropdown />
    </div>
  );
  const columns: TableColumn<TQuotaItem>[] = [
    {
      name: "No Permintaan",
      width: "13%",
      cell: (row) => <div className="pl-6">{row.request_number}</div>,
    },
    {
      name: "Jenis Scoring",
      selector: (row) => row.feature,
      sortable: true,
    },
    {
      name: "Tanggal Permintaan",
      width: "24%",
      selector: (row) =>
        formatDate({
          date: new Date(row.created_at),
        }),
      sortable: true,
    },
    {
      name: "Tanggal Jumlah Customer",
      cell: (row) => <div className="pl-12">{row.quantity}</div>,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <button
          className={` ${
            row.status === "SUCCESS"
              ? "bg-success-500"
              : row.status === "PROCESS"
              ? "bg-secondary-600"
              : "bg-error-400"
          } text-white w-[110px] text-sm p-2 rounded-md cursor-default`}
        >
          {row.status}
        </button>
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "45px",
      },
    },
    expanderButton: {
      style: {
        color: "white",
        borderRadius: "100%",
        backgroundColor: "#1B9984",
        width: "50%",
        height: "50%",
        svg: {
          width: "70%",
        },
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "#F5F8FF",
        textColor: "#A3A3A3",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={data?.data as TQuotaItem[]}
        customStyles={customStyles}
        fixedHeader={true}
        sortIcon={sortIcon}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        noDataComponent={
          <div className="flex flex-col w-full h-screen justify-center items-center">
            <IconEmptyState />
            <h1 className="font-bold my-2">Data Tidak Tersedia</h1>
            <p>Table akan ditampilkan apabila sudah tersedia data yang diperlukan</p>
          </div>
        }
      />
    </div>
  );
};
export default Table;
