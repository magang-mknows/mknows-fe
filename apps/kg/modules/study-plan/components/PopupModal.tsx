import { FC, ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "./Modal";
import { PopupModalProps } from "./types";

const PopupModal: FC<PopupModalProps> = ({
  popupTitle,
  description,
  icon,
  image,
  lookup,
  onClose,
  children,
  className,
  stylePopup,
  widthModal,
  hasImg,
  hasButton = true,
}): ReactElement => {
  return (
    <Modal
      lookup={lookup as boolean}
      onClose={onClose}
      withClose={true}
      widthModal={widthModal}
      hasButton={hasButton}
    >
      <div
        className={`flex flex-col items-center justify-center w-full py-10 text-center dark:bg-[#222529] ${className}`}
      >
        {icon ? (
          <>
            <Image src={icon as StaticImageData} height={55.7} width={55.7} alt="Popup-Image" />
            {hasImg && (
              <Image
                src={image as StaticImageData}
                height={280.75}
                width={280.75}
                alt="Popup-Image"
              />
            )}
          </>
        ) : (
          <>
            {hasImg && (
              <Image
                src={image as StaticImageData}
                className={"w-full"}
                height={280.75}
                width={280.75}
                alt="Popup-Image"
              />
            )}
          </>
        )}
        <h1 role="title" className={`my-4 font-bold text-[23.4px] ${stylePopup}`}>
          {popupTitle}
        </h1>
        <h5 className="font-medium text-[16px] text-[#A3A3A3] px-10">{description}</h5>
        {children}
      </div>
    </Modal>
  );
};

export default PopupModal;
