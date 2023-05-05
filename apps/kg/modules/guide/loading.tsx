import { FC, ReactElement } from "react";

const LoadingGuide: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      {/* breadcrumb */}
      <div className="px-9 py-5">
        <section className="animate-pulse w-64 py-3 rounded-lg bg-gray-200" />
      </div>
      {/* heroskeleton */}
      <div className="animate-pulse lg:grid lg:grid-cols-2 lg:gap-10 lg:mx-10 mt-[30px] px-10 lg:px-0 mb-[50px]">
        <div className="col-span-1 ">
          <div className="title">
            <h1 className="animate-pulse bg-neutral-200 w-72 py-8 rounded-lg"></h1>
            <p className="animate-pulse bg-neutral-200 w-10/12 py-2 rounded-lg mt-5"></p>
          </div>
          <div className="animate-pulse bg-neutral-200 rounded-lg seacrh lg:w-[700px] h-[56px]  mt-[48px] flex items-center gap-4  ">
            <input disabled className="" />
          </div>
        </div>
        <div className="col-span-1 grid place-content-end lg:-mt-10">
          <div className="animate-pulse bg-neutral-200 md:w-[400px] lg:h-[250px] w-0 h-0 rounded-md" />
        </div>
      </div>
      {/* faqskeleton */}
      <div className="flex flex-col items-center bg-neutral-200  w-full animate-pulse py-10">
        <div className=" pt-8 flex flex-col items-center mb-5">
          <div className="bg-neutral-300  text-center dark:text-white mb-[36px] h-[34px] rounded-[8px] w-[300px]"></div>
        </div>

        {[...Array(2)].map((a, y) => (
          <div
            key={y}
            className=" flex lg:w-[1000px] md:w-[800px] w-full px-10 flex-wrap items-center justify-center mb-[20px] gap-6 "
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className=" lg:col-span-4 w-full md:w-[271px] px-[10px] h-[44px] bg-neutral-300 rounded-[8px] flex items-center justify-center"
              ></div>
            ))}
          </div>
        ))}
      </div>
      {/* tableskeleton */}
      <div className="mt-[76px] mb-[64px] md:px-20 px-10 animate-pulse">
        <div className="grid lg:grid-cols-12 gap-[20px]">
          {[...Array(3)].map((_, index) => {
            return (
              <div
                key={index}
                className="col-span-4 bg-neutral-200 shadow-md w-full h-full rounded-[8px] pr-7"
              >
                <div className="animate-pulse p-5">
                  <div className="h-[100px] w-[100px] rounded-[8px] bg-neutral-300 mb-3" />
                  <div className="font-[700] h-[27px] bg-neutral-300 rounded-md" />
                  <div className="font-[700] h-[27px] bg-neutral-300 rounded-md mt-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoadingGuide;
