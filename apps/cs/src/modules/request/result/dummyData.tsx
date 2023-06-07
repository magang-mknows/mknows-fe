import { IconEmptyState } from "../../../components/atoms/icons";
import { FC, ReactElement } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useFilterActionResult, useResult } from "../hooks";
import { TResultItem } from "../types";
import { Button } from "@mknows-frontend-services/components/atoms";
import Download from "/assets/download-bottom.webp";

const Table2: FC = (): ReactElement => {
  const getProcessData = [
    {
      no: 10002345,
      nik: 327000189266,
      nama: "Albert Maniqueen",
      tggl_permintaan: "11/2/2021",
      waktu_permintaan: "09:22:30",
      tggl_selesai: "11/2/2021",
      waktu_selesai: "09:22:30",
      kendala_proses: "-",
      skor: "Sangat Baik",
      detail: "Lihat Detail",
      jenis_produk: "AI Identity Scoring",
      jumlah_kuota: 20,
      status: "Sangat Buruk",
      jumlah_user: 4,
    },
    {
      no: 11122334,
      nik: 32356789,
      nama: "Ludwig Bethoven",
      tggl_permintaan: "15/3/2022",
      waktu_permintaan: "09:22:30",
      tggl_selesai: "11/2/2023",
      waktu_selesai: "09:22:30",
      kendala_proses: "NIK salah",
      skor: "Cukup Buruk",
      detail: "Lihat Detail",
      jenis_produk: "AI Character Scoring",
      jumlah_kuota: 50,
      status: "Sangat Buruk",
      jumlah_user: 12,
    },
    {
      no: 123578912,
      nik: 3278532111,
      nama: "Jawadal Al Hilal",
      tggl_permintaan: "11/8/2021",
      waktu_permintaan: "09:22:30",
      tggl_selesai: "11/2/2024",
      waktu_selesai: "09:22:30",
      kendala_proses: "Kualitas KTP buruk",
      skor: "-",
      detail: "Lihat Detail",
      jenis_produk: "AI Capability Scoring",
      jumlah_kuota: 200,
      status: "Sangat Baik",
      jumlah_user: 20,
    },
    {
      no: 10002345,
      nik: 327000189266,
      nama: "Yasmin Siahaan",
      tggl_permintaan: "11/2/2021",
      waktu_permintaan: "09:22:30",
      tggl_selesai: "11/2/2021",
      waktu_selesai: "09:22:30",
      kendala_proses: "-",
      skor: "Sangat Buruk",
      detail: "Lihat Detail",
      jenis_produk: "AI Credit Scoring",
      jumlah_kuota: 250,
      status: "Sangat Baik",
      jumlah_user: 10,
    },
  ];

  type TDataDummy = {
    no: number;
    nik: number;
    nama: string;
    tggl_input: string;
    tggl_permintaan: string;
    waktu_permintaan: string;
    tggl_selesai: string;
    waktu_selesai: string;
    kendala_proses: string;
    skor: string;
    detail: string;
    jenis_produk: string;
    jumlah_kuota: number;
    status: string;
    jumlah_user: number;
  };

  const { getFilterActionResult } = useFilterActionResult();
  const { data } = useResult(getFilterActionResult);

  const columns: TableColumn<TDataDummy>[] = [
    {
      name: "ID",
      cell: (row, rowIndex) => <div className="px-2">{rowIndex + 1}</div>,
      sortable: true,
    },
    {
      name: "Jenis Scoring",
      selector: (row) => row.jenis_produk,
      sortable: true,
    },
    {
      name: "Jumlah Customer",
      selector: (row) => row.jumlah_user,
      sortable: true,
    },
    {
      name: "Tanggal Input",
      selector: (row) => row.tggl_permintaan,
      sortable: true,
    },
    {
      name: "Tanggal Permintaan",
      selector: (row) => row.tggl_permintaan,
      sortable: true,
    },
    {
      name: "Tanggal Selesai",
      selector: (row) => row.tggl_selesai,
      sortable: true,
    },
  ];

  const ExpandedComponent = () => (
    <div className="flex flex-col overflow-x-scroll">
      <DataTable columns={columnsExpand} data={getProcessData} customStyles={ExpandRowStyle} />
      <div className="flex justify-end mr-24 my-2">
        <Button
          type="button"
          className="w-[15%] justify-center flex py-2 border-[#5E5E5E] border-[1px] rounded-[8px]"
        >
          <div className="flex flex-row space-x-1">
            <img src={Download} alt="download-button" className="" />
            <div className="text-[#5E5E5E] font-semibold text-sm">Unduh</div>
          </div>
        </Button>
      </div>
    </div>
  );

  const columnsExpand: TableColumn<TDataDummy>[] = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "NIK",
      selector: (row) => row.nik,
      sortable: true,
    },
    {
      name: "Tanggal Permintaan",
      selector: (row) => row.tggl_permintaan,
      sortable: true,
    },
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Skor",
      selector: (row) => row.status,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.status === "Sangat Buruk",
          classNames: [
            "bg-[#ff0000] flex items-center justify-center text-white my-1.5 rounded-[8px]",
          ],
        },
        {
          when: (row) => row.status === "Cukup Buruk",
          classNames: [
            "bg-warning-500 flex items-center justify-center text-white my-1.5 rounded-[8px]",
          ],
        },
        {
          when: (row) => row.status === "Sangat Baik",
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
        data={getProcessData}
        customStyles={customStyles}
        fixedHeader={true}
        expandableRows={true}
        expandableRowsComponent={ExpandedComponent}
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
