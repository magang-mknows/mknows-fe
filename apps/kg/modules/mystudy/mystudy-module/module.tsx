import { FC, Fragment, ReactElement } from 'react';
import { useGetMyStudy } from './hooks';
import { MajorSection } from './major';
import { TDataMajor } from './types';

export const MyStudyModule: FC = (): ReactElement => {
  //api
  const { data } = useGetMyStudy();
  console.log(data);
  console.log('MyStudy response : ', data?.data);

  const dataMajorProps = data?.data.dataMajor;

  return (
    <div className="w-full">
      <MajorSection {...(dataMajorProps as TDataMajor)} />
      {/* <div className="px-6">
        <CardStudy />
      </div> */}
    </div>
  );
};
