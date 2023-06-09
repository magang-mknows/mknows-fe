import { formatDate } from "@mknows-frontend-services/utils";
import { IconEmptyState } from "@mknows-frontend-services/components/atoms";
import { FC, ReactElement } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useFilterActionProcess, useProcess } from "../hooks";
import { TProcessItem } from "../types";

const Table2: FC = (): ReactElement => {
  const { getFilterActionProcess } = useFilterActionProcess();
  const { data } = useProcess(getFilterActionProcess);
  const dataDummy = [
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
  const columns: TableColumn<TDataDummy>[] = [
    {
      name: "ID",
      cell: (row, rowIndex) => <div>{rowIndex + 1}</div>,
      sortable: true,
    },
    {
      name: "No Permintaan",
      selector: (row) => row.request_number,
      sortable: true,
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
      name: "Tanggal Permintaan",
      selector: (row) =>
        formatDate({
          date: new Date(row.requested_at),
        }),
      sortable: true,
    },
    {
      name: "Tanggal Input",
      selector: (row) =>
        formatDate({
          date: new Date(row.requested_at),
        }),
      sortable: true,
    },
    {
      name: "Skor",
      selector: (row) => row.status,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.status === "GAGAL",
          classNames: ["bg-red flex items-center justify-center text-white my-1.5 rounded-[8px]"],
        },
        {
          when: (row) => row.status === "MENUNGGU",
          classNames: [
            "bg-warning-base flex items-center justify-center text-white my-1.5 rounded-[8px]",
          ],
        },
      ],
      width: "100px",
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

  const paginationComponentOptions = {
    rowsPerPageText: "Menampilkan hasil",
    rangeSeparatorText: "dari",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Page",
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={dataDummy}
        customStyles={customStyles}
        fixedHeader={true}
        expandableRows={false}
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

export default Table2;
