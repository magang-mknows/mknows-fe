import { FC, ReactElement } from "react";
import { useQuotaData } from "../hooks";
import {
  Button,
  IconCheck,
  IconDropdown,
  IconEmptyState,
  IconError,
} from "@mknows-frontend-services/components/atoms";
import DataTable, { TableColumn } from "react-data-table-component";
import { TQuotaItem } from "../types";
import { formatDate } from "@mknows-frontend-services/utils";

const Table: FC = (): ReactElement => {
  const { getQuotaData } = useQuotaData();
  const sortIcon = (
    <div className="m-2">
      <IconDropdown />
    </div>
  );

  const columns: TableColumn<TQuotaItem>[] = [
    {
      name: "No",
      width: "5%",
      cell: (row, rowIndex) => <div className="">{rowIndex + 1}</div>,
    },
    {
      name: "No. Permintaan",
      width: "12%",
      cell: (row) => <div className="pl-6">{row.request_number}</div>,
    },
    {
      name: "Tanggal Request",
      width: "20%",
      cell: (row) =>
        formatDate({
          date: new Date(row.created_at),
        }),
    },
    {
      name: "Tanggal Selesai",
      width: "20%",
      cell: (row) =>
        formatDate({
          date: new Date(row.updated_at),
        }),
    },
    {
      name: "Nama Perusahaan",
      width: "22%",
      selector: (row) => row.company,
    },
    {
      name: "Jenis Produk",
      width: "16%",
      selector: (row) => row.feature,
    },
    {
      name: "Jumlah Kuota",
      width: "12%",
      selector: (row) => row.quantity,
    },
    {
      name: "Status Pembayaran",
      width: "16%",
      cell: (row) => (
        <div className="flex flex-row gap-x-1">
          <span>{row.payment_status}</span>
          <div className="pt-1">
            {row.payment_status === "MENUNGGU" ? <IconCheck /> : <IconError />}
          </div>
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <Button type="submit" className="bg-primary-400 text-white px-3 py-1 text-sm  rounded-md">
          Lihat
        </Button>
      ),
    },
  ];
  const paginationComponentOptions = {
    rowsPerPageText: "Menampilkan hasil",
    rangeSeparatorText: "dari",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Page",
  };
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
    <div>
      <DataTable
        columns={columns}
        data={getQuotaData}
        fixedHeader={true}
        customStyles={customStyles}
        sortIcon={sortIcon}
        noDataComponent={
          <div className="flex flex-col w-full h-screen justify-center items-center">
            <IconEmptyState />
            <h1 className="font-bold my-2">Data Tidak Tersedia</h1>
            <p>Table akan ditampilkan apabila sudah tersedia data yang diperlukan</p>
          </div>
        }
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </div>
  );
};

export default Table;
