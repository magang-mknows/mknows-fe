import { Button, IconEmptyState, IconDropdown } from "@mknows-frontend-services/components/atoms";
import { FC, ReactElement } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useFilterActionResult, useResult, useResultById } from "../hooks";
import { TResultItem, TResultById } from "../types";
import { formatDate } from "@mknows-frontend-services/utils";

const Table2: FC = (): ReactElement => {
  const { getFilterActionResult } = useFilterActionResult();
  const { data } = useResult(getFilterActionResult);

  const sortIcon = (
    <div className="m-2">
      <IconDropdown />
    </div>
  );

  const columns: TableColumn<TResultItem>[] = [
    {
      name: "No",
      width: "10%",
      cell: (row, rowIndex) => <div className="">{rowIndex + 1}</div>,
    },
    {
      name: "Tanggal Input",
      width: "22%",
      selector: (row) =>
        formatDate({
          date: new Date(row.requested_at),
        }),
      sortable: true,
    },
    {
      name: "Jenis Permintaan",
      width: "20%",
      selector: (row) => row.feature,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.feature.length !== 0,
          classNames: ["font-bold"],
        },
      ],
    },
    {
      name: "Jumlah Customer",
      width: "14%",
      selector: (row) => row.total_user,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.total_user !== 0,
          classNames: ["font-bold"],
        },
      ],
    },
    {
      name: "Tanggal Permintaan",
      width: "22%",
      selector: (row) =>
        formatDate({
          date: new Date(row.requested_at),
        }),
      sortable: true,
    },
    {
      name: "Tanggal Selesai",
      width: "22%",
      selector: (row) =>
        formatDate({
          date: new Date(row.finished_at),
        }),
      sortable: true,
    },
  ];

  const ExpandedComponent = ({ id }: { id: string }) => {
    const { data } = useResultById({ id });
    return (
      <div className="flex flex-col">
        <div className="flex justify-center">
          <DataTable
            columns={columnsExpand}
            data={data?.data as TResultById[]}
            selectableRows
            selectableRowsHighlight
            customStyles={ExpandRowStyle}
            sortIcon={sortIcon}
          />
        </div>
        <div className="flex justify-end w-full">
          <Button
            type="submit"
            className="flex flex-row my-2 py-[6px] px-[18px] mr-[11%] border-neutral-200 border-[1px] rounded-md items-center space-x-1"
          >
            <img src="/download-bottom.webp" alt="download-icon" className="w-full" />
            <span className="font-semibold text-xs text-neutral-700">Unduh</span>
          </Button>
        </div>
      </div>
    );
  };

  const columnsExpand: TableColumn<TResultById>[] = [
    {
      name: "No",
      width: "10%",
      cell: (row, rowIndex) => <div className="">{rowIndex + 1}</div>,
    },
    {
      name: "NIK",
      selector: (row) => row?.nik as string,
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
      name: "Nama",
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
      name: "Hasil",
      selector: (row) => row.status,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.status === "SANGAT BURUK",
          classNames: ["bg-red flex items-center justify-center text-white my-1.5 rounded-[8px]"],
        },
        {
          when: (row) => row.status === "CUKUP BURUK",
          classNames: [
            "bg-warning-500 flex items-center justify-center text-white my-1.5 rounded-[8px]",
          ],
        },
        {
          when: (row) => row.status === "SANGAT BAIK",
          classNames: [
            "bg-success-400 flex items-center justify-center text-white my-1.5 rounded-[8px]",
          ],
        },
      ],
      width: "100px",
    },
  ];

  const ExpandRowStyle = {
    rows: {
      style: {
        minHeight: "45px",
      },
    },
    table: {
      style: {
        paddingLeft: "100px",
        paddingRight: "100px",
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
        data={data?.data as TResultItem[]}
        customStyles={customStyles}
        fixedHeader={true}
        expandableRows={true}
        expandableRowsComponent={(data) => {
          return <ExpandedComponent id={data?.data?._id} />;
        }}
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

export default Table2;
