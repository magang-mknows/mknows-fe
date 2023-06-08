import React, { ReactElement } from "react";
import { videoMytrainingTypes } from "../type";

const Description = (props: videoMytrainingTypes): ReactElement => {
  const { title, description } = props;
  return (
    <div className="bg-white  w-full lg:h-[269px] h-fit rounded-[8px] mt-[28px] shadow-md py-[23px] px-[46px] mb-10">
      <h1 className="text-[18px] font-[600] text-[#171717]  h-269px ">{title}</h1>
      <p className="text-[12px] font-[400] text-[#737373]  h-269px pt-[20px] ">{description}</p>
    </div>
  );
};

export default Description;
