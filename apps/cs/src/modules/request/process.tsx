/* eslint-disable no-constant-condition */
import { ReactElement, FC } from 'react';
import { useResultData, useResultQuery } from './hooks';
import Search from '../../components/atoms/search';
import Pagination from '../../components/atoms/pagination';

const ProsesPage: FC = (): ReactElement => {
  const { setResultQuery, getResultQuery } = useResultQuery();
  const { getResultData } = useResultData();

  return (
    <section>
      <div className="my-9 flex lg:flex-row flex-col h-[40px]  items-center">
        <p className="font-bold text-[#444444] text-lg ml-8 w-[60%]">
          Permintaan Hari ini
        </p>
        <div className="flex flex-row gap gap-x-3 w-full mt-4 lg:mt-0">
          <div className="w-[40%]">
            <select
              id="category"
              className="cursor-pointer px-4 font-semibold bg-neutral-200 border border-gray-300 text-neutral-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] "
            >
              <option selected>Semua</option>
              <option value="US">AI Optimation</option>
              <option value="CA">AI Document Verification</option>
              <option value="FR">AI Condition Analysis</option>
              <option value="DE">AI Location & Movement</option>
            </select>
          </div>
          <div className="w-full">
            <Search
              value={getResultQuery}
              onChange={(e: { target: { value: string } }) =>
                setResultQuery(e.target.value)
              }
            />
          </div>
        </div>
      </div>
      {/* table */}
      <div className="overflow-x-scroll mt-20 lg:mt-0">
        <table className="w-full text-sm border rounded-lg text-left text-gray-500   overflow-x-scroll ">
          <thead className="text-xs border text-[#A3A3A3] font-light bg-[#F6FBFA] dark:bg-[#F5F8FF] ">
            <tr>
              <th scope="col" className="px-2 py-2 cursor-default ">
                <div className="flex gap-5 justify-center items-center">
                  <p>No.</p>
                </div>
              </th>
              <th scope="col" className="px-8 py-2 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>No. Permintaan</p>
                  <img
                    src="/assets/request-page/markdown-icon.svg"
                    alt="markdown icon"
                  />
                </div>
              </th>
              <th scope="col" className="px-2 py-2 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>NIK</p>
                  <img
                    src="/assets/request-page/markdown-icon.svg"
                    alt="markdown icon"
                  />
                </div>
              </th>
              <th scope="col" className="w-[40%] px-6 py-2 cursor-default">
                <div className=" flex gap-2 justify-center items-center">
                  <p>Nama</p>
                  <img
                    src="/assets/request-page/markdown-icon.svg"
                    alt="markdown icon"
                  />
                </div>
              </th>
              <th scope="col" className="px-8 py-2 cursor-default">
                <div className="flex gap-2 items-center">
                  <p>Tanggal Permintaan</p>
                  <img
                    src="/assets/request-page/markdown-icon.svg"
                    alt="markdown icon"
                  />
                </div>
              </th>
              <th scope="col" className="px-0 py-2 cursor-default">
                <div className="flex gap-2 items-center">
                  <p>Kendala Proses</p>
                </div>
              </th>
              <th scope="col" className="px-6 py-2 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>Skor</p>
                  <img
                    alt="markdown icon"
                    src="/assets/request-page/markdown-icon.svg"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {getResultData.map((item, key) => {
              return (
                <tr
                  key={key}
                  className="text-[#262626] bg-white border-b dark:bg-[#ffff] "
                >
                  <td className="px-6">{key + 1}</td>
                  <td className="px-8 py-2">{item.no}</td>
                  <td className="px-6 py-2">{item.nik}</td>
                  <td className="px-2 py-2 font-semibold">{item.nama}</td>
                  <td className="w-full px-8 py-2">
                    {item.tggl_permintaan} {item.waktu_permintaan}
                  </td>
                  <td className="px-6 py-2">{item.kendala_proses}</td>
                  <td className="px-4 py-2 bg-green-400">
                    {item.skor === 'Sangat Baik' ? (
                      <button className="bg-success-400 text-white w-[100px] text-sm p-2 rounded-md cursor-default">
                        {item.skor}
                      </button>
                    ) : item.skor === 'Cukup Buruk' ? (
                      <button className="bg-warning-500 text-white w-[100px] text-sm p-2 rounded-md cursor-default">
                        {item.skor}
                      </button>
                    ) : item.skor === 'Sangat Buruk' ? (
                      <button className="bg-error-400 text-white w-[100px] text-sm p-2 rounded-md cursor-default">
                        {item.skor}
                      </button>
                    ) : (
                      <span className="px-11">-</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="lg:text-xs text-[10px]  flex flex-row justify-between my-3">
        <div className=" text-neutral-400 font-base">
          Menampilkan 1-10 dari 110 hasil
        </div>
        <div className="font-semibold text-neutral-500">
          Untuk melihat riwayat permintaan sebelumnya{' '}
          <span className="text-[#4FA0CF]">
            {' '}
            <a href="/dashboard/home">klik disini</a>
          </span>
        </div>
      </div>

      <Pagination />
    </section>
  );
};

export default ProsesPage;
