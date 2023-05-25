import { FC, Fragment, ReactElement } from "react";
import { RiErrorWarningFill } from "react-icons/ri";

export const RequestScheduleInstrucion: FC = (): ReactElement => {
  const dummyInstructions = [
    " Peserta harus memastikan bahwa perangkat dan teknologi yang digunakan untuk drill simulasi & assessment berfungsi dengan baik. Pastikan bahwa peserta memiliki akses yang cukup dan perangkat yang dapat mendukung drill simulasi & assessment pada LMS",
    "Sebelum memulai drill simulasi & assessment pada LMS, pastikan bahwa peserta telah diberikan instruksi yang jelas dan sasaran yang harus dicapai. Sasaran harus sesuai dengan kemampuan dan kebutuhan dari setiap individu yang terlibat dalam drill tersebut",
  ];

  return (
    <Fragment>
      <section className="w-full flex gap-2 mb-2 md:items-center items-start">
        <RiErrorWarningFill className="text-version3-400 text-2xl" />
        <h1 className="text-sm md:text-base lg:text-xl font-bold text-neutral-900">
          Informasi Mengenai Drill, Simulasi & Assessment
        </h1>
      </section>
      <section>
        {dummyInstructions.map((item, index) => {
          return (
            <p key={index} className="text-xs md:text-sm mb-2 text-justify text-neutral-900">
              {index + 1}. {item}
            </p>
          );
        })}
      </section>
    </Fragment>
  );
};
