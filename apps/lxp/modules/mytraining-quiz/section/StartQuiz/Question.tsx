import React from "react";

const Question = () => {
  return (
    <div className=" border-2 rounded-md w-full border-[#E5E5E5] p-[40px]">
      <div className="flex justify-center">
        <h1 className="text-[#000] text-center font-[600] text-[20px]">
          1. Berapakah harga yang diharuskan saat 10% bunga dari bank ?
        </h1>
      </div>
      <div className="mt-[69px]">
        <div className="flex justify-center mt-[30px]">
          <div className="relative w-[70%] py-4 border-[#003A63] border-2 text-base rounded-lg text-[#003A63]">
            <label>
              <h1 className="text-center">a. Rp 70.000</h1>
            </label>
            <input
              type="radio"
              name="choice"
              className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center mt-[30px]">
          <div className="relative w-[70%] py-4 border-[#003A63] border-2 text-base rounded-lg text-[#003A63]">
            <label>
              <h1 className="text-center">b. Rp 70.000</h1>
            </label>
            <input
              type="radio"
              name="choice"
              className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center mt-[30px]">
          <div className="relative w-[70%] py-4 border-[#003A63] border-2 text-base rounded-lg text-[#003A63]">
            <label>
              <h1 className="text-center">c. Rp 70.000</h1>
            </label>
            <input
              type="radio"
              name="choice"
              className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center mt-[30px]">
          <div className="relative w-[70%] py-4 border-[#003A63] border-2 text-base rounded-lg text-[#003A63]">
            <label>
              <h1 className="text-center">d. Rp 70.000</h1>
            </label>
            <input
              type="radio"
              name="choice"
              className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[65px] mt-[88px]">
        <button className="border-2 border-[#F26800] rounded-lg h-[48px] lg:w-[175px] w-full text-[#F26800]">
          Sebelumnya
        </button>
        <button className="bg-[#FAB317] rounded-lg h-[48px] lg:w-[175px] w-full text-[#FFFF]">
          Ragu-ragu
        </button>
        <button className="bg-[#F26800] rounded-lg h-[48px] lg:w-[175px] w-full text-[#FFFF]">
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Question;
