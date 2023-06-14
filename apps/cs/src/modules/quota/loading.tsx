import { FC, ReactElement } from "react";
import { Suspense } from "react";
import { CardCS } from "@mknows-frontend-services/components/molecules";
const LoadingQuota: FC = (): ReactElement => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <section className="w-full flex h-fit relative pt-11 overflow-hidden justify-center lg:justify-end lg:pr-4">
        <CardCS className="w-full h-fit rounded-lg bg-white">
          <div className="mx-11 my-4 flex flex-col w-full ">
            <div className="flex flex-row gap gap-x-2">
              <div className="animate-pulse bg-gray-200 h-[40px] w-[120px] rounded-lg"></div>
              <div className="animate-pulse bg-gray-200 h-[40px] w-[120px] rounded-lg"></div>
            </div>

            <div className="w-full flex flex-row">
              <div className="w-full flex flex-col gap gap-y-2 my-14">
                <div className="animate-pulse bg-gray-200 h-8 w-40 rounded-lg"></div>
                <div className="flex flex-col gap gap-y-2 mt-8">
                  <div className="animate-pulse bg-gray-200 h-5 w-16 rounded-lg"></div>
                  <div className="animate-pulse bg-gray-200 h-5 w-20 rounded-lg"></div>
                </div>
                <div className="grid lg:gap-5 md:gap-4 md:grid-cols-2 grid-cols-1 gap-1 my-3">
                  <div className="animate-pulse bg-gray-200 h-24 w-full py-8 px-4 rounded-lg"></div>
                  <div className="animate-pulse bg-gray-200 h-24 w-full py-8 px-4 rounded-lg"></div>
                  <div className="animate-pulse bg-gray-200 h-24 w-full py-8 px-4 rounded-lg"></div>
                  <div className="animate-pulse bg-gray-200 h-24 w-full py-8 px-4 rounded-lg"></div>
                </div>
                <div className="animate-pulse bg-gray-200 h-5 w-16 rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-5 w-20 rounded-lg"></div>
                <div className="flex justify-center">
                  <div className="animate-pulse bg-gray-200 h-10 w-[150px] rounded-lg"></div>
                </div>
                <div className="grid md:gap-2 lg:grid-cols-4 grid-cols-2 gap-1 mt-5">
                  <div className="animate-pulse bg-gray-200 w-full py-8 px-4 rounded-lg"></div>
                  <div className="animate-pulse bg-gray-200 w-full py-8 px-4 rounded-lg"></div>
                  <div className="animate-pulse bg-gray-200 w-full py-8 px-4 rounded-lg"></div>
                  <div className="animate-pulse bg-gray-200 w-full py-8 px-4 rounded-lg"></div>
                </div>
              </div>
              <div className="flex justify-center w-[70%] my-4 pt-4"></div>
            </div>
          </div>
        </CardCS>
      </section>
    </Suspense>
  );
};

export default LoadingQuota;
