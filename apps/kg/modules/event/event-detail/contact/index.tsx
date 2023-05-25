import { FC, ReactElement } from "react";
import { ContactCard } from "../common/event-card/contact-card";
import RelatedEvent from "../common/releted-event";

const Contact: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
      <div className="col-span-3 xl:col-span-2">
        <h1 className="text-neutral-900 text-lg mb-5">Hubungi Panitia</h1>
        <ContactCard />
      </div>
      <RelatedEvent />
    </div>
  );
};

export default Contact;
