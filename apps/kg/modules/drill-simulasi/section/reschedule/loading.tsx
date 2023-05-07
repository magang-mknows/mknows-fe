import { FC, ReactElement } from "react";

const LoadingReschedule: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <div className="px-9 py-5">
        <section className="animate-pulse w-64 py-3 rounded-lg bg-gray-200" />
      </div>
      <h1 className="animate-pulse bg-neutral-200 rounded-lg mt-10 py-6 w-96 ml-10 mb-10"></h1>
      <div className="flex lg:flex-row flex-col lg:gap-16 gap-10 mt-0 ml-10">
        <section className="lg:basis-5/12">
          <div className="animate-pulse rounded-lg py-20 w-11/12 h-48  bg-neutral-300"></div>
          <div className="flex mt-3">
            <div className="animate-pulse bg-neutral-200 rounded-lg py-3 w-96"></div>
          </div>
          <div className="animate-pulse bg-neutral-200 rounded-lg py-36 w-11/12 mt-5"></div>
        </section>
        <section className="lg:basis-7/12">
          <div>
            <h1 className="animate-pulse bg-neutral-200 rounded-lg py-4 w-96"></h1>
            <p className="animate-pulse bg-neutral-200 rounded-lg py-3 w-64 mt-2 mb-1"></p>
            <p className="animate-pulse bg-neutral-200 rounded-lg py-3 w-44 mt-3"></p>
          </div>
          <p className="animate-pulse bg-neutral-200 rounded-lg py-3 w-64 mt-5 mb-1 "></p>
          <div className="flex flex-row gap-6 mr-16">
            <div className="animate-pulse bg-neutral-200 rounded-lg w-full px-5 py-6 mt-10"></div>
            <div className="animate-pulse bg-neutral-200 rounded-lg w-full px-5 py-6 mt-10"></div>
            <div className="animate-pulse bg-neutral-200 rounded-lg w-full px-5 py-6 mt-10"></div>
          </div>
          <div className="animate-pulse bg-neutral-200 rounded-lg flex items-center justify-between w-11/12 px-5 py-9 mt-10"></div>
          <div className="flex justify-end mt-3 mr-16">
            <button className=" animate-pulse bg-neutral-200 rounded-lg mb-1 h-[45px] w-[289px] justify-center mt-4"></button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoadingReschedule;
