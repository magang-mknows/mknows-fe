import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { BsSendFill } from 'react-icons/bs';
import { MdOutlineAttachFile } from 'react-icons/md';
import { cardAuthor } from '../type';
import { LikeComment } from './likeComment';

export const CardAuthor: FC<cardAuthor> = ({
  title,
  avatar,
  time,
  content,
  author,
  role,
  styleCard,
}): ReactElement => {
  return (
    <>
      <div
        className={`card px-10 py-8 bg-[#FFFF]  rounded-[8px] mb-4 dark:bg-[#1B1E21]  ${styleCard}`}
      >
        <div className="profile flex flex-row gap-5 items-center">
          <Image src={avatar} alt={'img-profile'} />
          <div className="">
            <h1 className="text-[##171717] font-[600] text-[14px]">{title}</h1>
            <p className="font-[400] text-[12px] text-[#171717] flex flex-row gap-1 dark:text-white/80">
              oleh{' '}
              <span className="text-[#2D9A41] dark:text-yellow-500">
                {author} <span>({role})</span>
              </span>
              <Image
                src={'/assets/pelatihanku/circle.svg'}
                className="w-auto"
                width={100}
                height={100}
                alt={'circle'}
              />
              <span className="text-[#737373]">{time}</span>
            </p>
          </div>
        </div>

        <p className="desc mt-8 text-[#171717] text-[14px] font-[400] dark:text-white/80">
          {content}
        </p>
        <LikeComment />

        <div className="comment  border rounded-[8px] mt-4 px-3 flex justify-end h-[44px] dark:bg-[#222529]">
          <input
            type="text"
            className="w-full px-3 outline-none text-[14px] font-[400] dark:bg-[#222529]"
            placeholder="Ketikan Balasan disini"
          />

          <div className="flex flex-row gap-4 items-center">
            <MdOutlineAttachFile className="w-[30px] h-[30px]" />
            <BsSendFill className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
};
