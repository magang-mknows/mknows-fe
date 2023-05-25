import { FC, ReactElement } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FaTrash } from "react-icons/fa";
import { isModalOpen, selectedPostId } from "../../../store";
import { Button } from "@mknows-frontend-services/components/atoms";

export const DeleteConfirmModal: FC = (): ReactElement => {
  const setOptionOpen = useSetRecoilState(isModalOpen);
  const getSeletedPostId = useRecoilValue(selectedPostId);

  return (
    <section className="flex flex-col items-center justify-center px-10 py-6">
      <div className="h-10 w-10 rounded-full grid place-items-center relative">
        <FaTrash className="text-warning-500 text-4xl z-20" />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center py-2 w-[490px]">
        <h1 className="font-bold text-lg text-neutral-800">Konfirmasi {getSeletedPostId}</h1>
        <p className="w-full text-center text-sm mb-4 ">
          Apakah anda ingin menghapus postingan ini?
        </p>
        <section className="w-full flex gap-6">
          <Button
            type="button"
            className="py-2.5 w-full text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300"
            onClick={() => {
              setOptionOpen(false);
            }}
          >
            <h1>Ya</h1>
          </Button>
          <Button
            type="button"
            className="py-2.5 w-full text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 bg-neutral-50 text-version2-500 hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400 "
            onClick={() => {
              setOptionOpen(false);
            }}
          >
            <h1>Tidak</h1>
          </Button>
        </section>
      </div>
    </section>
  );
};
