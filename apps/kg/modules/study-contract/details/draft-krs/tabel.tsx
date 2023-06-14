import { FC, ReactElement } from "react";
import Image from "next/image";
import { useDataTable, usePopupDeleteStudy } from "../hooks";
import { Button } from "@mknows-frontend-services/components/atoms";
import Delete from "../../assets/Delete.svg";
import { PopupModal } from "@mknows-frontend-services/components/molecules";

const TabelDraft: FC = (): ReactElement => {
  const { getDataTable } = useDataTable();
  const { setPopupDelete, getPopupDelete } = usePopupDeleteStudy();
  

  return (
    <>
      <div className="p-8 overflow-auto whitespace-nowrap">
        <div className="grid grid-flow-row auto-rows-auto">
          {/* thead⬇️⬇️⬇️⬇️  */}
          <div className="grid grid-flow-col auto-cols-min mx-auto border bg-[#f3f4f6] border-[#e5e7eb] rounded-t-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
            <div className="w-[88px] bg-[#f3f4f6] text-center md:text-[16px] rounded-md p-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              No.
            </div>
            <div className="lg:w-[353px] md:w-[225px] w-[180px] md:text-[16px] lg:gap-[4px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              Mata Kuliah
            </div>
            <div className="w-[176px] md:text-[16px] lg:gap-[4px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              Kode Matkul
            </div>
            <div className="w-[88px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
              SKS
            </div>
            <div className="w-[176px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
              Semester
            </div>
            <div className="w-[177px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
              Tindakan
            </div>
          </div>
          {/* ----------end-thead--------- */}

          {getDataTable.map((x, i) => {
          const index = 1+i;
            const grey = "bg-[#F5F5F5]"
            return(
            <div
              key={i}
              className={`${(i%2!=0)&&grey} grid grid-flow-col auto-cols-min mx-auto border border-[#e5e7eb] rounded-t-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]`}
            >
              <div className="w-[88px] text-center md:text-[16px] p-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {index}
              </div>
              <div className="lg:w-[353px] md:w-[225px] w-[180px] md:text-[16px] lg:gap-[4px] lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
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
              <div className="w-[176px] md:text-[16px] lg:gap-[4px] lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.kode_matkul}
              </div>
              <div className="w-[88px] lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.jmlh_sks}
              </div>
              <div className="w-[176px] lg:text-start text-center py-3 font-medium lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
                {x.semester}
              </div>

              <div className="w-[177px] dark:divide-gray-700 lg:text-start text-center py-3 font-medium md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
                <button
                  onClick={() => setPopupDelete(true)}
                  className={`flex gap-2 items-center p-4 font-semibold ${
                    x.tindakan_draft === "tambah" ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {x.tindakan_draft === "tambah" ? (
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
                      width="15"
                      height="20"
                      viewBox="0 0 15 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.09429 17.1092C1.09429 18.2264 2.00839 19.1405 3.12564 19.1405H11.251C12.3683 19.1405 13.2824 18.2264 13.2824 17.1092V4.92109H1.09429V17.1092ZM14.298 1.87407H10.7432L9.72752 0.858398H4.64915L3.63347 1.87407H0.0786133V3.90542H14.298V1.87407Z"
                        fill="#EE2D24"
                      />
                    </svg>
                  )}

                  {x.tindakan_draft === "tambah" ? " tambah " : "hapus"}
                </button>
              </div>
            </div>
          )})}
          <div className="grid grid-flow-col auto-cols-min mx-auto border border-[#e5e7eb] rounded-t-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
            <div className="lg:text-start text-center py-3 px-6 font-semibold col-span-6 md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
              Total SKS
            </div>
            <div className="lg:text-start text-center py-3 px-6 font-semibold col-span-6 md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
              24 SKS
            </div>
          </div>
        </div>
        <div>
          <PopupModal
            onClose={() => setPopupDelete(false)}
            icon={Delete}
            popupTitle="Konfirmasi"
            lookup={getPopupDelete}
            className="!h-80 !w-[100%] text-md py-10"
          >
            <h1 className="py-2 text-2xl">Apakah anda ingin mengahpus mata kuliah ini?</h1>
            <div className="flex gap-3 my-2 py-4">
              <Button
                className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
                onClick={() => setPopupDelete(false)}
                type={"button"}
              >
                Ya, Hapus
              </Button>
              <Button
                className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
                type={"button"}
                onClick={() => setPopupDelete(false)}
              >
                Tidak
              </Button>
            </div>
          </PopupModal>
        </div>
      </div>
    </>
  );
};

export default TabelDraft;
