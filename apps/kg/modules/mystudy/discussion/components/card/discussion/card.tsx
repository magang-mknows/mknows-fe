import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { cardAuthor } from '../type';
import { LikeComment } from '../../like-comment';

import circle from '../../../assets/circle.svg';
import send from '../../../assets/send.svg';
import file from '../../../assets/file.svg';

export const CardDiscussion: FC<cardAuthor> = ({
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
        className={`card px-10 py-8 bg-white rounded-[8px] mb-4 ${styleCard}`}
      >
        <div className="profile flex flex-row gap-5 items-center">
          <Image src={avatar} alt={'img-profile'} />
          <div className="">
            <h1 className="text-[##171717] font-[600] text-[14px]">{title}</h1>
            <p className="font-[400] text-[12px] text-[#171717] flex flex-row gap-1">
              oleh{' '}
              <span className="text-[#2D9A41]">
                {author} <span>({role})</span>
              </span>
              <Image src={circle} alt={'circle'} />
              <span className="text-[#737373]">{time}</span>
            </p>
          </div>
        </div>

        <p className="desc mt-8 text-[#171717] text-[14px] font-[400]">
          {content}
        </p>
        <LikeComment />

        <div className="comment rounded-[8px] mt-4 px-3 flex justify-end gap-x-6 h-[44px]">
          <input
            type="text"
            className="w-full px-3 outline-none text-[14px] font-[400] focus:outline-primary-400 rounded-lg"
            placeholder="Ketikan Balasan disini"
          />

          <div className="flex flex-row gap-4">
            <Image src={file} alt={'file'} />
            <Image src={send} alt={'send'} />
          </div>
        </div>
      </div>
    </>
  );
};
