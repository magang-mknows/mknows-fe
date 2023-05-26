import { FC, ReactElement } from "react";
import { Modal } from "@mknows-frontend-services/components/molecules";
import { Button } from "@mknows-frontend-services/components/atoms";

import { usePopupDeleteDiscussionStatus } from "../hooks/usePopupDeleteDiscussionStatus";

import { PopupModalProps } from "../types";

const PopupModalDeleteDiscussion: FC<PopupModalProps> = (): ReactElement => {
  const { setPopupDeleteStatus, getPopupDeleteStatus } = usePopupDeleteDiscussionStatus();

  return (
    <Modal
      lookup={getPopupDeleteStatus}
      onClose={() => setPopupDeleteStatus(!getPopupDeleteStatus)}
      hasButton={true}
      hasImage={false}
      withClose={true}
      widthModal={"!w-full md:!w-2/5"}
    >
      <div className="flex flex-col items-center justify-center bg-white rounded-lg center md:gap-8">
        <div className="grid gap-3 text-center">
          <svg
            className="justify-self-center"
            width="24"
            height="30"
            viewBox="0 0 24 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00001 26.6667C2.00001 28.5 3.50001 30 5.33334 30H18.6667C20.5 30 22 28.5 22 26.6667V6.66667H2.00001V26.6667ZM23.6667 1.66667H17.8333L16.1667 0H7.83334L6.16668 1.66667H0.333344V5H23.6667V1.66667Z"
              fill="#EE2D24"
            />
          </svg>
          <h1 className="text-[20px] font-semibold">Konfirmasi</h1>
          <section className="text-[16px] font-normal">
            Apakah anda ingin menghapus postingan ini?
          </section>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <Button className="md:!w-[192px] h-[36px]" color="blueBorder" type={"button"}>
            Ya, Hapus
          </Button>
          <Button className="md:!w-[192px] h-[36px]" color="blue" type={"button"}>
            Tidak
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PopupModalDeleteDiscussion;
