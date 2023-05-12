import React, { useState, useRef } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import IConCalendar from '../../../atoms/icons/ic-calendar';

interface DateRange {
  startDate: Date;
  endDate: Date;
  key: string;
  color: string;
}

interface DateRangePickerProps {
  onRangeChange: (range: DateRange) => void;
}

const DateRangePickerComponent: React.FC<DateRangePickerProps> = ({
  onRangeChange,
}) => {
  const [ranges, setRanges] = useState<DateRange[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
      color: '#4AC1A2',
    },
  ]);
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  const handleRangeChange = (item: any) => {
    setRanges([item.selection]);
    onRangeChange(item.selection);
  };

  return (
    <div>
      <div
        className="flex bg-white p-1 justify-center items-center rounded-md text-sm text-gray-400 border border-gray-200 py-2 px-6 gap-1"
        onClick={() => setOpen((open) => !open)}
      >
        <span>Dari</span>
        <IConCalendar />
        <span>Sampai</span>
        <IConCalendar />
        <span>tt/bb/tahun</span>
      </div>

      <div ref={refOne}>
        {open && (
          <DateRangePicker
            onChange={handleRangeChange}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={ranges}
            direction="horizontal"
            className="absolute z-40 pt-2"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangePickerComponent;
