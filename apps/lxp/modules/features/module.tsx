import React from 'react';
import { ClientProvider } from '../common/provider';
import { FeaturesModule } from '@mknows-frontend-services/modules';
import { LayoutFooter } from '../common/footer/footer-layout';

export const LXPFeaturesModule = () => {
  return (
    <ClientProvider>
      <FeaturesModule accessFrom="LXP" />
      <LayoutFooter />
    </ClientProvider>
  );
};
