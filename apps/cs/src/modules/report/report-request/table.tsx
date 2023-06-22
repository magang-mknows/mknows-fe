import { FC, ReactElement } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { TReportRequestItems, TReportRequestUsersItem } from "../types";
import { useReportRequest } from "../hooks";
import { formatDate } from "@mknows-frontend-services/utils";
import { Button, IconDropdown, IconEmptyState } from "@mknows-frontend-services/components/atoms";

const Table: FC = (): ReactElement => {
  const { data: getDataReportRequest } = useReportRequest();
  const paginationComponentOptions = {
    rowsPerPageText: "Data per halaman",
    rangeSeparatorText: "dari",
  };

  const sortIcon = (
    <div className="m-2">
      <IconDropdown />
    </div>
  );
  const columns: TableColumn<TReportRequestItems>[] = [
    {
      name: "No",
      width: "6%",
      cell: (row, rowIndex) => <div className="px-2">{rowIndex + 1}</div>,
    },
    {
      name: "No Permintaan",
      width: "14.5%",
      selector: (row) => row.request_number,
      sortable: true,
    },
    {
      name: "Jenis Scoring",
      width: "21%",
      cell: (row) => row.feature,
      sortable: true,
    },
    {
      name: "Jumlah Customer",
      width: "15.8%",
      cell: (row) => <div className="pl-10"> {row.total_user} </div>,
      sortable: true,
    },
    {
      name: "Tanggal Permintaan",
      width: "18%",
      selector: (row) =>
        formatDate({
          date: new Date(row.requested_at),
        }),
      sortable: true,
    },
    {
      name: "Tanggal Selesai",
      selector: (row) =>
        formatDate({
          date: new Date(row.finished_at),
        }),
      sortable: true,
    },
  ];

  const ExpandedComponent = (data: TReportRequestUsersItem[]) => (
    <div className="flex flex-col">
      <DataTable
        columns={columnsExpand}
        data={data ?? []}
        customStyles={ExpandRowStyle}
        selectableRows
        selectableRowsHighlight
      />
      <div className="flex justify-end w-full">
        <Button
          type="submit"
          className="flex flex-row my-2 py-[6px] px-2 mr-[16%] border-neutral-200 border-[1px] rounded-md items-center space-x-1"
        >
          <img src="/download-bottom.webp" alt="download-icon" className="w-full" />
          <span className="font-semibold text-xs text-neutral-700">Unduh</span>
        </Button>
      </div>
    </div>
  );

  const columnsExpand: TableColumn<TReportRequestUsersItem>[] = [
    {
      name: "No",
      cell: (row, rowIndex) => <div className="px-2">{rowIndex + 1}</div>,
    },
    {
      name: "Nik",
      selector: (row) => row.nik,
      sortable: true,
    },
    {
      name: "Tanggal Permintaan",
      cell: (row) => row.date_requested,
      sortable: true,
    },
    {
      name: "Nama",
      cell: (row) => row.name,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => row.result,
      conditionalCellStyles: [
        {
          when: (row) => row.result === "SANGAT BURUK" || row.result === "BURUK",
          classNames: [
            "bg-error-base flex items-center justify-center text-white my-1.5 rounded-[8px]",
          ],
        },

        {
          when: (row) => row.result === "CUKUP BAIK",
          classNames: [
            "bg-warning-base flex items-center justify-center text-white my-1.5 rounded-[8px]",
          ],
        },
        {
          when: (row) => row.result === "BAIK" || row.result === "SANGAT BAIK",
          classNames: [
            "bg-success-base flex items-center justify-center text-white my-1.5 rounded-[8px]",
          ],
        },
      ],
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

  return (
    <div>
      <DataTable
        columns={columns}
        data={getDataReportRequest?.data ?? []}
        customStyles={customStyles}
        fixedHeader={true}
        expandableRows={true}
        expandableRowsComponent={(data) => ExpandedComponent(data.data.user_requests)}
        sortIcon={sortIcon}
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
    </div>
  );
};

export default Table;
