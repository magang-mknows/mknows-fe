import { FC, ReactElement } from "react";

import Modal from "@/components/Common/Modal";

import GlobalButton from "@/components/Common/GlobalButton";

import { PopupModalProps } from "@/components/Common/types";
import PopupDeleteSkeleton from "@/components/Loading/Discussion/PopupDeleteSkeleton";

import SuspenseError from "../Common/SuspenseError";

import { usePopupDeleteDiscussionStatus } from "@/hooks/Discussion/usePopupDeleteDiscussionStatus";

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
      <SuspenseError loadingFallback={<PopupDeleteSkeleton />}>
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
            <GlobalButton
              className="md:!w-[192px] h-[36px]"
              text={"Ya, Hapus"}
              color="blueBorder"
            />
            <GlobalButton className="md:!w-[192px] h-[36px]" text={"Tidak"} color="blue" />
          </div>
        </div>
      </SuspenseError>
    </Modal>
  );
};

export default PopupModalDeleteDiscussion;
