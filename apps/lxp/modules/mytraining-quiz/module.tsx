import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { FC, Fragment, ReactElement, lazy } from 'react';
import { myTrainingQuizBreadCumbs } from './constant';

const QuizHome = lazy(() => import('./QuizHome'));

const QuizHomePage: FC = (): ReactElement => {
  return (
    <Fragment>
      <BreadCrumb items={myTrainingQuizBreadCumbs} />
      <QuizHome />
    </Fragment>
  );
};

export default QuizHomePage;
