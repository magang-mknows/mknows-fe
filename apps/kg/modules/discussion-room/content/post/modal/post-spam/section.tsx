import { FC, ReactElement } from "react";
import { AiFillFlag } from "react-icons/ai";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { reportDetailTitle, reportSuccess, selectedOption, selectedPostId } from "../../../store";
import { Button } from "@mknows-frontend-services/components/atoms";

export const PostSpamModal: FC = (): ReactElement => {
  const getReportDetail = useRecoilValue(reportDetailTitle);
  const setReportSuccess = useSetRecoilState(reportSuccess);
  const setSeletedOption = useSetRecoilState(selectedOption);
  const getSeletedPostId = useRecoilValue(selectedPostId);

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 rounded-full bg-secondary-blue-100 flex items-center justify-center">
        <AiFillFlag className="text-blue-600 text-xl" />
      </div>
      <h1 className="text-base font-bold tracking-wide">
        Ini Adalah {getReportDetail} {getSeletedPostId}
      </h1>
      <div className="w-full flex flex-col items-end gap-4">
        <textarea
          name="spam-report"
          id="spam-report"
          cols={50}
          rows={5}
          placeholder="Ceritakan leibh detail disini!"
          className="border-[2px] px-2 py-1 text-sm w-full  outline-none text-neutral-600 border-neutral-300 rounded-md resize-none"
        />
        <Button
          type="button"
          className="disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 text-sm py-2 w-28 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
          onClick={() => {
            setSeletedOption("reportSuccess");
            setReportSuccess(true);
          }}
        >
          <h1>Lapor</h1>
        </Button>
      </div>
    </section>
  );
};
