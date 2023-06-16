import { FC, ReactElement } from "react";

import { MdNavigateNext } from "react-icons/md";
import { AiFillWarning } from "react-icons/ai";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "@mknows-frontend-services/components/atoms";
import Image from "next/image";

import dummTaskImage from "./dummy-assets/dummy-task.svg";
import { formatTime } from "@mknows-frontend-services/utils";
import { TTaskProps } from "./types";
import emptyTask from "./dummy-assets/emptyTask.svg";
import { EmpttyState } from "../../common/empty-state";

export const TaskSection: FC<TTaskProps> = ({ items }): ReactElement => {
  return (
    <div className="bg-neutral-50 relative min-h-[240px]  p-6 rounded-md shadow-sm">
      {items?.length === 0 ? (
        <EmpttyState
          description="Belum Ada Penugasan"
          image={emptyTask}
          classname="bg-version3-400/10 absolute top-0 left-0 rounded-md"
        />
      ) : (
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
                  isSelected ? "bg-primary-400 w-6" : "w-2 bg-neutral-300"
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
          {items?.map((item, index) => {
            const { formatedDate, formatedTime } = formatTime(item?.deadline as string);

            return (
              <div className="block" key={index}>
                <section className="text-neutral-900 mb-4 text-start">
                  <h1 className="text-lg font-bold text-neutral-900 ">Penugasan</h1>
                  <p className="text-xs text-neutral-500 ">
                    {item?.subject_session_progress?.subject_department?.name}
                  </p>
                </section>
                <section className="flex items-center justify-start gap-4 mb-6  w-fit">
                  <figure className="flex items-center justify-start w-[96px]  md:w-[90px] bg-neutral-200 h-24 rounded-md ">
                    <Image
                      src={item?.subject_session_progress?.thumbnail || dummTaskImage}
                      alt="test"
                      height={90}
                      width={100}
                      className="w-full h-full"
                      priority
                    />
                  </figure>
                  <div className="flex flex-col items-start text-left">
                    <h1 className="mb-2 font-bold">{item?.subject_session_progress?.name}</h1>
                    <section className="flex gap-2 items-start lg:items-center mb-2">
                      <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center">
                        <MdNavigateNext className="text-primary-500 " />
                      </div>
                      <p className="text-xs text-neutral-400">
                        Tugas Pertamuan {item?.session?.session_number}
                      </p>
                    </section>
                    <section className="flex gap-2 items-start lg:items-centers">
                      <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center">
                        <MdNavigateNext className="text-primary-500" />
                      </div>
                      {item?.subject_session_progress.subject_batch?.map((subject, index) => {
                        return (
                          <p className="text-xs text-neutral-400" key={index}>
                            {subject?.teacher_batch?.full_name}
                          </p>
                        );
                      })}
                    </section>
                  </div>
                </section>
                <section className="flex flex-wrap justify-between gap-y-4 items-center">
                  <Button
                    type="button"
                    className="font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 text-sm py-2 w-[200px]  disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300"
                  >
                    <h1>Kerjakan Sekarang</h1>
                  </Button>
                  <div className="text-warning-500 lg:justify-end flex items-center gap-2 text-xs lg:text-sm px-0">
                    <AiFillWarning />
                    <h1 className="text-xs text-start ">{`${formatedDate} ${formatedTime}`}</h1>
                  </div>
                </section>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};
