import { FC, ReactElement, Fragment } from 'react';
import Link from 'next/link';
import { TBreadCrumbProps } from './types';
import { MdChevronRight } from 'react-icons/md';

export const BreadCrumb: FC<TBreadCrumbProps> = ({ items }): ReactElement => {
  return (
    <div
      className="grid place-content-start w-full px-6 md:px-8 lg:px-10 my-4 mt-5 text-[#737373] font-[600] lg:text-[14px] md:text-[12px] text-[10px]"
      aria-label="Breadcrumb"
    >
      <ol className="flex w-full items-center gap-x-4">
        {items.map((crumb, index) => {
          const isLastItem = index === items.length - 1;
          if (!isLastItem) {
            return (
              <Fragment key={index}>
                <Link
                  href={crumb.link}
                  key={index}
                  className="inline-flex items-center text-[#106FA4] dark:text-[#17A2B8] font-[600] lg:text-[14px] md:text-[12px] text-[10px] dark:hover:text-white"
                >
                  {crumb.name}
                </Link>
                <MdChevronRight />
              </Fragment>
            );
          } else {
            return crumb.name;
          }
        })}
      </ol>
    </div>
  );
};
