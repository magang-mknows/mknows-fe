import { lazily } from 'react-lazily';
import { ClientProvider } from '../common/provider';
import { LayoutFooter } from '../common/footer/footer-layout';
import { FC, ReactElement } from 'react';
const { FeaturesModule } = lazily(
  () => import('@mknows-frontend-services/modules')
);

export const LXPFeaturesModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <FeaturesModule accessFrom="LXP" />
      <LayoutFooter />
    </ClientProvider>
  );
};
