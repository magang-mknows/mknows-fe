import { FC, ReactElement, Fragment } from "react";
import Link from "next/link";
import { TBreadCrumbProps } from "./types";
import { MdChevronRight } from "react-icons/md";

export const BreadCrumb: FC<TBreadCrumbProps> = ({
  items,
  textColor = "text-[#106FA4]",
  bgColor = "bg-light",
}): ReactElement => {
  return (
    <div
      className={`grid place-content-start w-full px-8 md:px-14 lg:px-16 py-4 !font-extrabold text-xs md:text-sm ${bgColor}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex w-full items-center gap-x-2">
        {items.map((crumb, index) => {
          const isLastItem = index === items.length - 1;
          if (!isLastItem) {
            return (
              <Fragment key={index}>
                <Link
                  href={crumb.link}
                  key={index}
                  className={`inline-flex  font-[600] items-center ${textColor}`}
                >
                  {crumb.name}
                </Link>
                <MdChevronRight className={`text-xl ${textColor}`} />
              </Fragment>
            );
          } else {
            return (
              <Link key={index} href={crumb.link}>
                <span className="text-neutral-500 font-[600] cursor-pointer">{crumb.name}</span>
              </Link>
            );
          }
        })}
      </ol>
    </div>
  );
};
