import { FC, ReactElement, useState } from 'react';

export const DateInput: FC = (): ReactElement => {
  const [date] = useState();
  return (
    <div className="flex p-1 lg:w-[380px] w-full rounded-md border text-sm">
      <h1>Dari : {date}</h1>
      <input type="date" />
      <h1>Sampai : {date}</h1>
      <input type="date" />
    </div>
  );
};
