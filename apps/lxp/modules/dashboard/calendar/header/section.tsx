import { FC, Fragment, ReactElement } from "react";

import Link from "next/link";
import { useRecoilState } from "recoil";
import { selectedDate } from "./store";

export const CalendarHeader: FC = (): ReactElement => {
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const numDaysInMonth = new Date(year, month, 0).getDate();

  const dates = Array.from({ length: numDaysInMonth }, (_, i) => {
    const date = new Date(year, month - 1, i + 1);
    return { date };
  });

  const [selectDate, setSelectDate] = useRecoilState(selectedDate);

  return (
    <Fragment>
      <header className="flex justify-between  items-center">
        <h1 className="text-lg font-bold text-neutral-900 ">Kalender Saya</h1>
        <Link
          passHref
          href={"/"}
          className="text-version3-500 text-sm font-bold hover:underline hover:underline-offset-2 hover:text-version2-500  transition-colors ease-in-out duration-300"
        >
          Lihat Detail
        </Link>
      </header>
      <p className="mb-4 font-bold text-base text-version3-500">
        {months[month - 1]} {selectDate.getDate().toString()}
      </p>
      <section className="flex justify-center items-center">
        <div className="mb-4 gap-2  w-full overflow-hidden overflow-x-scroll  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] flex ">
          {dates.map(({ date }, index) => {
            return (
              <section
                onClick={() => setSelectDate(date)}
                key={index}
                className={`${
                  date.getDate() == selectDate.getDate() ? "bg-version3-500 text-neutral-50" : ""
                } text-sm text-center cursor-pointer  group px-3 py-2 transition-colors ease-in-out duration-300 rounded-md w-fit`}
              >
                <p
                  className={`${
                    date.getDate() === selectDate.getDate() ? "text-neutral-50" : "text-neutral-500"
                  }   text-xs`}
                >
                  {days[date.getDay()].substring(0, 2)}
                </p>
                <p
                  className={`${
                    date.getDate() === selectDate.getDate()
                      ? "text-neutral-50"
                      : "text-neutral-500 "
                  }  font-bold`}
                >
                  {index + 1}
                </p>
              </section>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};
