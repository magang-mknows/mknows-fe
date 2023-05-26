import { FC, ReactElement } from "react";
import RelatedEvent from "../common/releted-event";

type TDescription = {
  content: string;
};

export const Description: FC<TDescription> = ({ content }): ReactElement => {
  return (
    <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
      <section className="col-span-3 xl:col-span-2">
        <h1 className="mb-5 text-lg text-neutral-900">Deskripsi Acara</h1>
        <div className="text-sm text-neutral-600 ">
<<<<<<< Updated upstream
          <p className="mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eius repudiandae?
            Eius ab rerum ipsam ipsum officiis laudantium ratione minima, exercitationem similique
            expedita, eligendi voluptates rem, magni repudiandae quasi itaque.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ab dolorum dicta
            enim expedita, odit minus cum incidunt voluptatum unde!
          </p>
=======
          <p className="mb-2">{content}</p>
>>>>>>> Stashed changes
        </div>
      </section>
      <RelatedEvent />
    </div>
  );
};
