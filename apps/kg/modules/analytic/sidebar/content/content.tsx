import { FC, ReactElement } from 'react';
import Image from 'next/image';
import NameIcon from '../../assets/Name.svg';
import Building1Icon from '../../assets/building-1.svg';
import Building2Icon from '../../assets/building-2.svg';
import ListBulletsIcon from '../../assets/list-bullets.svg';
import HomeIcon from '../../assets/home.svg';

const dummyUserData = [
  {
    icon: NameIcon,
    title: 'Nama',
    value: 'Lori Stevens Lavigne',
  },
  {
    icon: HomeIcon,
    title: 'Batch',
    value: '5',
  },
  {
    icon: Building1Icon,
    title: 'Topik Pelatihan',
    value: 'Keterampilan Interpersonal',
  },
  {
    icon: ListBulletsIcon,
    title: 'Jumlah Poin',
    value: '100 Poin',
  },
  {
    icon: Building2Icon,
    title: 'Kepala Bidang',
    value: 'Rendy S.kom, M.Kom',
  },
];

export const SidebarContent: FC = (): ReactElement => {
  return (
    <main className="px-8">
      {dummyUserData.map((item, index) => {
        return (
          <section
            key={index}
            className="text-sm flex items-center justify-between border-b-[0.5px] py-3 border-neutral-200"
          >
            <section className="flex items-center gap-3">
              <div className="bg-version3-500 p-2 rounded-md shadow-xs text-neutral-50 bg-[#3EB449] text-lg">
                <Image src={item.icon} alt="" />
              </div>
              <h1 className="text-neutral-700">{item.title}</h1>
            </section>
            <h1 className="text-neutral-900 font-bold  text-end">
              {item.value}
            </h1>
          </section>
        );
      })}
    </main>
  );
};
