import { FC, ReactElement } from 'react';
import RelatedEvent from '../common/releted-event';

export const Description: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
      <section className="col-span-3 xl:col-span-2">
        <h1 className="text-neutral-900 text-lg mb-5">Deskripsi Acara</h1>
        <div className="text-sm text-neutral-600 ">
          <p className="mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            eius repudiandae? Eius ab rerum ipsam ipsum officiis laudantium
            ratione minima, exercitationem similique expedita, eligendi
            voluptates rem, magni repudiandae quasi itaque.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            ab dolorum dicta enim expedita, odit minus cum incidunt voluptatum
            unde!
          </p>
        </div>
      </section>
      <RelatedEvent />
    </div>
  );
};
