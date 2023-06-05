import { IconEmptyState } from "../../../components/atoms/icons";
import { FC, ReactElement } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

const Table2: FC = (): ReactElement => {
  const data = [
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

  // const { data } = useRequest();

  type TResultDataDummy = {
    no: number;
    nik: number;
    nama: string;
    tggl_permintaan: string;
    waktu_permintaan: string;
    waktu_selesai: string;
    tggl_selesai: string;
    kendala_proses: string;
    skor: string;
    detail: string;
    jenis_produk: string;
    jumlah_kuota: number;
    status: string;
    jumlah_user: number;
  };

  const columns: TableColumn<TResultDataDummy>[] = [
    {
      name: "ID",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Jenis Permintaan",
      selector: (row) => row.jenis_produk,
      sortable: true,
    },
    {
      name: "Jumlah User",
      selector: (row) => row.jumlah_user,
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
    <div className="flex justify-center overflow-x-scroll">
      {/* <table className="w-full text-sm border rounded-lg text-left text-gray-500  dark:text-gray-400">
        <thead className="text-xs border text-[#A3A3A3] font-light bg-[#F6FBFA] dark:bg-[#F5F8FF]">
          <tr>
            <th></th>
            <th>No. </th>
            <th scope="col" className="px-4 py-2 cursor-default w-[10%]">
              <div className="flex gap-2 justify-center items-center">
                <p>No. Permintaan</p>
                <div>
                  <IconDropdown />
                </div>
              </div>
            </th>
            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Jenis Permintaan</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Jumlah User</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Tanggal Permintaan</p>
                <div>
                  <IconDropdown />
                </div>
              </div>
            </th>
            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Tanggal Selesai</p>
                <div>
                  <IconDropdown />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        {data.map((item, key) => {
          return (
            <tbody key={key}>
              <tr className="bg-white border-b dark:bg-[#ffff] ">
                <td className="px-4">
                  <IconTable />
                </td>
                <td className="px-1 py-2 text-[#262626]">{key + 1}</td>
                <td className="px-4 py-2 text-[#262626] ">100865</td>
                <td className="px-8 py-2 font-semibold text-[#262626]">
                  {item.nama}
                </td>
                <td className="px-8 py-2 text-[#262626]">{item.jumlah_user}</td>
                <td className="px-8 py-2 ">{item.tggl_permintaan}</td>
                <td className="px-8 py-2">{item.tggl_selesai}</td>
              </tr>
            </tbody>
          );
        })}
      </table> */}

      <DataTable columns={columnsExpand} data={data} customStyles={ExpandRowStyle} />
    </div>
  );

  const columnsExpand: TableColumn<TResultDataDummy>[] = [
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
      name: "Status",
      selector: (row) => row.skor,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.skor === "Sangat Buruk",
          classNames: [
            "bg-[#ff0000] flex items-center justify-center text-white my-1.5 rounded-[8px]",
          ],
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

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        fixedHeader={true}
        expandableRows={true}
        expandableRowsComponent={ExpandedComponent}
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

export default Table2;
