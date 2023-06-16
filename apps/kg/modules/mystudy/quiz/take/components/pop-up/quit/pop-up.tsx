import { FC, ReactElement } from "react";
import { CustomPopup } from "../custom";
import { useQuizQuitPopup } from "./hooks";
import { Button } from "@mknows-frontend-services/components/atoms";
import Image from "next/image";
import ConfirmIcon from "../../../../assets/confirm.svg";
import { QuizStaticTimer } from "../../static-timer";
import Link from "next/link";

export const QuizQuitPopup: FC = (): ReactElement => {
  const { getQuizQuitPopup, setQuizQuitPopup } = useQuizQuitPopup();

  function onClose() {
    setQuizQuitPopup({ ...getQuizQuitPopup, status: false });
  }

  return (
    <CustomPopup lookup={getQuizQuitPopup.status} modalStyle="w-[800px] h-fit bg-white px-6 py-5">
      <section className="flex flex-col items-center gap-y-5">
        <Image src={ConfirmIcon} alt="confirm-icon" />
        <h5 className="text-xl font-semibold">Konfirmasi</h5>
        <QuizStaticTimer isFromLocalStorage={false} />
        <h5 className="text-xl">
          Kamu akan meninggalkan quiz ini. waktu yang tersisa akan terus berjalan.
        </h5>
      </section>
      <section className="w-full flex justify-between mt-5 px-6 py-5 text-base font-semibold">
        <Button
          onClick={onClose}
          type="button"
          className="w-[48%] border-2 border-primary-500 py-3 rounded-lg text-primary-500 hover:opacity-75"
        >
          Batal
        </Button>
        <Link
          href={getQuizQuitPopup.link}
          className="w-[48%] py-3 rounded-lg bg-primary-500 hover:opacity-75"
        >
          <button onClick={onClose} className="w-full h-full text-white">
            Yakin
          </button>
        </Link>
      </section>
    </CustomPopup>
  );
};
