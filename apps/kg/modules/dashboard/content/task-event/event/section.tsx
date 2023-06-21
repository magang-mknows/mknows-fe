import { FC, Fragment, ReactElement } from "react";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDashboardData } from "../../../hooks";
import emptyTask from "../../../assets/emptyTask.svg";

export const EventSection: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();
  const events = getDashboardData?.events;

  function formatDateToMonthYear(iso: string): string {
    const date = new Date(iso);
    const month = date.toLocaleString("id-ID", { month: "short" });
    const year = String(date.getFullYear());
    return `${month} ${year}`;
  }

  function formatDateToHoursMinute(iso: string): string {
    const time = new Date(iso);
    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    return `${hour}:${minute}`;
  }

  return (
    <Fragment>
      {events !== null ? (
        <div className="bg-white p-7 rounded-md shadow-sm w-full flex overflow-hidden">
          <Carousel
            showThumbs={false}
            showArrows={false}
            showIndicators={true}
            showStatus={false}
            swipeable={true}
            className="w-full content-carousel"
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              return (
                <span
                  className={`${
                    isSelected ? "bg-yellow-500 w-6" : "w-2 bg-neutral-300"
                  } flex flex-row  h-2 rounded-full transition-all ease-in-out duration-300`}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                ></span>
              );
            }}
          >
            {events?.map((event, index) => {
              return (
                <div key={index} className="h-full flex flex-col justify-between">
                  <section>
                    <section className="text-neutral-900 mb-4 flex flex-col w-full">
                      <h1 className="text-lg font-bold text-neutral-900 w-fit">{event.name}</h1>
                      <p className="text-sm text-neutral-500 w-fit">
                        {events.length} {event.name} tersedia
                      </p>
                    </section>
                    <section className="flex gap-4 mb-4">
                      <div className="w-[90px] h-[110px]">
                        <Image
                          src={event.thumbnail}
                          width={90}
                          height={110}
                          className="h-full w-full object-cover rounded-lg"
                          alt="event thumbnail"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h1 className="mb-2 text-neutral-900 text-start">{event?.description}</h1>
                        <section className="flex gap-2 xl:gap-4  flex-wrap xl:flex-nowrap">
                          <div className="flex flex-col">
                            <section className="flex gap-2 items-center mb-2">
                              <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                                <MdNavigateNext className="text-yellow-500" />
                              </div>
                              <p className="text-start text-xs lg:text-sm text-neutral-400">
                                {formatDateToMonthYear(event?.registration_close_date)}
                              </p>
                            </section>
                            <section className="flex gap-2 items-center">
                              <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                                <MdNavigateNext className="text-yellow-500" />
                              </div>
                              <p className="text-start text-xs lg:text-sm text-neutral-400">
                                Pemateri: {event.contact_person_name}
                              </p>
                            </section>
                          </div>
                          <div className="flex flex-col ">
                            <section className="flex gap-2 items-center mb-2">
                              <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                                <MdNavigateNext className="text-yellow-500" />
                              </div>
                              <p className="text-xs lg:text-sm  text-neutral-400">{`${formatDateToHoursMinute(
                                event?.date_start,
                              )}-${formatDateToHoursMinute(event?.date_end)}`}</p>
                            </section>
                            <section className="flex gap-2 items-center">
                              <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                                <MdNavigateNext className="text-yellow-500" />
                              </div>
                              <p className="text-start text-xs lg:text-sm text-neutral-400">
                                {event?.event_studentEvent?.length} / {event?.capacity} Peserta
                              </p>
                            </section>
                          </div>
                        </section>
                      </div>
                    </section>
                  </section>
                  <section className="flex justify-between items-center">
                    <button className="text-white w-[95%] lg:w-44 bg-yellow-500 text-sm py-3 px-4 mx-auto md:mx-0 rounded-md hover:bg-yellow-600 transition-colors ease-in-out duration-300">
                      Daftar Sekarang
                    </button>
                  </section>
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div className="bg-primary-500/10 flex items-center justify-center dark:bg-[#1B1E21] p-7 rounded-md shadow-sm w-full">
          <section className="flex flex-col items-center">
            <div className="">
              <Image src={emptyTask} alt="emptyTask" />
            </div>
            <h1 className="text-sm text-neutral-800 dark:text-white/80 font-medium -mt-5">
              Belum ada penugasan
            </h1>
          </section>
        </div>
      )}
    </Fragment>
  );
};
