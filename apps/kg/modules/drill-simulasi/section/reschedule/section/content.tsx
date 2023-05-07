import { FC, ReactElement } from 'react';
import { useCategorySimulation } from '../hooks';
import Rules from './rules';
import DateTime from './dateTime';

export const RescheduleContent: FC = (): ReactElement => {
  const { getCategorySimulation } = useCategorySimulation();
  return (
    <div className="px-6 md:px-8 lg:px-10">
      <h1 className="text-[#262626] text-[28px] font-[700] mb-5 dark:text-white mt-5 ">
        {getCategorySimulation == 'Active' ? 'Reschedule ' : ''}
        Simulasi, Drill & Assessment
      </h1>
      <div className="flex lg:flex-row flex-col lg:gap-16 gap-10 mb-20">
        <Rules />
        <DateTime />
      </div>
    </div>
  );
};
