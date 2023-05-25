import { FC, Fragment, ReactElement } from 'react';
import { HeroAlternatif } from './hero';
import { FeatureAlternatif } from './feature';
import { BannerAlternatif } from './banner';
import { PartnerAlternatif } from './partner';
import { LayoutFooter } from '../common/footer/footer-layout';
import { GlimpseAlternatif } from './glimpse';
import { FacultyAlternatif } from './faculty';

export const LandingAlternatif: FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroAlternatif />;
      <FeatureAlternatif />
      <BannerAlternatif />
      <PartnerAlternatif />
      <GlimpseAlternatif />
      <FacultyAlternatif />
      <LayoutFooter />
    </Fragment>
  );
};
