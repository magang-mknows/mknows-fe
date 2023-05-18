import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { ClientProvider } from '../common/provider';
import { TrainingContractBreadCumbs } from './const';
import { TrainingInformationContent } from './content';

export const TrainingInformationModule = () => {
  return (
    <ClientProvider>
      <section className="bg-neutral-50/60 min-h-[200vh] md:min-h-[120vh] lg:min-h-[150vh] xl:min-h-[120vh] relative overflow-hidden">
        <BreadCrumb
          items={TrainingContractBreadCumbs}
          textColor="text-version2-400"
        />
        <TrainingInformationContent />
      </section>
    </ClientProvider>
  );
};
