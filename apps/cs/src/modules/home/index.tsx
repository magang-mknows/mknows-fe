import { FC, lazy, ReactElement } from 'react';

const CardSection = lazy(() => import('./history-request-section'));
const SkorSection = lazy(
  () => import('../../components/organisms/card-chart/skor-section')
);
const RequestSection = lazy(
  () => import('../../components/organisms/card-chart/request-section')
);
const SalaryTrack = lazy(
  () => import('../../components/organisms/card-chart/salary-track')
);
const AgeTrack = lazy(
  () => import('../../components/organisms/card-chart/age-track')
);
const LocationTrack = lazy(
  () => import('../../components/organisms/card-chart/location-tract')
);

const HomeModules: FC = (): ReactElement => {
  return (
    <section>
      <CardSection />
      {/* 
      <div className="grid gap gap-x-4 lg:grid-cols-2 grid-cols-1">
        <RequestSection />
        <SkorSection />
        <AgeTrack />
        <LocationTrack />
        <SalaryTrack />
      </div> */}

      <div className="flex lg:flex-row flex-col gap-4">
        <div>
          <RequestSection />
          <AgeTrack />
        </div>
        <div>
          <SkorSection />
          <LocationTrack />
          <SalaryTrack />
        </div>
      </div>
    </section>
  );
};

export default HomeModules;
