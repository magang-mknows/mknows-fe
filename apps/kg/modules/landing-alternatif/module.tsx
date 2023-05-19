import { FC, Fragment, ReactElement } from 'react';
import { HeroAlternatif } from './hero';
import { FeatureAlternatif } from './feature';
import { PartnerAlternatif } from './partner';

export const LandingAlternatif: FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroAlternatif />;
      <FeatureAlternatif />
      <h1>ini baner sertifikat</h1>
      <PartnerAlternatif />
    </Fragment>
  );
};
