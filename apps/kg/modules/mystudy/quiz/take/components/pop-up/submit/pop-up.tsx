import { FC, ReactElement } from "react";
import { useQuizSubmitPopup } from "./hooks";
import ConfirmIcon from "../../../../assets/confirm.svg";
import { Button } from "@mknows-frontend-services/components/atoms";
import { CustomPopup } from "../custom";
import Image from "next/image";
import { QuizStaticTimer } from "../../static-timer";
import { useAutoSaveQuizAnswer, useSubmitQuiz } from "../../../hooks";
import { useRouter } from "next/router";
import { TQuizSubmitPayload } from "../../../type";

export const QuizSubmitPopup: FC = (): ReactElement => {
  const router = useRouter();
  const { getQuizSubmitPopup, setQuizSubmitPopup } = useQuizSubmitPopup();
  const { resetStoredAnswer } = useAutoSaveQuizAnswer();
  const { mutate } = useSubmitQuiz();

  function onClose() {
    setQuizSubmitPopup({ ...getQuizSubmitPopup, status: false });
  }
  function onSubmit() {
    const payload: TQuizSubmitPayload = {
      id: getQuizSubmitPopup.quizTakeId,
      req: getQuizSubmitPopup.payloadReq,
    };
    mutate(payload);
    resetStoredAnswer();
    setQuizSubmitPopup({ ...getQuizSubmitPopup, status: false });
    router.push(`${getQuizSubmitPopup.prevPath}/nilai/${getQuizSubmitPopup.quizTakeId}`);
  }

  return (
    <CustomPopup lookup={getQuizSubmitPopup.status} modalStyle="w-[800px] h-fit bg-white px-6 py-5">
      <section className="flex flex-col items-center gap-y-5">
        <Image src={ConfirmIcon} alt="confirm-icon" />
        <h5 className="text-xl font-semibold">Kirim</h5>
        <QuizStaticTimer isFromLocalStorage={false} />
        <h5 className="text-xl">Kamu akan menyelesaikan quiz ini. Apakah kamu yakin?</h5>
      </section>
      <section className="w-full flex justify-between mt-5 px-6 py-5 text-base font-semibold">
        <Button
          onClick={onClose}
          type="button"
          className="w-[48%] border-2 border-primary-500 py-3 rounded-lg text-primary-500 hover:opacity-75"
        >
          Batal
        </Button>
        <Button
          type="button"
          onClick={onSubmit}
          className="w-[48%] bg-primary-500 py-3 rounded-lg text-white hover:opacity-75"
        >
          Yakin
        </Button>
      </section>
    </CustomPopup>
  );
};
