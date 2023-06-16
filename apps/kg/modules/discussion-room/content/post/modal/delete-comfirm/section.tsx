import { FC, ReactElement } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FaTrash } from "react-icons/fa";
import { isModalOpen, selectedPostId } from "../../../store";
import { Button } from "@mknows-frontend-services/components/atoms";
import { useForm } from "react-hook-form";
import { useDeleteDiscussionById } from "./hooks";

export const DeleteConfirmModal: FC = (): ReactElement => {
  const setOptionOpen = useSetRecoilState(isModalOpen);
  const getSeletedPostId = useRecoilValue(selectedPostId);

  const { mutate, isLoading } = useDeleteDiscussionById(getSeletedPostId as string);

  const { handleSubmit } = useForm({
    mode: "all",
  });

  const onSubmit = handleSubmit(async (data) => {
    await mutate(data);
  });

  return (
    <section className="flex flex-col items-center justify-center px-10 py-6">
      <div className="relative grid w-10 h-10 rounded-full place-items-center">
        <FaTrash className="z-20 text-4xl text-warning-500" />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center py-2 w-[490px]">
        <h1 className="text-lg font-bold text-neutral-800">Konfirmasi</h1>
        <p className="w-full mb-4 text-sm text-center ">
          Apakah anda ingin menghapus postingan ini?
        </p>
        <section className="flex w-full gap-6">
          <Button
            type="button"
            className="py-2.5 w-full text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 bg-neutral-50 text-version2-500 hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400 "
            onClick={() => {
              onSubmit();
              if (!isLoading) {
                setOptionOpen(false);
              }
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
