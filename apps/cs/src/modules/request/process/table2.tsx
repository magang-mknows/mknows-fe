import { formatDate } from "@mknows-frontend-services/utils";
import { IconEmptyState } from "../../../components/atoms/icons";
import { FC, ReactElement } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

const Table2: FC = (): ReactElement => {
  const getProcessData = [
    {
      _id: "646f6a0617887bd055d4ae04",
      request_number: "0007821",
      feature: "AI Capability Scoring",
      result: "null",
      status: "GAGAL",
      problem: "NIK SALAH",
      request_input: "2023-05-27T12:14:02.856Z",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Dr. Heidi Johnston",
      nik: "6523154504332488",
    },
    {
      _id: "646f6a0617887bd055d4ac02",
      request_number: "0007823",
      feature: "AI Character Scoring",
      result: "null",
      status: "GAGAL",
      problem: "TOKEN HABIS",
      request_input: "2023-05-27T12:14:02.856Z",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Micheal Bogisich",
      nik: "4689816324237624",
    },
    {
      _id: "646f6a0617887bd055d4ab03",
      request_number: "0007822",
      feature: "AI Character Scoring",
      result: "null",
      status: "GAGAL",
      problem: "FOTO SELFIE TIDAK DI KENAL",
      request_input: "2023-05-27T12:14:02.856Z",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Eddie Dickens",
      nik: "5585148118074267",
    },
    {
      _id: "646f6a0617887bd055d4ac04",
      request_number: "0007823",
      feature: "AI Character Scoring",
      result: "null",
      status: "MENUNGGU",
      problem: "null",
      request_input: "2023-05-27T12:14:02.856Z",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Dr. Heidi Johnston",
      nik: "6523154504332488",
    },
    {
      _id: "646f6a0617887bd055d4ac03",
      request_number: "0007823",
      feature: "AI Character Scoring",
      result: "null",
      status: "MENUNGGU",
      problem: "null",
      request_input: "2023-05-27T12:14:02.856Z",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Lora O'Conner",
      nik: "5500026675168637",
    },
    {
      _id: "646f6a0617887bd055d4ab04",
      request_number: "0007822",
      feature: "AI Character Scoring",
      result: "null",
      status: "GAGAL",
      problem: "NIK SALAH",
      request_input: "2023-05-27T12:14:02.856Z",
      __v: 0,
      requested_at: "2023-05-27T12:14:02.856Z",
      finished_at: "2023-05-27T12:14:02.856Z",
      name: "Dr. Heidi Johnston",
      nik: "6523154504332488",
    },
  ];

  type TDataDummy = {
    _id: string;
    request_number: string;
    feature: string;
    result: string;
    status: string;
    problem: string;
    __v: number;
    requested_at: string;
    finished_at: string;
    request_input: string;
    name: string;
    nik: string;
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
      cell: (row) => <div>{formatDate(new Date(row.requested_at))}</div>,
      sortable: true,
    },
    {
      name: "Tanggal Input",
      cell: (row) => <div>{formatDate(new Date(row.request_input))}</div>,
      sortable: true,
    },
    {
      name: "Skor",
      selector: (row) => row.status,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.status === "GAGAL",
          classNames: [
            "bg-[#ff0000] flex items-center justify-center text-white my-1.5 rounded-[8px]",
          ],
        },
        {
          when: (row) => row.status === "MENUNGGU",
          classNames: [
            "bg-[#F59E0B] flex items-center justify-center text-white my-1.5 rounded-[8px]",
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
        data={getProcessData}
        customStyles={customStyles}
        fixedHeader={true}
        expandableRows={false}
        noDataComponent={
          <div className="flex flex-col w-full h-screen justify-center items-center">
            <IconEmptyState />
            <h1 className="font-bold my-2">Data Tidak Tersedia</h1>
            <p>Data akan ditampilkan apabila sudah tersedia data yang diperlukan</p>
          </div>
        }
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </div>
  );
};

export default Table2;
