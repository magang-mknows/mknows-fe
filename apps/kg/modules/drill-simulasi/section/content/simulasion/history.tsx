import { FC, ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Done from '../../../assets/assigned-done.svg';
import drillDummy from '../../../assets/dummy-drill.svg';
import simulasiNull from '../../../assets/simualasi-null.svg';
import simulasiDone from '../../../assets/simulasi-done.svg';
import simulasiChecked from '../../../assets/simulasi-checked.svg';
import {
  useGetHistorySimulation,
  usePopupSubmissionStatus,
} from '../../../hooks';
import { PopupModal } from '@mknows-frontend-services/components/molecules';
import { THistoryItem } from '../../../type';

export const HistorySimulasion: FC = (): ReactElement => {
  const { data } = useGetHistorySimulation();
  const getHistory = data?.data;
  console.log('history: ', getHistory);
  const { setPopupStatus, getPopupStatus } = usePopupSubmissionStatus();

  return (
    <div className="md:px-6 py-0 mb-20">
      <>
        {getHistory.length === 0 ? (
          <div className="flex flex-col align-center items-center">
            <Image src={simulasiNull} alt="simulasi-null" />
            <h1 className="text-black">
              Belum ada riwayat simulasi yang tersedia.
            </h1>
          </div>
        ) : (
          <>
            {getHistory.map((items: THistoryItem, i: any) => (
              <>
                <div
                  key={i}
                  className={`flex flex-col md:flex-row dark:bg-[#1B1E21] bg-[#ffffff] rounded-lg drop-shadow-lg relative justify-between  mb-5 md:items-center ${
                    items.status === 'FINISHED' ? 'cursor-pointer' : ''
                  }`}
                  onClick={
                    items.status === 'FINISHED'
                      ? () => setPopupStatus(true)
                      : () => setPopupStatus(false)
                  }
                >
                  <div
                    className={`flex absolute -left-0 top-0 rounded-tl-lg rounded-bl-lg h-full w-2 ${
                      items.status === 'FINISHED'
                        ? 'bg-[#3EB449]'
                        : 'bg-[#FAB317]'
                    }`}
                  />
                  <div className="flex lg:flex-row flex-col items-center">
                    <Image
                      alt="Image"
                      src={drillDummy}
                      className="md:w-[217px] w-max object-contain md:ml-10 mx-auto mt-5 lg:mt-0"
                    />
                    <div className="banner md:px-8 px-5 md:py-6 py-4 ">
                      <h1 className="md:text-[20px] text-[18px] font-[700] dark:text-white text-[#262626]">
                        {items.topic}
                      </h1>
                      <p className="text-[#A3A3A3] font-[400] md:text-[16px] text-[14px] lg:mt-3 md:mt-2 mt-0">
                        {items.assessor_name}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-center items-start mr-6 md:mr-0 md:px-8 px-5 mb-7 md:py-0 md:mt-3">
                    {items.status === 'FINISHED' ? (
                      <div className="flex md:flex-col flex-row gap-3 md:gap-0 items-center ">
                        <Image
                          alt="Image"
                          src={Done}
                          className="md:mt-3 mt-0 md:w-[21px] w-[19px]"
                        />

                        <p className="md:text-[16px] text-[14px] font-[600] text-[#3EB449]">
                          Selesai
                        </p>
                      </div>
                    ) : (
                      <Link href={`/perubahan-jadwal/${items.topic}`}>
                        <button className="bg-[#FAB317] text-white md:text-[14px] text-[12px] font-[600] rounded-[8px] px-4 py-2 md:w-[230px] w-[200px] md:h-[36px] h-[30px] md:mt-3 mt-0">
                          Ajukan Perubahan Jadwal
                        </button>
                      </Link>
                    )}

                    <div className="flex flex-row text-[#262626] dark:text-[#A3A3A3] md:text-[16px] text-[14px] font-[400] mt-2  ">
                      <p>{items.picked_schedule}</p>
                      {/* <p className="px-2">|</p>
                      <p>{items.time}</p> */}
                    </div>
                  </div>
                </div>
                <div>
                  <PopupModal
                    icon={simulasiChecked}
                    image={simulasiDone}
                    popupTitle="Anda Telah Selesai Melakukan Simulasi!"
                    stylePopup={
                      'font-[700] text-[16px] md:text-[20px] lg:text-[23.4px]'
                    }
                    lookup={getPopupStatus}
                    className="!h-85 w-[100%] text-md py-10"
                    onClose={() => setPopupStatus(false)}
                  >
                    <p className="text-[#A3A3A3] font-[600] lg:text-[20px] md:text-[18px]">
                      Kamu telah melakukan simulasi di hari{' '}
                      <span className="text-[#737373]">
                        {items.picked_schedule} WIB
                      </span>
                    </p>
                  </PopupModal>
                </div>
              </>
            ))}
          </>
        )}
      </>
    </div>
  );
};
