import { FC, ReactElement } from "react";
import { useFilterActionResultById, useResultById } from "../../hooks";
import { IconDropdown, IconEmptyState } from "@mknows-frontend-services/components/atoms";
import { TResultById } from "../../types";
import { formatDate } from "@mknows-frontend-services/utils";
import DataTable, { TableColumn } from "react-data-table-component";

const Table: FC = (): ReactElement => {
  const { getFilterActionResultId } = useFilterActionResultById();
  const { data } = useResultById(getFilterActionResultId);

  const sortIcon = (
    <div className="m-2">
      <IconDropdown />
    </div>
  );

  const columns: TableColumn<TResultById>[] = [
    {
      name: "No",
      width: "7%",
      cell: (row, rowIndex) => <div className="px-2">{rowIndex + 1}</div>,
    },
    {
      name: "Tanggal",
      width: "26%",
      selector: (row) =>
        formatDate({
          date: new Date(row.requested_at),
        }),
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
  const paginationComponentOptions = {
    rowsPerPageText: "Data per halaman",
    rangeSeparatorText: "dari",
  };

  return (
    <DataTable
      columns={columns}
      data={data?.data as TResultById[]}
      sortIcon={sortIcon}
      customStyles={customStyles}
      fixedHeader={true}
      selectableRows
      selectableRowsHighlight
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
