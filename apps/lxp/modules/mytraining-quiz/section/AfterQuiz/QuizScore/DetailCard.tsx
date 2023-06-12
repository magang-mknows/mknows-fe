import { FC, Fragment, ReactElement } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { DetailCardProps } from "./type";

const DetailCard: FC<DetailCardProps> = ({ type, value }): ReactElement => {
  return (
    <section
      className={`${
        type === "trueAnswer"
          ? " bg-[#E3FBDA]  hover:bg-secondary-green-200"
          : type === "falseAnswer"
          ? "bg-[#FEDBD7]  hover:bg-secondary-red-200"
          : type === "timeFinished"
          ? "bg-[#FEF6D0] hover:bg-secondary-yellow-200"
          : type === "totalQuestions" && "bg-neutral-200 hover:bg-neutral-300"
      } flex gap-3 min-h-[80px] md:min-h-[100px] lg:min-h-[80px] items-center px-4 w-full  rounded-md shadow-sm transition-colors ease-in duration-300 cursor-pointer`}
    >
      {type === "trueAnswer" ? (
        <Fragment>
          <BsCheckCircleFill className="text-version2-300  text-4xl" />{" "}
          <div className="text-neutral-900 ">
            <h1 className="font-bold text-sm">{value}</h1>
            <h1 className="text-xs">Jawaban Benar</h1>
          </div>
        </Fragment>
      ) : null}
      {type === "falseAnswer" ? (
        <Fragment>
          <FaTimesCircle className="text-warning-500  text-4xl" />
          <div className="text-neutral-900 ">
            <h1 className="font-bold text-sm">{value}</h1>
            <h1 className="text-xs">Jawaban Salah</h1>
          </div>
        </Fragment>
      ) : null}
      {type === "timeFinished" ? (
        <Fragment>
          <MdAccessTimeFilled className=" text-version3-500  text-4xl" />
          <div className="text-neutral-900 ">
            <h1 className="font-bold text-sm">{value}</h1>
            <h1 className="text-xs">Waktu Selesai</h1>
          </div>
        </Fragment>
      ) : null}
      {type === "totalQuestions" ? (
        <Fragment>
          <AiFillInfoCircle className="text-neutral-500  text-4xl" />
          <div className="text-neutral-900 ">
            <h1 className="font-bold text-sm">{value}</h1>
            <h1 className="text-xs">Total Soal</h1>
          </div>
        </Fragment>
      ) : null}
    </section>
  );
};

export default DetailCard;
