import { FC, ReactElement } from 'react';

export const EventDetaiDescription: FC = (): ReactElement => {
  return (
    <section className="col-span-3 xl:col-span-2">
      <h1 className="mb-5 text-lg font-bold text-neutral-900">
        Deskripsi Acara
      </h1>
      <div className="text-sm text-neutral-600 ">
        <p className="mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          eius repudiandae? Eius ab rerum ipsam ipsum officiis laudantium
          ratione minima, exercitationem similique expedita, eligendi voluptates
          rem, magni repudiandae quasi itaque.
        </p>
        <p className="mb-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ab
          dolorum dicta enim expedita, odit minus cum incidunt voluptatum unde!
        </p>
        <p className="mb-2">Lorem, ipsum dolor.</p>
        <p className="mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          error ullam quisquam! Eveniet laborum, similique ea unde libero dicta
          natus omnis distinctio. Quae numquam architecto perspiciatis quaerat
          nulla vero laboriosam eius iste, possimus officiis dignissimos omnis
          sed facilis deleniti esse ab quibusdam mollitia doloremque saepe
          eveniet optio, hic dolorem. Quaerat.
        </p>
      </div>
    </section>
  );
};

