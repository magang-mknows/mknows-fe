/* eslint-disable react/jsx-no-useless-fragment */
import { FC, Fragment, ReactElement } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '@mknows-frontend-services/components/atoms';
import { TCustomPopupProps } from './types';

export const CustomPopup: FC<TCustomPopupProps> = ({
  children,
  lookup,
  withClose,
  modalStyle,
  childrenStyle,
  onClose,
  closeStyle,
}): ReactElement => {
  return (
    <Fragment>
      {lookup && (
        <div
          className="relative z-50 "
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 transition-opacity bg-opacity-25 bg-neutral-500 " />
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex place-content-center items-center w-full min-h-full p-4">
              <div
                className={`relative overflow-hidden transition-all transform rounded-lg shadow-xl text-center ${modalStyle}`}
              >
                {withClose && (
                  <Button
                    type="button"
                    onClick={onClose}
                    className={`p-2 ${closeStyle}`}
                  >
                    <AiOutlineClose
                      role="button"
                      className="text-2xl font-bold cursor-pointer text-neutral-400"
                    />
                  </Button>
                )}
                <div className={`flex flex-col items-center ${childrenStyle}`}>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
