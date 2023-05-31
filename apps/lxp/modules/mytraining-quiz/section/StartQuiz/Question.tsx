import { Button } from "@mknows-frontend-services/components/atoms";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";

export const Question = () => {
  return (
    <div className=" border-2 rounded-md w-full border-neutral-100  py-10 px-8">
      <div className="flex mb-6">
        <h1 className="text-neutral-800 text-center font-bold text-base">
          1. Berapakah harga yang diharuskan saat 10% bunga dari bank ?
        </h1>
      </div>
      <div className="flex mb-5">
        <label className="relative min-w-[600px] py-3 border-version3-300 border-2 text-sm rounded-lg text-version3-300 cursor-pointer hover:bg-neutral-100 transition-all ease-in-out duration-75 hover:font-bold block">
          <h1 className="text-center">a. Rp 70.000</h1>
          <input type="radio" name="choice" className="absolute appearance-none cursor-pointer" />
        </label>
      </div>
      <div className="flex mb-5">
        <label className="relative min-w-[600px] py-3 border-version3-300 border-2 text-sm rounded-lg text-version3-300 cursor-pointer hover:bg-neutral-100 transition-all ease-in-out duration-75 hover:font-bold block">
          <h1 className="text-center">a. Rp 70.000</h1>
          <input type="radio" name="choice" className="absolute appearance-none cursor-pointer" />
        </label>
      </div>

      <div className="flex gap-4 mt-12">
        <Button
          type="button"
          className="flex gap-2 hover:bg-neutral-100/50 items-center px-4 py-2 bg-neutral-50 border-2 border-version3-500 rounded-md shadow-sm"
        >
          <MdOutlineNavigateNext className="rotate-180 text-version3-500" />
          <h1 className="text-version3-500 text-sm font-bold">Sebelumnya</h1>
        </Button>
        <Button
          type="button"
          className="flex gap-2  items-center px-4 py-2 bg-[#FAB317] border-2 border-[#FAB317] rounded-md shadow-sm hover:bg-[#e1a015]"
        >
          <AiOutlineQuestionCircle className=" text-neutral-50" />
          <h1 className="text-neutral-50 text-sm font-bold">Ragu-ragu</h1>
        </Button>
        <Button
          type="button"
          className="flex gap-2  items-center px-4 py-2 bg-version3-500 border-2 border-version3-500 rounded-md shadow-sm hover:bg-version2-500"
        >
          <h1 className="text-neutral-50 text-sm font-bold">Selanjutnya</h1>
          <MdOutlineNavigateNext className=" text-neutral-50" />
        </Button>
      </div>
    </div>
  );
};
