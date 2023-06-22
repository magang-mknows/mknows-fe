import { FC, ReactElement } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { TReportCustItems, TReportCustRequestItems } from "../types";
import { useReportCust } from "../hooks";
import { Button, IconDropdown, IconEmptyState } from "@mknows-frontend-services/components/atoms";
import { formatDate } from "@mknows-frontend-services/utils";

const Table: FC = (): ReactElement => {
  const { data: getDataReportCust } = useReportCust();
  const paginationComponentOptions = {
    rowsPerPageText: "Data per halaman",
    rangeSeparatorText: "dari",
  };

  const sortIcon = (
    <div className="m-2">
      <IconDropdown />
    </div>
  );
  const columns: TableColumn<TReportCustItems>[] = [
    {
      name: "No",
      cell: (row, rowIndex) => <div className="px-2">{rowIndex + 1}</div>,
      width: "14%",
    },
    {
      name: "Nik",
      selector: (row) => row.nik,
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
      name: "Scoring",
      cell: (row) => (
        <button className="bg-success-base flex items-center justify-center text-white my-1.5 rounded-[8px] p-2">
          Sangat Baik
        </button>
      ),
    },
  ];

  const ExpandedComponent = (data: TReportCustRequestItems[]) => (
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

  const columnsExpand: TableColumn<TReportCustRequestItems>[] = [
    {
      name: "No",
      cell: (row, rowIndex) => <div className="px-2">{rowIndex + 1}</div>,
    },
    {
      name: "No Permintaan",
      selector: (row) => row.request_number,
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
      name: "Jenis Permintaan",
      cell: (row) => row.feature_name,
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
    {
      name: "Lihat Detail",
      cell: (row) => (
        <button className="mx-2 bg-primary-300 text-white rounded-md p-2">Lihat</button>
      ),
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
        data={getDataReportCust?.data ?? []}
        customStyles={customStyles}
        fixedHeader={true}
        expandableRows={true}
        expandableRowsComponent={(data) => ExpandedComponent(data.data.requests)}
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
