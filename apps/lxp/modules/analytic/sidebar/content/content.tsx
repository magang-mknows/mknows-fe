import { FC, ReactElement } from 'react';
import { AiFillHome, AiOutlineOrderedList } from 'react-icons/ai';
import { BsFillBuildingFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { HiBuildingOffice } from 'react-icons/hi2';

export const SidebarContent: FC = (): ReactElement => {
  const dummyUserData = [
    {
      icon: <FaUserCircle />,
      title: 'Nama',
      value: 'Lori Stevens Lavigne',
    },
    {
      icon: <AiFillHome />,
      title: 'Batch',
      value: '5',
    },
    {
      icon: <HiBuildingOffice />,
      title: 'Topik Pelatihan',
      value: 'Keterampilan Interpersonal',
    },
    {
      icon: <AiOutlineOrderedList />,
      title: 'Jumlah Poin',
      value: '100 Poin',
    },
    {
      icon: <BsFillBuildingFill />,
      title: 'Kepala Bidang',
      value: 'Rendy S.kom, M.Kom',
    },
  ];

  return (
    <main className="px-8">
      {dummyUserData.map((item, index) => {
        return (
          <section
            key={index}
            className="text-sm flex items-center justify-between border-b-[0.5px] py-3 border-neutral-200"
          >
            <section className="flex items-center gap-3">
              <div className="bg-version3-500 p-2 rounded-md shadow-xs text-neutral-50 text-lg">
                {item.icon}
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
