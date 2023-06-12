import { FC, Fragment, ReactElement } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { DetailCardProps } from "./type";
import { formatElapsedTime } from "@mknows-frontend-services/utils";

const DetailCard: FC<DetailCardProps> = ({ type, value }): ReactElement => {
  const { minutes, seconds } = formatElapsedTime(value);

  return (
    <section
      className={`${
        type === "correct"
          ? " bg-[#E3FBDA]  hover:bg-secondary-green-200"
          : type === "wrong"
          ? "bg-[#FEDBD7]  hover:bg-secondary-red-200"
          : type === "time_elapsed"
          ? "bg-[#FEF6D0] hover:bg-secondary-yellow-200"
          : type === "total_question" && "bg-neutral-200 hover:bg-neutral-300"
      } flex gap-3 min-h-[80px] md:min-h-[100px] lg:min-h-[80px] items-center px-4 w-full  rounded-md shadow-sm transition-colors ease-in duration-300`}
    >
      {type === "correct" ? (
        <Fragment>
          <BsCheckCircleFill className="text-version2-300  text-4xl" />{" "}
          <div className="text-neutral-900 ">
            <h1 className="font-bold text-sm">{Math.round(value)}</h1>
            <h1 className="text-xs">Jawaban Benar</h1>
          </div>
        </Fragment>
      ) : null}
      {type === "wrong" ? (
        <Fragment>
          <FaTimesCircle className="text-warning-500  text-4xl" />
          <div className="text-neutral-900 ">
            <h1 className="font-bold text-sm">{Math.round(value)}</h1>
            <h1 className="text-xs">Jawaban Salah</h1>
          </div>
        </Fragment>
      ) : null}
      {type === "time_elapsed" ? (
        <Fragment>
          <MdAccessTimeFilled className=" text-version3-500  text-4xl" />
          <div className="text-neutral-900 ">
            <h1 className="font-bold text-sm">
              {minutes} Menit {seconds} detik
            </h1>
            <h1 className="text-xs">Waktu Selesai</h1>
          </div>
        </Fragment>
      ) : null}
      {type === "total_question" ? (
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
