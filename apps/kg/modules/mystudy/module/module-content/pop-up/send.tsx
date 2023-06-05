import { FC, ReactElement, useRef } from "react";
import { usePopupConfirmModul } from "../hooks";
import { useConfirmModul } from "../../hooks";
import { PopupModal } from "../../../discussion/components/modal/pop-up";
import { ModuleButton } from "../../components/button";

export const ModulePopup: FC = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setPopupStatus, getPopupStatus } = usePopupConfirmModul();
  const { setConfirmModul } = useConfirmModul();

  function onSendHandler() {
    console.log(inputRef.current?.value);
  }

  return (
    <PopupModal
      onClose={() => setPopupStatus(false)}
      lookup={getPopupStatus}
      className="!h-60 !w-[100%] text-md"
    >
      <h1 className="flex p-4 pt-2 rounded-md bg-yellow-400 text-white w-full">
        Apa Pelajaran yang kamu pelajari hari ini?
      </h1>
      <div className="shadow flex justify-start p-2 w-full my-3">
        <input
          ref={inputRef}
          className="w-full h-auto lg:p-5 p-2 rounded-md outline-none"
          type="text"
          placeholder="Tulis materi yang kamu dapat disini..."
        />
      </div>
      <p className="text-gray-400 lg:text-lg text-sm">
        Materi kamu akan di-review oleh dosen atau pembimbing kamu. Pastikan kamu mengisi dengan
        sesuai!
      </p>
      <div className="p-4 flex w-full justify-end items-end">
        <ModuleButton
          onClick={() => {
            setPopupStatus(false);
            setConfirmModul(true);
            onSendHandler();
          }}
          text="Kirim"
          color="yellow"
          size="base"
        />
      </div>
    </PopupModal>
  );
};
