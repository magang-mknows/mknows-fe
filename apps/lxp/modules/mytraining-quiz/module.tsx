import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { FC, Fragment, ReactElement, lazy } from 'react';
import { myTrainingQuizBreadCumbs } from './constant';
import { ClientProvider } from '../common/provider';

const QuizHome = lazy(() => import('./QuizHome'));

const QuizHomePage: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={myTrainingQuizBreadCumbs} />
      <QuizHome />
    </ClientProvider>
  );
};

export default QuizHomePage;
