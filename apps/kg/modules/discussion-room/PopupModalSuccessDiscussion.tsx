import { FC, ReactElement } from 'react';
import { PopupModalProps } from '../study-plan/components/types';
import { usePopupSuccessDiscussionStatus } from './hooks/usePopupSuccessDiscussionStatus';
import { Modal } from '@mknows-frontend-services/components/molecules';
import { Button } from '@mknows-frontend-services/components/atoms';

const PopupModalSuccessDiscussion: FC<PopupModalProps> = (): ReactElement => {
  const { setPopupSuccessStatus, getPopupSuccessStatus } =
    usePopupSuccessDiscussionStatus();

  return (
    <Modal
      lookup={getPopupSuccessStatus}
      onClose={() => setPopupSuccessStatus(!getPopupSuccessStatus)}
      hasButton={true}
      hasImage={false}
      withClose={true}
      widthModal={'!w-full md:!w-2/5'}
    >
      <form>
        <div className="flex flex-col justify-center w-full gap-4 text-center bg-white rounded-lg">
          <div className="grid gap-3 text-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3964_23660)">
                <path
                  opacity="0.2"
                  d="M40 20C40 31.045 31.045 40 20 40C8.955 40 0 31.045 0 20C0 8.955 8.955 0 20 0C31.045 0 40 8.955 40 20Z"
                  fill="#106FA4"
                />
                <path
                  d="M19.6667 3C10.4667 3 3 10.4667 3 19.6667C3 28.8667 10.4667 36.3333 19.6667 36.3333C28.8667 36.3333 36.3333 28.8667 36.3333 19.6667C36.3333 10.4667 28.8667 3 19.6667 3ZM16.3333 28L8 19.6667L10.35 17.3167L16.3333 23.2833L28.9833 10.6333L31.3333 13L16.3333 28Z"
                  fill="#3EB449"
                />
              </g>
              <defs>
                <clipPath id="clip0_3964_23660">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <section className="flex flex-col gap-4">
            <h1 className="text-[20px] font-semibold">
              Terimakasih telah memberi tahu kami
            </h1>
            <p>
              Masukan dari Anda sangat penting untuk membantu kami menjaga
              komunitas Kampus Gratis agar tetap aman.
            </p>
          </section>
          <div className="flex justify-end">
            <Button className="!w-full" color="blue" type={'button'}>
              Tutup
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default PopupModalSuccessDiscussion;
