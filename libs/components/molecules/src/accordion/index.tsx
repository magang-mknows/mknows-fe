import { FC, ReactElement, useState } from 'react';
import accordionIcon from './assets/ic-accordion.svg';
import Image from 'next/image';
import { TAccordionProps } from './types';

export const Accordion: FC<TAccordionProps> = ({
  title,
  idAccordion,
  children,
  disabled,
  className,
}): ReactElement => {
  const [isOpen, setIsOpen] = useState('');
  return (
    <div data-accordion="collapse" data-testid="accordion" className="mb-8">
      <h2>
        <button
          onClick={() =>
            isOpen === '' ? setIsOpen(`${idAccordion}`) : setIsOpen('')
          }
          type="button"
          className={`flex items-center justify-between w-full p-4 font-medium text-left rounded-xl  bg-[#F5F5F5] ${className} `}
          disabled={disabled}
        >
          <div className="text-[16px] font-[500] text-[#262626]">{title}</div>
          <Image
            width={16}
            height={16}
            src={accordionIcon}
            alt={'accordion-image'}
          />
        </button>
      </h2>
      {isOpen === `${idAccordion}` ? (
        <div>
          <div className="p-6 text-[14px] font-[400 text-[#262626] dark:text-[#fff]">
            {children}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
