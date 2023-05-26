import { ReactElement } from "react";
import { Stepper } from "../common";
import { Card } from "../components";
import { FileInformation } from "../file-information";
import { JobsInformation } from "../jobs-information";
import { PrivateInformation } from "../private-information";

export const ContentAdministration = (): ReactElement => {
  return (
    <section className="mt-[40px] lg:px-[70px] md:px-[60px] px-[20px] flex flex-col">
      <div className="flex justify-center">
        <Card hasImage={false} className={"bg-white rounded-[8px] md:w-[95%] w-full"}>
          <div className="w-full relative">
            <Stepper />
            <PrivateInformation />
            <JobsInformation />
            <FileInformation />
          </div>
        </Card>
      </div>
    </section>
  );
};
