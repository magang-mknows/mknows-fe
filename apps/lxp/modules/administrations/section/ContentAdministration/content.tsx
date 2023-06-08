import { ReactElement } from "react";
import PrivateInformationAccordion from "../../common/PrivatInformationAccordion";

export const ContentAdministration = (): ReactElement => {
  return (
    <div className="mt-[32px] ">
      <div className="flex justify-center">
        <div className={"bg-[#FFFF] rounded-[8px] w-full"}>
          <div className="w-full relative">
            <PrivateInformationAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};
