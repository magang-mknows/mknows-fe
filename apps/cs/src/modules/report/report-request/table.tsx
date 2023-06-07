import { FC, ReactElement, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { TReportDataDummy } from "../type";
import { useReportData } from "../hooks";
import { IconDropdown, IconEmptyState } from "../../../components/atoms";

const Table: FC = (): ReactElement => {
  const { getReportData } = useReportData();
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
  const columns: TableColumn<TReportDataDummy>[] = [
    {
      name: "No",
      width: "6%",
      cell: (row, rowIndex) => <div className="px-2">{rowIndex + 1}</div>,
    },
    {
      name: "No Permintaan",
      width: "14.5%",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Jenis Scoring",
      width: "21%",
      cell: (row) => row.jenis_produk,
      sortable: true,
    },
    {
      name: "Jumlah Customer",
      width: "15.8%",
      cell: (row) => <div className="pl-10"> {row.jumlah_user} </div>,
      sortable: true,
    },
    {
      name: "Tanggal Permintaan",
      width: "18%",
      cell: (row) => row.tggl_permintaan,
      sortable: true,
    },
    {
      name: "Tanggal Selesai",
      cell: (row) => row.tggl_selesai,
      sortable: true,
    },
  ];

  const ExpandedComponent = () => (
    <div className="flex justify-center overflow-x-scroll">
      <DataTable columns={columnsExpand} data={getReportData} customStyles={ExpandRowStyle} />
    </div>
  );

  const columnsExpand: TableColumn<TReportDataDummy>[] = [
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
      cell: (row) => row.tggl_permintaan,
      sortable: true,
    },
    {
      name: "Nama",
      cell: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <button
          className={` ${
            row.status === "Sangat Baik"
              ? "bg-success-400"
              : row.status === "Cukup Buruk"
              ? "bg-warning-500"
              : "bg-error-400"
          } text-white w-[120px] text-sm p-1 rounded-md cursor-default`}
        >
          {row.status}
        </button>
      ),
    },

    {
      name: "Semua",
      cell: (row) => (
        <div className="mx-2">
          <input type="checkbox" />
        </div>
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
        data={getReportData}
        customStyles={customStyles}
        fixedHeader={true}
        expandableRows={true}
        expandableRowsComponent={ExpandedComponent}
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
