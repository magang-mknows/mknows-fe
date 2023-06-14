import { FC, ReactElement } from "react";
import { createPortal } from "react-dom";
import { CardCS } from "@mknows-frontend-services/components/molecules";

const Modal: FC = (): ReactElement => {
  return createPortal(
    <section>
      <div>
        <span>Modal Title</span>
      </div>
      <CardCS />
    </section>,
    document.getElementById("modal") as HTMLElement,
  );
};

export default Modal;
