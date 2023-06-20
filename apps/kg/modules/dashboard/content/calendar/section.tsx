import Link from "next/link";
import { FC, ReactElement } from "react";
import { Montserrat } from "next/font/google";
import { useRecoilState } from "recoil";
import { selectedDate, months, days } from "./store";
import { useFilteredCalendar, useMatchCalendarByDate } from "./hooks";
import { TDashboardCalendar } from "../../types";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

export const CalendarSection: FC = (): ReactElement => {
  const { getMatchedCalendar, setMatchedCalendar } = useMatchCalendarByDate();
  const { getFilteredCalendar } = useFilteredCalendar();
  const [selectDate, setSelectDate] = useRecoilState(selectedDate);

  const now = new Date();
  const month = now.getMonth() + 1;

  function formatDateToHoursMinute(iso: string): string {
    const time = new Date(iso);
    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    return `${hour}:${minute}`;
  }
  function removeSameType(items: Array<TDashboardCalendar>) {
    const newItems = [];
    for (let i = 0; i < items.length - 1; i++) {
      let temp = null;
      if (items[i].type !== items[i + 1].type) {
        temp = items[i];
      }
      newItems.push(temp);
    }
    return newItems.filter((el) => el !== null);
  }

  return (
    <section
      className={`${montserrat.className} w-full text-neutral-900 bg-white h-fit px-7 py-12 rounded-md`}
    >
      <header className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-neutral-900 ">Kalender Saya</h1>
        <Link
          passHref
          href={"/"}
          className="text-primary-500 text-sm font-bold hover:underline hover:underline-offset-2 hover:text-blue-600 transition-colors ease-in-out duration-300"
        >
          Lihat Detail
        </Link>
      </header>
      <p className="mb-4 font-bold text-base text-yellow-600">{months[month - 1]}</p>
      <section className="flex justify-center items-center">
        <div className="mb-4 gap-2  w-full overflow-hidden overflow-x-scroll scrollbar-hide md:scrollbar-default  flex ">
          {getFilteredCalendar.map(({ date, items }, index) => {
            return (
              <section
                onClick={() => {
                  setMatchedCalendar(date);
                  setSelectDate(date);
                }}
                key={index}
                className={`${
                  date.getDate() == selectDate.getDate() ? "bg-primary-500 text-white" : ""
                } text-sm text-center cursor-pointer border-2 border-white hover:border-yellow-500 group px-3 py-3 transition-colors ease-in-out duration-300 rounded-md w-fit relative`}
              >
                <p
                  className={`${
                    date.getDate() === selectDate.getDate() ? "text-white" : "text-neutral-500"
                  }   text-xs`}
                >
                  {days[date.getDay()].substring(0, 2)}
                </p>
                <p
                  className={`${
                    date.getDate() === selectDate.getDate() ? "text-white" : "text-neutral-500"
                  }  text-neutral-800 font-bold`}
                >
                  {date.getDate()}
                </p>
                {items && items?.length > 0 && (
                  <div className="absolute flex w-fit bottom-1 left-1/2 -translate-x-1/2">
                    {removeSameType(items)?.map((calendar) => {
                      return (
                        <span
                          className={`block w-2 h-2 rounded-full 
                        ${calendar?.type === "ASSIGNMENT" && "bg-warning-500"}
                        ${calendar?.type === "MIDTERM" && "bg-primary-500"}
                        ${calendar?.type === "QUIZ" && "bg-yellow-700"}
                        ${calendar?.type === "FINAL" && "bg-neutral-500"}
                        ${calendar?.type === "MEETING" && "bg-success-500"}
                        ${calendar?.type === "EVENT" && "bg-yellow-500"}
                        `}
                        />
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </section>
      {getMatchedCalendar?.length > 0 && (
        <section className="text-sm">
          {getMatchedCalendar?.map((calendar) => {
            const startAt = formatDateToHoursMinute(calendar?.startAt);
            const endAt = formatDateToHoursMinute(calendar?.endAt);
            return (
              <div
                className={`border-l-4  cursor-pointer hover:border-opacity-50 transition-all ease-in-out duration-500 group py-3 hover:shadow-lg px-3 rounded-md mb-4
                ${calendar?.type === "ASSIGNMENT" && "border-warning-500"}
                ${calendar?.type === "MIDTERM" && "border-primary-500"}
                ${calendar?.type === "QUIZ" && "border-yellow-700"}
                ${calendar?.type === "FINAL" && "border-neutral-500"}
                ${calendar?.type === "MEETING" && "border-success-500"}
                ${calendar?.type === "EVENT" && "border-yellow-500"}
              `}
              >
                <p className="mb-1 text-neutral-800 dark:text-white text-xs md:text-sm">
                  {startAt}-{endAt}
                </p>
                <p className="font-bold text-neutral-800 text-xs md:text-sm">{calendar?.type}</p>
                <p className="text-neutral-500 text-xs md:text-sm">{calendar?.summary}</p>
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
};
