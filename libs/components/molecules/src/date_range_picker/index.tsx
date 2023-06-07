import React, { useState, useRef } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { IConCalendar } from "@mknows-frontend-services/components/atoms";
import { DateTimeFormatOptions, formatDate } from "@mknows-frontend-services/utils";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DateRange {
  startDate: Date;
  endDate: Date;
  key: string;
  color: string;
}

interface DateRangePickerProps {
  onRangeChange: (range: DateRange) => void;
}

export const DateRangePickerComponent: React.FC<DateRangePickerProps> = ({ onRangeChange }) => {
  const [ranges, setRanges] = useState<DateRange>({
    startDate: new Date(Date.now()),
    endDate: addDays(new Date(), 7),
    key: "selection",
    color: "#4AC1A2",
  });
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  const handleRangeChange = (item: any) => {
    setRanges(item.selection);
    onRangeChange(item.selection);
  };

  const options: DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      <div
        className="flex bg-white p-1 justify-center items-center rounded-md text-gray-400 border border-gray-200 py-2 w-500px gap-1"
        onClick={() => setOpen((open) => !open)}
      >
        <span className="text-xs">
          Dari{" "}
          {formatDate({
            date: ranges?.startDate,
            options,
          })}
        </span>
        <IConCalendar />
        <span className="text-xs">
          Sampai{" "}
          {formatDate({
            date: ranges?.endDate,
            options,
          })}
        </span>
        <IConCalendar />
        <span className="text-xs">tt/bb/tahun</span>
      </div>

      <div ref={refOne}>
        {open && (
          <DateRangePicker
            onChange={handleRangeChange}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={[ranges]}
            direction="horizontal"
            className="absolute z-40 pt-2"
          />
        )}
      </div>
    </div>
  );
};
