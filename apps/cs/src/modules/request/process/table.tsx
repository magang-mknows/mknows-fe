import { formatDate } from "@mknows-frontend-services/utils";
import { IconDropdown, IconEmptyState } from "@mknows-frontend-services/components/atoms";
import { FC, ReactElement } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useFilterActionProcess, useProcess } from "../hooks";
import { TProcessItem } from "../types";

const Table2: FC = (): ReactElement => {
  const { getFilterActionProcess } = useFilterActionProcess();
  const { data } = useProcess(getFilterActionProcess);
  const sortIcon = (
    <div className="m-2">
      <IconDropdown />
    </div>
  );
  const columns: TableColumn<TProcessItem>[] = [
    {
      name: "No",
      width: "8%",
      cell: (row, rowIndex) => <div>{rowIndex + 1}</div>,
    },
    {
      name: "Tanggal Input",
      width: "21%",
      selector: (row) =>
        formatDate({
          date: new Date(row.requested_at),
        }),
      sortable: true,
    },

    {
      name: "NIK",
      width: "18%",
      selector: (row) => row.nik,
      sortable: true,
    },
    {
      name: "Nama",
      width: "17%",
      selector: (row) => row.name,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.name.length !== 0,
          classNames: ["font-bold"],
        },
      ],
    },
    {
      name: "No. Permintaan",
      width: "14%",
      selector: (row) => row.request_number,
      sortable: true,
    },
    {
      name: "Tanggal Permintaan",
      width: "25%",
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
    rowsPerPageText: "Menampilkan ",
    rangeSeparatorText: "dari",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Page",
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={data?.data as TProcessItem[]}
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
        sortIcon={sortIcon}
      />
    </div>
  );
};

export default Table2;
