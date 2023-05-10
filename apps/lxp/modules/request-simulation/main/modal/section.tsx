import { TDrillSimulationPopup } from '../../../drill-simulation/main/history/modal/types';
import Image from 'next/image';
import { FC, ReactElement } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const RequestSceduleSuccessModal: FC<TDrillSimulationPopup> = ({
  type,
  children,
  title,
}): ReactElement => {
  return (
    <section className="flex flex-col items-center py-10 max-w-[600px] px-6">
      <BsCheckCircleFill className="text-4xl text-[#3EB449]" />
      <figure className="h-[200px] rounded-md overflow-hidden mb-4  w-full">
        <Image
          src={`/assets/drill/${type}.svg`}
          alt="dummy-view"
          width={10}
          height={80}
          className="w-full h-60"
          loading="eager"
        />
      </figure>
      <h1 className="text-neutral-900 font-bold text-base">{title}</h1>
      {children}
    </section>
  );
};

export default RequestSceduleSuccessModal;
