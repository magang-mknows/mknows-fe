import { FC, ReactElement } from "react";

const LoadingGuideVideo: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      {/* breadcrumb */}
      <div className="px-9 py-5">
        <section className="animate-pulse w-64 py-3 rounded-lg bg-gray-200" />
      </div>
      {/* hero */}
      <div className="animate-pulse lg:grid lg:grid-cols-2 lg:gap-10 lg:mx-10 mt-[30px] px-10 lg:px-0 mb-[50px]">
        <div className="col-span-1 ">
          <div className="title">
            <h1 className="animate-pulse bg-neutral-200 w-72 py-8 rounded-lg"></h1>
            <p className="animate-pulse bg-neutral-200 w-10/12 py-5 rounded-lg mt-5"></p>
          </div>
          <div className="animate-pulse bg-neutral-200 rounded-lg seacrh lg:w-[700px] h-[56px]  mt-[48px] flex items-center gap-4  ">
            <input disabled className="" />
          </div>
        </div>
        <div className="col-span-1 grid place-content-end lg:-mt-10">
          <div className="animate-pulse bg-neutral-200 md:w-[300px] lg:h-[400px] w-0 h-0 rounded-md" />
        </div>
      </div>
      {/* content */}
      <div className="w-full px-6 mt-44 md:px-8 lg:px-10">
        <div className="mt-[24px] mb-[54px] justify-between grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-8 md:gap-x-8 md:gap-y-5 gap-y-5">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-neutral-200 w-full rounded-lg min-h-min px-3 shadow-md"
            >
              <div className="flex justify-end flex-col gap-5 mt-44">
                <div className="animate-pulse bg-neutral-300 w-64 py-4 rounded-lg"></div>
                <div className="animate-pulse bg-neutral-300 w-full py-6 rounded-lg"></div>
                <p className="w-full text-sm font-base mt-3.5 dark:text-white text-black"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingGuideVideo;
