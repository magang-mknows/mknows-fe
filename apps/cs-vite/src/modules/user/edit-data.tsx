import { ReactElement, FC } from 'react';
import { Link } from 'react-router-dom';
import AiIdentityScoring from './ai-identity-scoring';
import AiCharacterScoring from './ai-character-scoring';
import AiCapabilityScoring from './ai-capability-scoring';

const EditData: FC = (): ReactElement => {
  return (
    <div className="my-8 space-y-4 w-full h-full">
      {/* content */}
      <div className="bg-white w-full h-full px-8 flex flex-col">
        <div className="flex flex-row gap gap-x-6 items-center border-b w-full h-fit p-6 text-primary-400 font-bold text-base">
          <div>
            <Link to={'/dashboard/user'}>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.000156403 6L6.00016 0L7.41016 1.41Z"
                  fill="#A3A3A3"
                />
              </svg>
            </Link>
          </div>
          <Link to={'/dashboard/user'}>
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
