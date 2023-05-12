import { FC, ReactElement } from "react";

const LoadingGuideDictionary: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      {/* breadcrumb */}
      <div className="px-9 py-5">
        <section className="animate-pulse w-64 py-3 rounded-lg bg-gray-200" />
      </div>
      {/* content */}
      <div className="animate-pulse w-full flex flex-col-reverse lg:flex-row ">
        <div className="md:basis-2/6">
          <div className=" px-6 md:px-8 lg:px-10 mb-10 w-full">
            <div className=" bg-neutral-200 w-44 py-4 rounded-lg mb-2"></div>

            <div className="grid grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-2 lg:gap-0 md:gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className=" bg-neutral-200 w-full py-5 rounded-lg max-w-xs my-2 min-h-max "
                >
                  <div className="px-4">
                    <div className=" bg-neutral-300 md:w-36 w-24 py-3 rounded-lg mb-5"></div>
                    <div className=" bg-neutral-300 w-full py-10 rounded-lg "></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:-ml-20 md:px-10 px-5 mt-[30px] mb-[50px]">
          <div className="col-span-1 ">
            <div className="title">
              <h1 className=" bg-neutral-200 w-[50%] py-7 rounded-lg"></h1>
              <p className=" bg-neutral-200 w-full py-3 rounded-lg mt-4"></p>
            </div>
            <div className="seacrh  bg-neutral-200 rounded-lg lg:w-[700px] h-[56px] mt-5  ">
              <input disabled className="" />
            </div>
          </div>

          <div className="animate-pulse col-span-1 grid place-content-center my-5 mt-8 ">
            <div className="flex flex-col items-center">
              <div className=" bg-neutral-200 md:w-96 md:h-56 w-72 h-36 rounded-lg lg:flex justify-center px-20 mb-5 hidden"></div>
              <div className=" bg-neutral-200 w-72 py-3 rounded-lg flex justify-center px-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingGuideDictionary;
