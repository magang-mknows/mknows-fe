import Image, { StaticImageData } from 'next/image';
import { FC, ReactElement } from 'react';
import { CardAssigment } from './type';

const AssigmentStatusCard: FC<CardAssigment> = ({
  titleAssigment,
  category,
  date,
  time,
  titleCourse,
  bgLine,
  classNameCategory,
  imgAssigment,
}): ReactElement => {
  return (
    <div className="py-4">
      <div className="rounded-md w-full  flex-wrap  shadow-md flex justify-between min-h-[110px] items-center px-4 md:px-6 lg:px-8 relative py-5 lg:py-0  ">
        <div
          className={`flex absolute -left-0 rounded-tl-lg rounded-bl-lg h-full w-2 ${bgLine}`}
        />
        <div className="banner px-2 lg:py-9 py-0">
          <h1 className="text-[18px] font-[700] text-[#262626] dark:text-white">
            {titleAssigment}
          </h1>
          <p className="text-[#A3A3A3] font-[400] text-[14px] mt-3">
            {titleCourse}
          </p>
        </div>
        <div className="flex flex-col md:items-center mr-6 md:mr-0 px-2 mt-5 lg:mt-0 ">
          <Image alt="Image" width={21} src={imgAssigment as StaticImageData} />
          <p className={`mt-2 text-[14px] font-[600] ${classNameCategory}`}>
            {category}
          </p>
          <div className="flex flex-row text-[#262626] dark:text-white text-[14px] font-[400]">
            <p>{date}</p>
            <p className="px-2">|</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssigmentStatusCard;
