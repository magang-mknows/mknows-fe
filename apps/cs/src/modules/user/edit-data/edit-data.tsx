import { ReactElement, FC } from "react";
import { Link } from "react-router-dom";
import AiIdentityScoring from "./ai-identity-scoring";
import AiCharacterScoring from "./ai-character-scoring";
import AiCapabilityScoring from "./ai-capability-scoring";
import { IconBack } from "../../../components/atoms";

const EditData: FC = (): ReactElement => {
  return (
    <div className="my-8 space-y-4 w-full h-full">
      <div className="bg-white w-full h-full px-8 flex flex-col">
        <div className="flex flex-row gap gap-x-6 items-center border-b w-full h-fit p-6 text-primary-400 font-bold text-base">
          <div>
            <Link to={"/dashboard/user"}>
              <IconBack />
            </Link>
          </div>
          <Link to={"/dashboard/user"}>
            <div className="hover:opacity-[50%]">Kembali</div>
          </Link>
        </div>
        <div className="w-full h-fit flex justify-center items-center my-14 font-bold text-2xl">
          Ai Automation
        </div>
        <div className="w-full h-fit">
          <AiIdentityScoring />
          <AiCharacterScoring />
          <AiCapabilityScoring />
        </div>
      </div>
    </div>
  );
};

export default EditData;
