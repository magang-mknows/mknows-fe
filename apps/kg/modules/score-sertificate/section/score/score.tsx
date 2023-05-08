import React, { FC, ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
});

import { ShowDetailStatus } from '../../store';
import { SummaryTable } from './summaryTable/table';
import { ContentLayouts } from './common';
import { SummaryChart } from './summaryChart';
import { ScoreDetail } from './scoreDetail';

const ScoreSection: FC = (): ReactElement => {
  const getDetailStatus = useRecoilValue(ShowDetailStatus);

  return (
    <>
      <ContentLayouts
        withGrid={!getDetailStatus ? true : false}
        className={`${montserrat.className} ${
          !getDetailStatus
            ? 'grid-cols-1 lg:grid-cols-2 justify-center gap-6'
            : ''
        }  w-full `}
      >
        {!getDetailStatus ? (
          <>
            <SummaryChart />
            <SummaryTable />
          </>
        ) : (
          <ScoreDetail />
        )}
      </ContentLayouts>
    </>
  );
};

export default ScoreSection;
