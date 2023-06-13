import { FC, lazy, ReactElement } from "react";

const CardSection = lazy(() => import("./history-request-section"));
const SkorSection = lazy(() => import("../../components/organisms/card-chart/skor-section"));
const RequestSection = lazy(() => import("../../components/organisms/card-chart/request-section"));
const SalaryTrack = lazy(() => import("../../components/organisms/card-chart/salary-track"));
const AgeTrack = lazy(() => import("../../components/organisms/card-chart/age-track"));
const LocationTrack = lazy(() => import("../../components/organisms/card-chart/location-tract"));

const HomeModules: FC = (): ReactElement => {
  return (
    <section>
      <CardSection />
      <div className="flex flex-col">
        <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:px-0 px-4">
          <RequestSection />
          <SkorSection />
        </div>
        <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:px-0 px-4">
          <AgeTrack />
          <LocationTrack />
        </div>

        <SalaryTrack />
      </div>
    </section>
  );
};

export default HomeModules;
