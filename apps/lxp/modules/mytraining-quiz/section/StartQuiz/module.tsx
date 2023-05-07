import React, { Fragment } from 'react';
import Question from './Question';
import Count from './Count';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { myTrainingQuizBreadCumbs } from '../../constant';

export const QuizStartPage = () => {
  return (
    <Fragment>
      <BreadCrumb items={myTrainingQuizBreadCumbs} />
      <div className="mx-8 md:mx-14 lg:mx-16 bg-[#FFFF] mt-5 rounded-md">
        <div className="flex px-[32px] py-[52px] lg:gap-[52px]">
          <Question />
          <Count />
        </div>
      </div>
    </Fragment>
  );
};
