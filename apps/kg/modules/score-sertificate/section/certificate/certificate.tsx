import { ReactElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxSlider } from "react-icons/rx";
import download from "../../assets/download.svg";
import ImageNull from "../../../assignment/assets/data-null.svg";
import { usePopupCertificate } from "./hooks";
import { Card, PopupModal } from "@mknows-frontend-services/components/molecules";
import { useGetAllCertificate } from "../../hook";
import { TItemCertificate } from "../../type";

export const CertificateSection = (): ReactElement => {
  const { data } = useGetAllCertificate();
  const getCertif = data?.data;
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("SEMUA");
  const { setPopupStatus, getPopupStatus } = usePopupCertificate();

  return (
    <div className="w-full">
      <div className="flex justify-end  ">
        <button
          className="w-[109px] h-[40px] rounded-[8px] text-center border-[3px] border-primary-500 relative "
          onClick={() => setOpen(open == true ? false : true)}
        >
          <div className="my-auto flex justify-center gap-[10px] items-center">
            <p className="text-primary-500 text-[14px] dark:text-white">Filter</p>
            <RxSlider className="text-primary-500 dark:text-white" />
          </div>
          {open && (
            <div className="flex justify-end container mt-[10px] z-[9000] absolute w-[150px] -bottom-32 ease-in-out ">
              <div className="w-[160px] h-[114px] rounded-[8px] text-center overflow-hidden shadow-2xl ">
                <button
                  className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white "
                  onClick={() => setFilter("SEMUA")}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == "SEMUA" ? "bg-blue-100" : "bg-white"
                    } absolute left-0 overflow-hidden hover:bg-neutral-100`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">Semua</p>
                </button>
                <button
                  className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white "
                  onClick={() => setFilter("SUBJECT")}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == "SUBJECT" ? "bg-blue-100" : "bg-white"
                    } absolute left-0 overflow-hidden hover:bg-neutral-100`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">Mata Kuliah</p>
                </button>
                <button
                  className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white "
                  onClick={() => setFilter("EVENT")}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == "EVENT" ? "bg-blue-100" : "bg-white"
                    } absolute left-0 overflow-hidden`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">Webinar</p>
                </button>
              </div>
            </div>
          )}
        </button>
      </div>

      <div className={"lg:grid grid-cols-12 gap-[36px] relative mt-4"}>
        {filter === "SEMUA" ? (
          getCertif?.map((item: TItemCertificate) => {
            return (
              <div className="lg:col-span-4 w-full h-full" key={item?.id}>
                <Card
                  hasImage={true}
                  src={item?.thumbnail_link}
                  imgwidth={100}
                  imgheight={100}
                  className={
                    "container mx-auto w-full h-full rounded-[8px] p-[12px] bg-white dark:bg-[#08405e] "
                  }
                  onClick={() => setPopupStatus(true)}
                >
                  <div className="w-full mt-[12px]">
                    <h1 className="text-center text-neutral-900 text-[18px] font-[500] dark:text-white">
                      {item?.event_certificate?.name}
                    </h1>
                    <p className="text-center text-neutral-base dark:text-white text-[16px] font-[500]">
                      {item?.type === "EVENT"
                        ? "Webinar"
                        : item?.type === "SUBJECT"
                        ? "Mata Kuliah"
                        : ""}
                    </p>
                  </div>
                </Card>
                <div className="w-[1000px]">
                  <PopupModal
                    lookup={getPopupStatus}
                    image={item?.thumbnail_link}
                    hasImg
                    onClose={() => setPopupStatus(false)}
                    className={"!py-2"}
                  >
                    <div className="flex md:flex-row flex-col md:gap-3 gap-0 items-center ">
                      <Link href={item?.link} download>
                        <button className="w-[230px] h-[56px] bg-primary-500 rounded-[8px] text-white mb-3 md:mb-0">
                          <div className=" flex justify-center gap-3">
                            <div>
                              <Image src={download} alt={"download-icon"} />
                            </div>

                            <div>Unduh</div>
                          </div>
                        </button>
                      </Link>

                      <button
                        className="w-[230px] h-[56px] border-primary-500 border-2 rounded-[8px] text-primary-500 "
                        onClick={() => setPopupStatus(false)}
                      >
                        Kembali
                      </button>
                    </div>
                  </PopupModal>
                </div>
              </div>
            );
          })
        ) : getCertif?.filter((x) => x?.type.includes(filter)).length === 0 ? (
          <div className=" col-span-12 grid place-content-center  ">
            <Image src={ImageNull} alt="image-null" className="w-full" />
            {filter === "SUBJECT" ? (
              <p className="text-center text-neutral-900 text-[18px] font-[500] dark:text-white">
                Belum ada matakuliah yang diselesaikan
              </p>
            ) : (
              <p className="text-center text-neutral-900 text-[18px] font-[500] dark:text-white">
                Kamu belum mengikuti webinar
              </p>
            )}
          </div>
        ) : (
          getCertif
            ?.filter((item: TItemCertificate) => item?.type.includes(filter))
            .map((item: TItemCertificate) => {
              return (
                <div className="lg:col-span-4 w-full h-full mb-10 lg:mb-0 " key={item.id}>
                  <Card
                    hasImage={true}
                    src={item?.thumbnail_link}
                    imgwidth={100}
                    imgheight={100}
                    className={"container mx-auto w-full h-full rounded-[8px] p-[12px] bg-white"}
                    onClick={() => setPopupStatus(true)}
                  >
                    <div className="w-full mt-[12px]">
                      <h1 className="text-center text-neutral-900 text-[18px] font-[500] dark:text-white">
                        {item?.event_certificate?.name}
                      </h1>
                      <p className="text-center text-neutral-base text-[16px] font-[500] dark:text-white">
                        {item?.type === "EVENT"
                          ? "Webinar"
                          : item?.type === "SUBJECT"
                          ? "Mata Kuliah"
                          : ""}
                      </p>
                    </div>
                  </Card>
                  <div className="w-[1000px]">
                    <PopupModal
                      lookup={getPopupStatus}
                      image={item?.thumbnail_link}
                      hasImg
                      onClose={() => setPopupStatus(false)}
                      className={"!py-2"}
                    >
                      <div className="flex md:flex-row flex-col md:gap-3 gap-0 items-center ">
                        <Link href={item?.link} download>
                          <button className="w-[230px] h-[56px] bg-primary-500 rounded-[8px] text-white mb-3 md:mb-0">
                            <div className=" flex justify-center gap-3">
                              <div>
                                <Image src={download} alt={"download-icon"} />
                              </div>

                              <div>Unduh</div>
                            </div>
                          </button>
                        </Link>

                        <button
                          className="w-[230px] h-[56px] border-primary-500 border-2 rounded-[8px] text-primary-500 "
                          onClick={() => setPopupStatus(false)}
                        >
                          Kembali
                        </button>
                      </div>
                    </PopupModal>
                  </div>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
};
