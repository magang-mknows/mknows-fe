import { FC, ReactElement } from 'react';
import { MdArrowDropDown, MdOutlineQuiz } from 'react-icons/md';
import {
  HiDocumentText,
  HiOutlineChatBubbleBottomCenterText,
} from 'react-icons/hi2';
import { RiTodoLine } from 'react-icons/ri';
import { Disclosure } from '@headlessui/react';
import { PanelSection } from './panel';

export const ContentSection: FC = (): ReactElement => {
  return (
    <div className="gap-[30px] min-h-[60vh] px-8 md:px-14 lg:px-16 mt-[25px]">
      <Disclosure as={'div'} className={'flex flex-col'}>
        <Disclosure.Button
          className={`px-[30px] py-[14px] flex justify-between items-center rounded-lg text-white cursor-pointer bg-[#053D38]`}
        >
          <p className="text-base text-neutral-50 font-medium">Pertemuan 1</p>

          <MdArrowDropDown className={`text-2xl text-neutral-50`} />
        </Disclosure.Button>
        <Disclosure.Panel className={'w-[98%] mx-auto bg-neutral-50'}>
          <PanelSection
            title="Modul"
            href="/pelatihanku/modul/test"
            icon={<HiDocumentText className="text-xl text-[#40A0C8]" />}
          />
          <PanelSection
            title="Quiz"
            href="/pelatihanku/kuis"
            icon={<MdOutlineQuiz className="text-xl text-[#FAB317]" />}
          />
          <PanelSection
            title="Tugas"
            href="/penugasan"
            icon={<RiTodoLine className="text-xl text-[#F4677F]" />}
          />
          <PanelSection
            title="Diskusi"
            href="/pelatihanku/diskusi"
            icon={
              <HiOutlineChatBubbleBottomCenterText className="text-xl text-[#3EB449]" />
            }
          />
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};
