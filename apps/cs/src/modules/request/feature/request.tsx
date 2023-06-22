import { FC, ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mknows-frontend-services/components/atoms";
import { useRequestData } from "../hooks";
import { IconWarning } from "@mknows-frontend-services/components/atoms";
import { useRequest } from "../hooks";
import { CardCS } from "@mknows-frontend-services/components/molecules";

const RequestModule: FC = (): ReactElement => {
  const { getRequestData } = useRequestData();
  const { data } = useRequest();
  const [isOpen, setisOpen] = useState(false);

  return (
    <section>
      <div className="flex flex-row gap gap-x-2 py-2 items-center w-full">
        <IconWarning />
        <p className="text-xs md:text-sm font-normal text-neutral-500">
          Anda dapat memilih satu atau lebih fitur
        </p>
      </div>
      <div className="grid lg:gap-5 md:gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 my-3 w-full">
        {data?.data.map((item, index) => {
          return (
            <CardCS
              className="hover:cursor-pointer w-full xl:h-[107px] lg:h-[107px] relative shadow-md hover:shadow-xl py-8 px-4"
              key={index}
            >
              <div className="flex flex-row w-full h-full space-x-[10px]">
                <div>
                  <img src={getRequestData[index]} alt="icon" className="w-16 hidden md:flex" />
                </div>

                <div className="flex-col w-full space-y-1">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-neutral-400 font-normal text-xs">Data Masuk 500</p>
                </div>
                <div className="text-center text-xs right-2 top-2 absolute rounded-full w-[22px] h-[22px] bg-neutral-200 font-semibold py-1">
                  {item.total_data}
                </div>
              </div>
            </CardCS>
          );
        })}
      </div>
      <Link to="/dashboard/request/choice-feature">
        <div className="flex justify-center w-full my-4 pt-4">
          <Button
            type="button"
            // onClick={() => setisOpen(true)}
            className="w-1/3 h-10 bg-primary-400 text-white rounded-[4px] font-bold"
          >
            Pilih Fitur
          </Button>
        </div>
      </Link>
    </section>
  );
};

export default RequestModule;
