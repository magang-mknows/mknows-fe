import { FC, ReactElement, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AccordionCourseProps } from './type';
import { MdArrowDropDown } from 'react-icons/md';

import imgModuleIcon from '../assets/module-icon.svg';
import imgQuizIcon from '../assets/quiz-icon.svg';
import imgAssignmentIcon from '../assets/assignment-icon.svg';
import imgDiscussionIcon from '../assets/discussion-icon.svg';
import imgDoneIcon from '../assets/done-icon.svg';
import imgLockIcon from '../assets/lock-icon.svg';

export const SessionSection: FC<AccordionCourseProps> = ({
  conference,
  index,
  key,
}): ReactElement => {
  const [isOpen, setIsOpen] = useState('');
  return (
    <div key={key} className="flex flex-col">
      <button
        onClick={() =>
          isOpen == '' ? setIsOpen(`Accordion-${index}`) : setIsOpen('')
        }
        disabled={!conference.isOpen}
        className={`px-[30px] py-[14px] flex justify-between items-center rounded-lg text-white cursor-pointer ${
          conference.isOpen
            ? 'bg-primary-500 hover:opacity-80'
            : 'bg-neutral-500 cursor-auto'
        }`}
      >
        <p className="text-lg font-medium">Pertemuan {(index as number) + 1}</p>
        {conference.isOpen ? (
          <MdArrowDropDown
            className={`text-3xl relative ${isOpen ? 'rotate-180' : ''}`}
          />
        ) : (
          <Image
            src={imgLockIcon}
            alt=""
            className={`relative ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {/* CONTENT */}
      {isOpen === `Accordion-${index}` ? (
        <div className="w-[94%] mx-auto">
          <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
            <div className="flex gap-x-6">
              <Image src={imgModuleIcon} alt="" />
              <Link
                href="/studi-ku/course/modul"
                className="text-base text-neutral-800 hover:underline"
              >
                Modul
              </Link>
            </div>
            <div className="">
              {conference.status.module === 'Done' && (
                <Image src={imgDoneIcon} alt="" />
              )}
            </div>
          </div>
          <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
            <div className="flex gap-x-6">
              <Image src={imgQuizIcon} alt="" />
              <Link
                href="/studi-ku/course/quiz"
                className="text-base text-neutral-800 hover:underline"
              >
                Quiz
              </Link>
            </div>
            <div className="">
              {conference.status.quiz === 'Done' && (
                <Image src={imgDoneIcon} alt="" />
              )}
            </div>
          </div>
          <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
            <div className="flex gap-x-6">
              <Image src={imgAssignmentIcon} alt="" />
              <Link
                href="/studi-ku/course/penugasan-test"
                className="text-base text-neutral-800 hover:underline"
              >
                Tugas
              </Link>
            </div>
            <div className="">
              {conference.status.assignment === 'Done' && (
                <Image src={imgDoneIcon} alt="" />
              )}
            </div>
          </div>
          <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
            <div className="flex gap-x-6">
              <Image src={imgDiscussionIcon} alt="" />
              <Link
                href="/studi-ku/course/diskusi"
                className="text-base text-neutral-800 hover:underline"
              >
                Diskusi
              </Link>
            </div>
            <div className="">
              {conference.status.disscussion === 'Done' && (
                <Image src={imgDoneIcon} alt="" />
              )}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
