import { FC, ReactElement } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useSetRecoilState } from "recoil";
import { isModalOpen } from "../../../store";
import { Button } from "@mknows-frontend-services/components/atoms";

const ReportSuccessModal: FC = (): ReactElement => {
  const setOptionOpen = useSetRecoilState(isModalOpen);

  return (
    <section className="flex flex-col items-center justify-center px-10 py-6">
      <div className="h-10 w-10 rounded-full grid place-items-center relative">
        <BsCheckCircleFill className="text-[#3EB449] text-4xl z-20" />
        <span className="h-10 w-10 right-0 left-0 block bg-blue-100 rounded-full absolute z-10"></span>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center py-2 w-[490px]">
        <h1 className="font-bold text-lg text-neutral-800">Terimakasih telah memberi tahu kami</h1>
        <p className="w-full text-center text-sm ">
          Masukan dari Anda sangat penting untuk membantu kami menjaga komunitas LMS M-Knows agar
          tetap aman.
        </p>

        <Button
          type="button"
          className="py-2.5 disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 w-full text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
          onClick={() => {
            setOptionOpen(false);
          }}
        >
          <h1>Tutup</h1>
        </Button>
      </div>
    </section>
  );
};

export default ReportSuccessModal;
