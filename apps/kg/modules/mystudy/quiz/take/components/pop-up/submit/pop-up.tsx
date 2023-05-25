import { FC, Fragment, ReactElement } from 'react';
import { useQuizSubmitPopup } from './hooks';
import ConfirmIcon from '../../../../assets/confirm.svg';
import { Button } from '@mknows-frontend-services/components/atoms';
import { CustomPopup } from '../custom';
import Image from 'next/image';

export const QuizSubmitPopup: FC = (): ReactElement => {
  const { getQuizSubmitPopupStatus, setQuizSubmitPopupStatus } =
    useQuizSubmitPopup();

  function onClose() {
    setQuizSubmitPopupStatus(false);
  }

  return (
    <CustomPopup
      lookup={getQuizSubmitPopupStatus}
      modalStyle="w-[800px] h-fit bg-white px-6 py-5"
    >
      <section className="flex flex-col items-center gap-y-5">
        <Image src={ConfirmIcon} alt="confirm-icon" />
        <h5 className="text-xl font-semibold">Kirim</h5>
        <span className="bg-[#FEDBD7] w-[218px] h-12" />
        <h5 className="text-xl">
          Kamu akan menyelesaikan quiz ini. Apakah kamu yakin?
        </h5>
      </section>
      <section className="w-full flex justify-between mt-5 px-6 py-5 text-base font-semibold">
        <Button
          onClick={onClose}
          type="button"
          className="w-[48%] border-2 border-[#106FA4] py-3 rounded-lg text-[#106FA4] hover:opacity-75"
        >
          Batal
        </Button>
        <Button
          type="button"
          className="w-[48%] bg-[#106FA4] py-3 rounded-lg text-white hover:opacity-75"
        >
          Yakin
        </Button>
      </section>
    </CustomPopup>
  );
};
