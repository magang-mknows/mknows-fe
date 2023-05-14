import { FC, ReactElement } from 'react';
import Image from 'next/image';
import {
  useDataTable,
  usePopupConfirmStatus,
  usePopupSucces,
  usePopupAddStudy,
} from '../hooks';
import Confirm from './assets/Confirm.svg';
import Success from './assets/Success.svg';
// import SuspenseError from "@/modules/Common/SuspenseError";
import { Button } from '@mknows-frontend-services/components/atoms';

import { PopupModal } from '@mknows-frontend-services/components/molecules';
import { moveProps } from '../type';
const TabelDetailContract: FC<moveProps> = ({
  onClick,
  onMove,
}): ReactElement => {
  const { getDataTable } = useDataTable();
  const { setPopupStatus, getPopupStatus } = usePopupConfirmStatus();
  const { setPopupSuccess, getPopupSuccess } = usePopupSucces();
  const { setPopupAdd, getPopupAdd } = usePopupAddStudy();

  return (
    <>
      <div className="p-8 overflow-auto whitespace-nowrap">
        <div className="grid grid-flow-row auto-rows-auto">
          {/* thead⬇️⬇️⬇️⬇️ */}
          <div className="grid grid-flow-col auto-cols-min mx-auto border bg-gray-100 border-gray-200 rounded-t-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
            <div className="w-[88px] bg-gray-100 text-center md:text-[16px] rounded-md p-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              No.
            </div>
            <div className="lg:w-[353px] md:w-[225px] w-[180px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              Mata Kuliah
            </div>
            <div className="w-[176px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              Kode Matkul
            </div>
            <div className="w-[88px] bg-gray-100 lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              SKS
            </div>
            <div className="w-[176px] bg-gray-100 lg:text-start text-center py-3 font-semibold lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
              Semester
            </div>
            <div className="w-[177px] bg-gray-100 lg:text-start text-center py-3 font-semibold md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
              Tindakan
            </div>
          </div>

          {getDataTable.map((x, i) => (
            <div
              key={i}
              className="grid grid-flow-col auto-cols-min mx-auto border bg-gray-100 border-gray-200 rounded-t-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]"
            >
              <div className="w-[88px] border-t border-[#E5E5E5] bg-gray-100 text-center md:text-[16px] p-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.no}
              </div>
              <div className="lg:w-[353px] md:w-[225px] w-[180px] border-t border-[#E5E5E5] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                <div className="lg:flex lg:justify-center w-full lg:gap-4 p-4">
                  <div>
                    <Image src={x.img} alt="User" />
                  </div>
                  <div className="flex w-full flex-col w-auto">
                    <h1 className="font-bold text-start">{x.matkul}</h1>
                    <p className="text-gray-400 text-start">
                      {x.jmlh_mahasiswa} Mahasiswa Terdaftar
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[176px] border-t border-[#E5E5E5] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.kode_matkul}
              </div>
              <div className="w-[88px] bg-gray-100 border-t border-[#E5E5E5] lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.jmlh_sks}
              </div>
              <div className="w-[176px] bg-gray-100 border-t border-[#E5E5E5] lg:text-start text-center py-3 font-medium lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
                {x.semester}
              </div>
              <div className="w-[177px] bg-gray-100 border-t border-[#E5E5E5] dark:divide-gray-700 lg:text-start text-center py-3 font-medium md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
                <button
                  className={`flex gap-2 items-center p-4 font-semibold ${
                    x.tindakan_kontrak === 'tambah'
                      ? 'text-blue-600'
                      : 'text-red-600'
                  }`}
                  onClick={() => setPopupStatus(true)}
                >
                  {x.tindakan_kontrak === 'tambah' ? (
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.311523"
                        width="24.3762"
                        height="24.3762"
                        rx="12.1881"
                        fill="#106FA4"
                      />
                      <path
                        d="M19.298 13.515H13.204V19.6091H11.1727V13.515H5.07861V11.4837H11.1727V5.38965H13.204V11.4837H19.298V13.515Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.311523"
                        width="24.3762"
                        height="24.3762"
                        rx="12.1881"
                        fill="#EE2D24"
                      />
                      <path
                        d="M16.4971 18.2445L12.188 13.9354L7.87885 18.2445L6.44247 16.8081L10.7516 12.499L6.44247 8.18986L7.87885 6.75348L12.188 11.0626L16.4971 6.75348L17.9335 8.18986L13.6244 12.499L17.9335 16.8081L16.4971 18.2445Z"
                        fill="white"
                      />
                    </svg>
                  )}

                  {x.tindakan_kontrak === 'tambah' ? ' tambah ' : 'hapus'}
                </button>
              </div>
            </div>
          ))}
          <div className="grid grid-flow-col auto-cols-min mx-auto border bg-gray-100 border-gray-200 rounded-t-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
            <div className="w-[617px] border-t border-[#E5E5E5] bg-gray-100 lg:text-start text-center py-3 px-6 font-semibold md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
              Total SKS
            </div>
            <div className="border-t border-[#E5E5E5] bg-gray-100 lg:text-start text-center py-3 font-semibold md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
              24 SKS
            </div>
          </div>
        </div>

        {/* <tfoot>
            <tr>
              <th scope="row" className="px-6 py-3 text-base">
                Total SKS
              </th>
              <td></td>
              <td></td>
              <td className="font-bold">12 SKS</td>
            </tr>
          </tfoot> */}

        {/* <SuspenseError> */}
        <PopupModal
          onClose={() => setPopupStatus(false)}
          icon={Confirm}
          popupTitle="Konfirmasi"
          lookup={getPopupStatus}
          className="!h-80 !w-[100%] text-md py-10"
        >
          <h1 className="py-2 text-2xl">
            Apakah anda sudah mempelajari mata kuliah ini?
          </h1>
          <div className="flex gap-3 my-2 py-4">
            <Button
              className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
              onClick={() => {
                setPopupSuccess(true);
                setPopupStatus(false);
              }}
              type={'button'}
            >
              Pernah
            </Button>
            <Button
              className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
              type={'button'}
              onClick={() => {
                setPopupAdd(true);
                setPopupStatus(false);
              }}
            >
              Belum
            </Button>
          </div>
        </PopupModal>
        {/* </SuspenseError>
        <SuspenseError> */}
        <PopupModal
          onClose={() => setPopupSuccess(false)}
          icon={Success}
          popupTitle="Berhasil"
          lookup={getPopupSuccess}
          className="!h-80 !w-[100%] text-md py-10"
        >
          <h1 className="py-2 text-2xl">
            Mata kuliah berhasil di tambah ke{' '}
            <span className="font-bold">Konversi</span>
          </h1>
          <div className="flex gap-3 my-2 py-4">
            <Button
              className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
              onClick={onMove}
              type={'button'}
            >
              Lihat Konversi
            </Button>
            <Button
              className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
              type={'button'}
              onClick={() => setPopupSuccess(false)}
            >
              Kembali
            </Button>
          </div>
        </PopupModal>
        {/* </SuspenseError>
        <SuspenseError> */}
        <PopupModal
          onClose={() => setPopupSuccess(false)}
          icon={Success}
          popupTitle="Berhasil"
          lookup={getPopupAdd}
          className="!h-80 !w-[100%] text-md py-10"
        >
          <h1 className="py-2 text-2xl">
            Mata kuliah berhasil di tambah ke{' '}
            <span className="font-bold">Draft KRS</span>
          </h1>
          <div className="flex gap-3 my-2 py-4">
            <Button
              className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
              onClick={onClick}
              type={'button'}
            >
              Lihat Draft KRS
            </Button>
            <Button
              className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
              type={'button'}
              onClick={() => setPopupAdd(false)}
            >
              Kembali
            </Button>
          </div>
        </PopupModal>
        {/* </SuspenseError> */}
      </div>
    </>
  );
};

export default TabelDetailContract;
