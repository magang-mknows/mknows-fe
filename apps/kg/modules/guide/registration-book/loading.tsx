import { FC, ReactElement } from "react";

const LoadingRegistrationGuide: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      {/* breadcrumb */}
      <div className="px-9 py-5">
        <section className="animate-pulse w-64 py-3 rounded-lg bg-gray-200" />
      </div>
      {/* hero */}
      <div className="w-full px-6 md:px-8 lg:px10">
        <div className="mt-[56px] flex justify-center">
          <h1 className="animate-pulse bg-neutral-200 w-72 py-4 rounded-lg text-center"></h1>
        </div>
        <div className="animate-pulse bg-neutral-200 mt-[36px] w-full h-[135px] container mx-auto rounded-[8px] lg:mb-[30px] mb-[60px]">
          <div className="container px-[36px] lg:pt-[28px] lg:py-[16px] md:py-[10px] py-[30px]">
            <h1 className="animate-pulse bg-neutral-300 rounded-lg py-3 w-36 "></h1>
            <h1 className="animate-pulse bg-neutral-300 rounded-lg py-4 w-11/12 mt-[10px]"></h1>
          </div>
        </div>
      </div>
      {/* content */}
      <div className=" w-full px-6 md:px-8 lg:px10 ">
        <h1 className="animate-pulse bg-neutral-200 rounded-lg lg:grid lg:grid-cols-2 px-6 py-3 w-96"></h1>
        <div className="lg:flex mt-[34px] justify-between mb-5">
          <div>
            <div className="animate-pulse bg-neutral-200 rounded-lg w-96 py-3 step-1"></div>
            <div className="animate-pulse bg-neutral-200 rounded-lg w-72 py-3 step-2 mt-[28px]">
              <div className="animate-pulse bg-neutral-200 rounded-lg w-56 py-4"></div>
            </div>
            <div className="animate-pulse bg-neutral-200 rounded-lg w-96 py-3 step-1 step-3 mt-[28px]"></div>
            <div className="animate-pulse bg-neutral-200 rounded-lg w-72 py-36 mt-5"></div>
          </div>
          <div className="lg:-mt-5">
            <div className="animate-pulse bg-neutral-200 rounded-lg w-96 py-3 step-4 mt-[28px]"></div>
            <div className="animate-pulse bg-neutral-200 rounded-lg w-72 py-7 mt-5"></div>
            <div className="animate-pulse bg-neutral-200 rounded-lg lg:w-[700px] md:w-96 py-3 step-4 step-5 mt-[28px]"></div>
            <div className="animate-pulse bg-neutral-200 rounded-lg w-72 py-20 mt-5"></div>
            <div className="animate-pulse bg-neutral-200 rounded-lg w-96 py-3 step-4 step-5 mt-[28px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingRegistrationGuide;
