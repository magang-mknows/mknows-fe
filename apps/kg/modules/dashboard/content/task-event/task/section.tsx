import { FC, Fragment, ReactElement } from "react";

import penugasan from "../../../assets/penugasan.svg";
import acara from "../../../assets/acara.svg";
import emptyTask from "../../../assets/emptyTask.svg";

import { MdNavigateNext } from "react-icons/md";
import { AiFillWarning } from "react-icons/ai";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useSelectedTask } from "./hooks";
import { useDashboardData } from "../../../hooks";

export const TaskSection: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();
  const assignments = getDashboardData?.assignments;

  function changeFormatToDate(iso: string): string {
    const date = new Date(iso);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  }

  return (
    <Fragment>
      {assignments !== null ? (
        <section className="bg-white p-7 rounded-md shadow-sm w-full overflow-hidden">
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
                    isSelected ? "bg-primary-500 w-6" : "w-2 bg-neutral-300"
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
            {assignments?.map((assignment, index) => {
              return (
                <div key={index} className="">
                  <section className="text-neutral-900 mb-4 flex flex-col w-full">
                    <h1 className="text-lg font-bold w-fit">Penugasan</h1>
                    <p className="text-sm text-neutral-500 w-fit">{assignment?.progress_type}</p>
                  </section>
                  <section className="flex gap-4 mb-4 h-fit">
                    <div className="w-[90px] h-[110px]">
                      <Image
                        src=""
                        width={90}
                        height={110}
                        className="h-full w-full object-cover rounded-lg"
                        alt="assignment-thumbnail"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h1 className="mb-2 text-start">{assignment?.assignment_title}</h1>
                      <section className="flex gap-2 items-start lg:items-center mb-2">
                        <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                          <MdNavigateNext className="text-primary-500" />
                        </div>
                        <p className="text-xs lg:text-sm text-neutral-400">
                          {assignment?.assignment_desc}
                        </p>
                      </section>
                      <section className="flex gap-2 items-start lg:items-centers">
                        <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                          <MdNavigateNext className="text-primary-500" />
                        </div>
                        <p className="text-xs lg:text-sm text-neutral-400">Teacher Name</p>
                      </section>
                    </div>
                  </section>
                  <section className="flex flex-col md:flex-row justify-between gap-4 items-center">
                    <button className="text-white w-[95%] lg:w-44 mx-auto md:mx-0  mb-2  bg-primary-500 text-xs lg:text-sm py-3 px-4 rounded-md hover:bg-primary-600 transition-colors ease-in-out duration-300">
                      Kerjakan Sekarang
                    </button>
                    <div
                      style={{ color: "red" }}
                      className="text-red-500 lg:justify-end flex items-center gap-2 text-xs lg:text-sm w-52"
                    >
                      <AiFillWarning className="text-lg" />
                      <h1 className="text-sm">
                        Terakhir {changeFormatToDate(assignment?.progress_deadline)}
                      </h1>
                    </div>
                  </section>
                </div>
              );
            })}
          </Carousel>
        </section>
      ) : (
        <section className="bg-primary-500/10 flex items-center justify-center dark:bg-[#1B1E21] p-7 rounded-md shadow-sm w-full">
          <div className="flex flex-col items-center">
            <div className="">
              <Image src={emptyTask} alt="emptyTask" />
            </div>
            <h1 className="text-sm text-neutral-800 dark:text-white/80 font-medium -mt-5">
              Belum ada penugasan
            </h1>
          </div>
        </section>
      )}
    </Fragment>
  );
};
