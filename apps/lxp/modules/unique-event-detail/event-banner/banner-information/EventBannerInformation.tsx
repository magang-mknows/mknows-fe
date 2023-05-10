import { FC, ReactElement, Suspense } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { TCardContentProps } from '../../types';
import { EventRegModalState } from '../../../../modules/unique-event/store';
import { Button } from '@mknows-frontend-services/components/atoms';
import { Modal } from '@mknows-frontend-services/components/molecules';
import { RegisteredEventModal } from '../banner-registered/RegisteredEventModal';

export const EventBannerInformation: FC<TCardContentProps> = ({
  title,
  desc,
  list,
  subTitle,
}): ReactElement => {
  const [getModalState, setModalState] = useRecoilState(EventRegModalState);

  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold mb-7 text-neutral-900">{title}</h1>
      <div className="mb-7">
        <h1 className="mb-2 text-lg text-neutral-600">Benefit</h1>
        {list?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-x-1.5 items-center mb-2 text-sm text-neutral-800"
            >
              <BsCheckCircleFill className="text-lg text-primary-600" />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <h1 className="text-2xl font-bold text-version3-500 mb-7">{subTitle}</h1>
      <p className="text-sm text-neutral-600 mb-7">{desc}</p>
      <Button
        type="button"
        onClick={() => {
          setModalState(true);
        }}
      >
        Daftar Sekarang
      </Button>
      <Modal lookup={getModalState} onClose={() => setModalState(false)}>
        <Suspense>
          <RegisteredEventModal />
        </Suspense>
      </Modal>
    </div>
  );
};
