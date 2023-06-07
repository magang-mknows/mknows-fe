import { FC, ReactElement } from "react";
import { useResultData } from "../../hooks";
import { Checkbox } from "@mknows-frontend-services/components/atoms";
import { useForm } from "react-hook-form";

const Table: FC = (): ReactElement => {
  const { getResultData } = useResultData();
  const { control } = useForm({
    defaultValues: {
      select: false,
    },
  });

  return (
    <div className="overflow-x-scroll mt-20 lg:mt-0">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500   overflow-x-scroll ">
        <thead className="text-xs border text-[#A3A3A3] font-light bg-[#F6FBFA] dark:bg-[#F5F8FF] ">
          <tr>
            <th scope="col" className="py-2 cursor-default ">
              <div className="flex gap-3 px-8 items-center">
                <p>No.</p>
              </div>
            </th>

            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 px-8 items-center">
                <p>NIK</p>
                <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className=" flex gap-2  items-center">
                <p>Nama</p>
                <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
              </div>
            </th>
            <th scope="col" className="px-4 py-2 cursor-default">
              <div className="flex gap-2 items-center">
                <Checkbox name={"select"} variant={"lg"} control={control} />
                <p>Semua</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {getResultData.map((item, key) => {
            return (
              <tr key={key} className="text-[#262626] bg-white border-b dark:bg-[#ffff] ">
                <td className="px-8">{key + 1}</td>

                <td className="pl-12 py-2 ">{item._id}</td>
                <td className="px-4 py-2 font-semibold text-xs">{item.feature}</td>

                <td className="px-4 py-2 bg-green-400">
                  <Checkbox name={"select"} variant={"lg"} control={control} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
