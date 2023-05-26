import { Fragment } from "react";
import { ReactElement } from "react";
import { FC } from "react";
import { AboutJobList } from "./const";
import Image from "next/image";

export const JobsSection: FC = (): ReactElement => {
  return (
    <Fragment>
      <section className="w-full flex justify-end px-8 md:px-14 lg:px-16 mb-10">
        <div className="bg-version2-400 min-w-[200px] md:min-w-[250px] lg:min-w-[300px] flex justify-center py-3 ">
          <h1 className="text-neutral-200 text-2xl md:text-3xl lg:text-4xl font-bold">
            What <span className="text-version3-500">We Do</span>
          </h1>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 md:px-14 lg:px-16 mb-20">
        {AboutJobList.map((job, index) => {
          return (
            <section
              className="rounded-md flex flex-col justify-between overflow-hidden bg-version2-200 shadow-md"
              key={index}
            >
              <Image
                src={job.srcImg as unknown as string}
                alt="article-view"
                className="bg-neautral-50 cursor-pointer min-h-80 w-full bg-primary-400"
                height={850}
                width={850}
                loading="lazy"
              />
              <section
                className={` ${
                  (index + 1) % 2 !== 0
                    ? "bg-version2-400  text-neutral-100 "
                    : "bg-version2-200  text-version2-400 "
                } flex justify-center items-center py-5 h-20 px-10`}
              >
                <h1 className=" text-center font-bold text-lg">{job.title}</h1>
              </section>
            </section>
          );
        })}
      </section>
    </Fragment>
  );
};
