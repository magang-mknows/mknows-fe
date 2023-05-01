import { ReactElement } from 'react';
import FileInformation from '../FileInformation';
import JobsInformation from '../JobsInformation';
import PrivateInformationAccordion from '../PrivateInformationAccordion';
import { Stepper } from '../common';
import { Card } from '../components';

const index = (): ReactElement => {
  return (
    <section className="mt-[40px] lg:px-[70px] md:px-[60px] px-[20px]">
      <div className="flex justify-center">
        <Card
          hasImage={false}
          className={'bg-white rounded-[8px] md:w-[95%] w-full'}
        >
          <div className="w-full relative">
            <Stepper />
            <PrivateInformationAccordion />
            <JobsInformation />
            <FileInformation />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default index;
