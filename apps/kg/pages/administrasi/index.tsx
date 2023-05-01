import { AdministrationModule } from '../../modules';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const AdministrationPage: NextPage = (): ReactElement => {
  return (
    <main className="h-full flex flex-col  bg-[#F5F5F5]">
      <AdministrationModule />;
    </main>
  );
};

export default AdministrationPage;
