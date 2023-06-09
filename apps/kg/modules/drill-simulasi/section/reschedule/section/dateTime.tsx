import { FC, ReactElement, useState } from "react";
import afternoon from "../assets/afternoon.svg";
import warning from "../assets/warning.svg";
import pengajuan from "../assets/pengajuan.svg";
import checked from "../assets/checked.svg";
import rescheduleJadwal from "../assets/reschedule-jadwal.svg";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import {
  useChooseSimulation,
  useCategorySimulation,
  useScheduleSimulation,
  usePopupScheduleStatus,
  useChooseTimeSimulation,
} from "../hooks";
import { useGetAllSimulation } from "../../../hooks";
import { Accordion, PopupModal } from "@mknows-frontend-services/components/molecules";
import { TSimulationItem } from "../../../type";

const DateTime: FC = (): ReactElement => {
  const [isOpen] = useState("");
  const { getChooseSimulation, setChooseSimulation } = useChooseSimulation();
  const { getChooseTimeSimulation, setChooseTimeSimulation } = useChooseTimeSimulation();
  const { setPopupStatus, getPopupStatus } = usePopupScheduleStatus();
  const [active, setactive] = useState("");
  const { getScheduleSimulation, setScheduleSimulation } = useScheduleSimulation();
  const { getCategorySimulation, setCategorySimulation } = useCategorySimulation();

  const { data } = useGetAllSimulation();
  const getSchedule = data?.data;
  console.log("dataa", getSchedule);

  const onSucces = (): void => {
    if (!getScheduleSimulation) {
      setCategorySimulation("Active");
    } else {
      setCategorySimulation("Reschedule");
    }
    setPopupStatus(true);
    setScheduleSimulation(true);
  };

  return (
    <section className="lg:basis-7/12">
      {getSchedule?.map((items: TSimulationItem, y: any) => (
        <div key={y}>
          <h1 className="text-neutral-900 text-[20px] font-[600] dark:text-white">{items.topic}</h1>
          <p className="text-neutral-500 text-[16px] font-[400] mt-2 mb-1">{items.assessor_name}</p>
          <p className="text-neutral-500 text-[16px] font-[400]">
            Lokasi : {items.place !== null ? items.place : "Tidak ada lokasi"}
          </p>
        </div>
      ))}

      <p className="text-neutral-900 text-[14px] font-[600] mt-3 mb-1 dark:text-white">
        Pilih tanggal dan waktu Simulasi
      </p>

      <div className="flex md:flex-row flex-col md:gap-4 gap-0 mb-5">
        {getSchedule?.map((item: TSimulationItem) =>
          item.schedules.map((x, y) => {
            const Day = new Intl.DateTimeFormat("id", {
              dateStyle: "full",
            }).format(new Date(x.date));
            return (
              <button
                className={` px-6 py-3 rounded-[8px] flex flex-row text-center justify-center mt-5 border w-full dark:text-white ${
                  getChooseSimulation === Day
                    ? "bg-success-500 border-none"
                    : "border-2 border-neutral-500"
                } `}
                key={y}
                onClick={() => {
                  setChooseSimulation(Day);
                  setactive(Day);
                }}
              >
                <div
                  className={`flex items-center gap-2 text-neutral-500 dark:text-white ${
                    getChooseSimulation === Day ? "dark:text-white text-white" : ""
                  }`}
                >
                  <BsCalendarDate />
                  <p className="text-[12px] font-[400] mt-1">{Day}</p>
                </div>
              </button>
            );
          }),
        )}
      </div>
      <Accordion
        title="Sore"
        hasImage
        src={afternoon}
        className="bg-[#ffff] drop-shadow-xl border-2 border-[#dedcdc] rounded-tb-xl "
        idAccordion={isOpen === "" ? "open" : ""}
        disabled={getChooseSimulation === "" ? true : false}
        classNameChildren="rounded-2 rounded-xl drop-shadow-xl bg-white border border-[#dedcdc]"
      >
        <div className="flex gap-5 ">
          {getSchedule?.map((item: TSimulationItem) =>
            item.schedules?.map((x: any) => {
              const stringToDate = new Date(x.date);
              const Day = new Intl.DateTimeFormat("id", {
                dateStyle: "full",
              }).format(stringToDate);
              return x.times
                .filter(() => Day.includes(active))
                .map((time: any, i: any) => {
                  // const TimeShort = time.slice(0, 5);
                  const TimeShort = time;
                  return (
                    <button
                      key={i}
                      className={`flex flex-row text-center  gap-2 py-2 px-3 rounded-[8px]  ${
                        getChooseTimeSimulation === TimeShort
                          ? "bg-success-500  border border-success-500"
                          : "border border-neutral-500"
                      } `}
                      onClick={() => {
                        setChooseTimeSimulation(TimeShort);
                      }}
                    >
                      <div
                        className={`flex items-center gap-2  dark:text-white ${
                          getChooseTimeSimulation === TimeShort ? " text-white " : "text-[#525252]"
                        }`}
                      >
                        <AiOutlineCheck className=" text-sm font-bold" />
                        <p className="font-[500] text-[12px]">{TimeShort}</p>
                      </div>
                    </button>
                  );
                });
            }),
          )}
        </div>
      </Accordion>

      <div className="flex justify-end mt-3">
        <button
          onClick={() => {
            getChooseSimulation !== "" || (getChooseTimeSimulation !== "" && onSucces());
          }}
          className={` text-white text-[14px] font-[600] rounded-[8px] h-[45px] w-[289px] justify-center mt-4 ${
            getCategorySimulation === "Active" ? "bg-yellow-500" : "bg-success-500 "
          }`}
        >
          {getCategorySimulation == "Active"
            ? "Ajukan Perubahan Simulasi "
            : "Ajukan Jadwal Simulasi"}
        </button>
      </div>

      {/* popUp */}
      <div>
        <PopupModal
          icon={
            getCategorySimulation === "Reschedule"
              ? warning
              : getCategorySimulation === "Active"
              ? checked
              : ""
          }
          hasImg={true}
          image={
            getCategorySimulation === "Reschedule"
              ? rescheduleJadwal
              : getCategorySimulation === "Active"
              ? pengajuan
              : ""
          }
          popupTitle={
            getCategorySimulation === "Active"
              ? "Berhasil Mengajukan Simulasi!"
              : getCategorySimulation === "Reschedule"
              ? "Reschedule Jadwal"
              : ""
          }
          stylePopup={"font-[700] text-[16px] md:text-[20px] lg:text-[23.4px]"}
          lookup={getPopupStatus}
          className="!h-85 w-[100%] text-md py-10"
          onClose={() => setPopupStatus(false)}
        >
          <p className="text-neutral-base font-[600] lg:text-[20px] md:text-[18px]">
            Kamu telah mengajukan <br />
            {getCategorySimulation === "Reschedule"
              ? " Reschedule Jadwal pertemuan simulasi, silahkan menunggu jadwal simulasi terbaru."
              : getCategorySimulation === "Active"
              ? ` simulasi  di hari ${getChooseSimulation} Pukul
                  ${getChooseTimeSimulation} WIB, Link Zoom simulasi akan dikirimkan melalui
                  email.`
              : ""}
          </p>
        </PopupModal>
      </div>
    </section>
  );
};

export default DateTime;
