import { FC, ReactElement, Suspense } from 'react';
import Card from '../../components/molecules/card';

const LoadingRequest: FC = (): ReactElement => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <section className="w-full flex h-fit relative pt-11 overflow-hidden justify-center lg:justify-end lg:pr-4">
        <Card className="w-full h-fit rounded-lg bg-white">
          <div className="mx-11 my-4 flex flex-col w-full ">
            <div className="flex flex-row gap gap-x-2">
              <div className="animate-pulse bg-gray-200 h-[40px] w-[120px] rounded-lg"></div>
              <div className="animate-pulse bg-gray-200 h-[40px] w-[120px] rounded-lg"></div>
              <div className="animate-pulse bg-gray-200 h-[40px] w-[120px] rounded-lg"></div>
            </div>

            <div>
              <div className="grid lg:gap-5 md:gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-1 my-3 w-full">
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
                <div className="animate-pulse bg-gray-200 h-[60px] w-full rounded-lg"></div>
              </div>
              <div className="flex justify-center w-full my-4 pt-4">
                <div className="w-1/3 h-10 bg-gray-200 animate-pulse rounded-lg"></div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </Suspense>
  );
};

export default LoadingRequest;
