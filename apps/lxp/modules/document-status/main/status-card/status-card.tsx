import { FC, ReactElement } from 'react';
import {
  AiFillCheckCircle,
  AiFillClockCircle,
  AiOutlineCloudDownload,
} from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';
import { TDocumentStatusProps } from './types';

export const DocumentStatusCard: FC<TDocumentStatusProps> = ({
  title,
  status,
  description,
}): ReactElement => {
  return (
    <div
      className={`${
        status === 'accepted'
          ? 'border-[#3EB449]'
          : status === 'rejected'
          ? 'border-warning-400'
          : 'border-blue-600'
      } rounded-md mb-6 w-full border-l-8 flex-wrap py-4  shadow-md flex justify-between min-h-[110px] items-center px-4 md:px-6 lg:px-8`}
    >
      <section>
        <h1 className="text-lg font-bold mb-1">{title}</h1>
        {status === 'rejected' && (
          <p className="text-sm text-warning-500">{description}</p>
        )}
      </section>

      {status == 'rejected' && (
        <section className="flex w-20 md:justify-center md:items-center">
          <FaTimesCircle className="text-2xl text-warning-400" />
        </section>
      )}
      {status == 'processed' && (
        <section className="flex flex-row md:flex-col w-20 gap-2  justify-start md:justify-center items-start md:items-center flex-wrap">
          <AiFillClockCircle className="text-2xl text-secondary-blue-500 flex-shrink-0" />
          <div className="flex flex-col md:items-center">
            <h1 className="font-bold text-secondary-blue-600 text-sm">
              Estimasi
            </h1>
            <p className="text-xs">{description}</p>
          </div>
        </section>
      )}
      {status == 'accepted' && (
        <section className="flex gap-2 w-20 md:justify-center md:items-center flex-wrap">
          <AiOutlineCloudDownload className="text-2xl text-blue-500" />
          <AiFillCheckCircle className="text-2xl text-[#3EB449]" />
        </section>
      )}
    </div>
  );
};
