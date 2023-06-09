import { Button, IconEmptyState } from "@mknows-frontend-services/components/atoms";
import { FC, ReactElement } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useFilterActionResult, useResult } from "../hooks";
import { TResultItem } from "../types";
import { formatDate } from "@mknows-frontend-services/utils";

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
      status: "Menunggu",
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
      status: "Menunggu",
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
      status: "Gagal",
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
      status: "Gagal",
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

  const columns: TableColumn<TResultItem>[] = [
    {
      name: "ID",
      width: "5%",
      cell: (row, rowIndex) => <div className="">{rowIndex + 1}</div>,
      sortable: true,
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
      cell: (row) => <div className="font-semibold">{row.feature}</div>,
      sortable: true,
    },
    {
      name: "Jumlah Customer",
      width: "14%",
      cell: (row) => <div className="font-semibold pl-10">{row.total_user}</div>,
      sortable: true,
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

  const ExpandedComponent = () => (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <DataTable columns={columnsExpand} data={getProcessData} customStyles={ExpandRowStyle} />
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
      cell: (row) => <div className="font-semibold">{row.nama}</div>,
      sortable: true,
    },
    {
      name: "Skor",
      selector: (row) => row.skor,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.skor === "Sangat Buruk",
          classNames: ["bg-red flex items-center justify-center text-white my-1.5 rounded-[8px]"],
        },
        {
          when: (row) => row.skor === "Cukup Buruk",
          classNames: [
            "bg-warning-500 flex items-center justify-center text-white my-1.5 rounded-[8px]",
          ],
        },
        {
          when: (row) => row.skor === "Sangat Baik",
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
