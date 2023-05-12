import { FC, Fragment, ReactElement } from 'react';
import Image from 'next/image';

import { AiFillLike } from 'react-icons/ai';
import { GoCommentDiscussion } from 'react-icons/go';
import { TDiscussinCardProps } from './types';

const DiscussionCard: FC<TDiscussinCardProps> = ({
  hasImage,
  text,
  imgSource,
  userName,
  title,
  time,
  type,
  countLikes,
  children,
  option,
}): ReactElement => {
  return (
    <Fragment>
      <div
        className={`${
          type === 'post' ? 'bg-neutral-50' : 'bg-neutral-100'
        } px-5 md:px-8 lg:px-10 py-5 mb-6  border-neutral-100 border-2 rounded-md shadow-sm`}
      >
        <div className="relative flex justify-between">
          <section className="flex items-center gap-4 mb-6 border-neutral-100/60">
            <Image
              src={
                'https://res.cloudinary.com/dvsqy8n1a/image/upload/v1683630203/sub_thumbnail_c63ea956-d2ae-48bb-851b-64c4ad74e580.png'
              }
              height={32}
              width={32}
              alt="userIcon"
            />
            <div className="flex flex-col">
              <h1 className="text-xs font-bold text-neutral-800 md:text-sm">
                {userName}
              </h1>
              <p className="text-xs text-neutral-400">{time}</p>
            </div>
          </section>
          {option}
        </div>
        <section className="text-sm text-neutral-900">
          {hasImage && (
            <Image
              src={imgSource as unknown as string}
              alt={`imageby${userName}`}
              className="w-40"
              width={100}
              height={100}
            />
          )}
          <h1 className="mb-3 text-sm font-bold md:text-base">{title}</h1>
          <p className="pr-0 mb-6 text-xs text-neutral-700 md:text-sm md:pr-4 lg:pr-20 md:mb-8 lg:mb-10">
            {text}
          </p>

          <div className="flex items-center gap-6">
            <section className="flex items-center gap-2 text-[#106FA4] ">
              <AiFillLike />
              <h1 className="text-xs md:text-sm ">{countLikes} Disukai</h1>
            </section>
            <section className="flex items-center gap-2 text-[#106FA4] ">
              <GoCommentDiscussion />
              <h1 className="text-xs md:text-sm">Balas</h1>
            </section>
          </div>
        </section>
      </div>
      {/* {type == "post" && (
        <section className="relative my-5 w-fit">
          <Image
            src={"/assets/dashboard/dummyCourse.png"}
            width={100}
            height={100}
            alt="dummy-view"
            className="w-36"
          />
          <AiFillCloseCircle className="absolute top-0 text-2xl text-neutral-300 md:text-3xl -right-8" />
          <div className="bg-neutral-300 h-3 w-[200%] my-3 rounded-md shadow-sm">
            <span className="h-full w-[65%] bg-[#3EB449] dark:bg-[#17A2B8] block"></span>
          </div>
        </section>
      )} */}
      {/* <DiscussionComment /> */}
      {children}
    </Fragment>
  );
};

export default DiscussionCard;
