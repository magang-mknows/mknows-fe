import { FC, ReactElement } from 'react';
import Image from 'next/image';
import Example1 from '../../assets/example1.svg';
import Example2 from '../../assets/example2.svg';
import Delete from '../../assets/Delete.svg';
import {
  useDataTable,
  usePopupUploadStudyPlan,
  usePopupDeleteStudyPlan,
  usePopupSubmissionStudyPlan,
} from '../hooks';
import { Button } from '@mknows-frontend-services/components/atoms';
// import PopupUploadStudyPlan from '@/components/StudyPlan/PopUps/PopupUploadStudyPlan';
// import PopupSubmissionStudyPlan from './PopUps/PopupSubmissionStudyPlan';
// import PopupDeleteStudyPlan from './PopUps/PopupDeleteStudyPlan';
// import PopupSuccessStudyPlan from './PopUps/PopupSuccessStudyPlan';

const tabel = [
  {
    no: 1,
    matkul: 'Bahasa Inggris',
    img: Example1,
    jmlh_mahasiswa: 15,
    kode_matkul: '123456ASD',
    jmlh_sks: 4,
    tindakan: 'abc.pdf',
  },
  {
    no: 2,
    matkul: 'Kalkulus',
    img: Example2,
    jmlh_mahasiswa: 21,
    kode_matkul: '18ASl22',
    jmlh_sks: 8,
    tindakan: 'Upload',
  },
];

const TabelPretest: FC = (): ReactElement => {
  const { setPopupUploadStatus } = usePopupUploadStudyPlan();
  const { setPopupSubmissionStatus } = usePopupSubmissionStudyPlan();
  const { setPopupDeleteStatus } = usePopupDeleteStudyPlan();
  const { getDataTable } = useDataTable();
  return (
    <>
      {/* <PopupUploadStudyPlan />
      <PopupSubmissionStudyPlan />
      <PopupDeleteStudyPlan />
      <PopupSuccessStudyPlan /> */}

      <div className="p-8 overflow-auto whitespace-nowrap">
        <div className="grid grid-flow-row auto-rows-auto">
          {/* thead⬇️⬇️⬇️⬇️ */}
          <div className="grid grid-flow-col auto-cols-min mx-auto border bg-[#f3f4f6] border-[#e5e7eb] rounded-t-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
            <div className="w-[50px] px-1 bg-[#f3f4f6] text-center md:text-[16px] rounded-md p-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              No.
            </div>
            <div className="lg:w-[275px] md:w-[275px] w-[180px] md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-[#f3f4f6] lg:text-start py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              Mata Kuliah
            </div>
            <div className="w-[115px] px-1 md:text-[16px] lg:gap-[4px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              Kode Matkul
            </div>
            <div className="w-[50px] px-1 bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
              SKS
            </div>
            <div className="w-[90px] px-1 bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
              Semester
            </div>
            <div className="w-[110px] px-2 bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
              Upload
            </div>
            <div className="w-[160px] px-1 bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
              Tindakan
            </div>
            <div className="w-[80px] px-1 bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
              Status
            </div>
            <div className="px-1 bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
              Waktu Selesai
            </div>
          </div>

          {/* tbody⬇️⬇️⬇️⬇️ */}
          {getDataTable.map((x, i) => (
            <div
              key={i}
              className="grid grid-flow-col auto-cols-min mx-auto border border-[#e5e7eb] divide-neutral-400  dark:divide-gray-700 w-full text-[16px]"
            >
              <div className="w-[50px] px-1 text-center md:text-[16px] rounded-md p-3 lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.no}
              </div>
              <div className="lg:w-[275px] md:w-[275px] w-[180px] lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
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
              <div className="w-[115px] px-1 md:gap-[4px] md:text-[16px] lg:gap-[4px] lg:text-start text-center py-3 lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.kode_matkul}
              </div>
              <div className="w-[50px] px-1 lg:text-start text-center py-3 lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
                {x.jmlh_sks}
              </div>
              <div className="w-[90px] px-1 lg:text-start text-center py-3 lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
                {x.semester}
              </div>
              <div
                onClick={() => setPopupUploadStatus(true)}
                className={`w-[110px] px-1 lg:text-start text-center py-3 lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent flex lg:justify-start justify-center p-4 cursor-pointer ${
                  x.tindakan_pretest === 'Upload' && 'text-green-600'
                }`}
              >
                {x.tindakan_pretest === 'Upload' && (
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8805 17.5577C10.3365 17.5573 9.8957 17.1165 9.89533 16.5725L9.896 11.0011C9.89618 10.9561 9.8784 10.913 9.84659 10.8812C9.81479 10.8494 9.7716 10.8316 9.72662 10.8317H7.76175C7.42846 10.8585 7.11596 10.6672 6.98819 10.3582C6.86043 10.0492 6.94657 9.6931 7.20143 9.47667L11.3331 5.34368C11.7229 4.97165 12.3363 4.97165 12.7261 5.34368L16.8577 9.47328C17.1116 9.6901 17.1971 10.0457 17.0695 10.3543C16.942 10.6628 16.6303 10.8542 16.2974 10.8284H14.3325C14.239 10.8284 14.1631 10.9042 14.1631 10.9977V16.5725C14.1628 17.1162 13.7223 17.5569 13.1787 17.5577H10.8805ZM6.79161 20.9349C5.28235 20.9334 4.05923 19.7103 4.05774 18.201V16.9293C4.07057 16.4803 4.43823 16.123 4.88738 16.123C5.33654 16.123 5.7042 16.4803 5.71703 16.9293V18.199C5.71778 18.7922 6.19844 19.2728 6.79161 19.2736H17.5848C18.178 19.2728 18.6586 18.7922 18.6594 18.199V16.9293C18.6722 16.4803 19.0399 16.123 19.489 16.123C19.9382 16.123 20.3058 16.4803 20.3187 16.9293V18.201C20.3172 19.7103 19.0941 20.9334 17.5848 20.9349H6.79161Z"
                      fill="#3EB449"
                    />
                    <mask
                      id="mask0_3705_3416"
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="5"
                      width="17"
                      height="16"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.8805 17.5577C10.3365 17.5573 9.8957 17.1165 9.89533 16.5725L9.896 11.0011C9.89618 10.9561 9.8784 10.913 9.84659 10.8812C9.81479 10.8494 9.7716 10.8316 9.72662 10.8317H7.76175C7.42846 10.8585 7.11596 10.6672 6.98819 10.3582C6.86043 10.0492 6.94657 9.6931 7.20143 9.47667L11.3331 5.34368C11.7229 4.97165 12.3363 4.97165 12.7261 5.34368L16.8577 9.47328C17.1116 9.6901 17.1971 10.0457 17.0695 10.3543C16.942 10.6628 16.6303 10.8542 16.2974 10.8284H14.3325C14.239 10.8284 14.1631 10.9042 14.1631 10.9977V16.5725C14.1628 17.1162 13.7223 17.5569 13.1787 17.5577H10.8805ZM6.79161 20.9349C5.28235 20.9334 4.05923 19.7103 4.05774 18.201V16.9293C4.07057 16.4803 4.43823 16.123 4.88738 16.123C5.33654 16.123 5.7042 16.4803 5.71703 16.9293V18.199C5.71778 18.7922 6.19844 19.2728 6.79161 19.2736H17.5848C18.178 19.2728 18.6586 18.7922 18.6594 18.199V16.9293C18.6722 16.4803 19.0399 16.123 19.489 16.123C19.9382 16.123 20.3058 16.4803 20.3187 16.9293V18.201C20.3172 19.7103 19.0941 20.9334 17.5848 20.9349H6.79161Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_3705_3416)"></g>
                  </svg>
                )}
                {x.tindakan_pretest}
              </div>
              <div className="w-[160px] px-1 lg:text-start text-center py-3 md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.tindakan_pretest === 'Upload' ? (
                  <Button className="py-2 px-4 bg-[#9ca3af] text-[#d1d5db] font-semibold rounded-md" type={'button'}>
                    Ajukan
                  </Button>
                ) : (
                  <div className="flex gap-x-2">
                    <Button
                      onClick={() => setPopupSubmissionStatus(true)}
                      className="py-2 px-4 bg-[#2563eb] text-white font-semibold rounded-md"
                      type={'button'}
                    >
                      Ajukan
                    </Button>
                    <button
                      onClick={() => setPopupDeleteStatus(true)}
                      className="w-9 h-9 bg-red-100 rounded-md"
                    >
                      <Image
                        src={Delete}
                        alt="delete-icon"
                        width={14.22}
                        height={18.28}
                        className="m-auto"
                      />
                    </button>
                  </div>
                )}
              </div>
              <div className="w-[80px] px-1 lg:text-start text-center py-3 lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
                {x.status}
              </div>
              <div className="px-1 text-gray-400 lg:text-start text-center py-3 lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
                {x.waktu_selesai}
              </div>
            </div>
          ))}
        </div>
        {/* <div></div> */}
      </div>
    </>
  );
};

export default TabelPretest;


