import { FC, ReactElement } from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FcFolder } from 'react-icons/fc';

export const DocumentServiceList: FC = (): ReactElement => {
  const dummyDocTemplate = [
    { title: 'Administrasi Pengguna Baru', total: 1 },
    { title: 'Pelayanan Daftar Ulang', total: 1 },
    { title: 'Pembuatan KIP Fisik', total: 1 },
    { title: 'Surat Keterangan Aktif Bekerja', total: 1 },
    { title: 'Surat Keterangan Cuti', total: 1 },
    { title: 'Penerbitan Ijazah, Akta, Transkrip, Dan KIP', total: 1 },
    { title: 'Administrasi Kinerja', total: 1 },
    { title: 'Surat Keterangan Kinerja', total: 1 },
  ];

  return (
    <section className="px-8 md:px-14 lg:px-32 justify-center flex-wrap flex gap-x-16 gap-y-12 pb-40">
      {dummyDocTemplate.map((doc, index) => {
        return (
          <div
            key={index}
            className="bg-neutral-50 rounded-md shadow-md px-10 py-10 w-full md:w-[300px] lg:w-[320px] h-[310px]"
          >
            <FcFolder className="text-[140px] text-version3-400 mb-2 " />
            <h1 className="font-bold mb-6 h-12 ">{doc.title}</h1>
            <section className="flex justify-between items-center">
              <p className="text-neutral-500 text-sm">{doc.total} template</p>
              <AiOutlineCloudDownload className="text-version3-500 hover:bg-neutral-200  transition-all duration-150 ease-in-out rounded-full cursor-pointer font-bold text-2xl" />
            </section>
          </div>
        );
      })}
    </section>
  );
};
