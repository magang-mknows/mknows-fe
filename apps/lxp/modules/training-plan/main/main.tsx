import { FC, ReactElement } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { searchKeyword } from './store';
import { Card } from '@mknows-frontend-services/components/molecules';

export const TrainingPlanMain: FC = (): ReactElement => {
  const [getKeyword, setKeyword] = useRecoilState(searchKeyword);
  const departments = [
    {
      id: '597c9a4d-5db2-4686-a53f-2ece479123c2',
      name: 'turu',
      category: 'Study',
      point: 3,
      thumbnail:
        'https://res.cloudinary.com/dvsqy8n1a/image/upload/v1682825422/sub_thumbnail_e953b099-44a8-4f23-af8d-b9c05bd68b32.png',
      slug: 'turu',
    },
    {
      id: '34d125e2-c8e6-48d9-b552-1a4b4dac6773',
      name: 'How to be PDI',
      category: 'Study',
      point: 3,
      thumbnail:
        'https://res.cloudinary.com/dvsqy8n1a/image/upload/v1682948044/sub_thumbnail_bf1aa9bc-db2e-407f-bbd1-94f9073c817b.png',
      slug: 'how-to-be-pdi',
    },
    {
      id: '423b30ec-3b6d-4540-abd5-f8fb312cedd8',
      name: 'How to be Golkar',
      category: 'Study',
      point: 3,
      thumbnail:
        'https://res.cloudinary.com/dvsqy8n1a/image/upload/v1682957601/sub_thumbnail_93f86def-f2b9-48e6-b8c9-3cb937787a82.png',
      slug: 'how-to-be-golkar',
    },
  ];

  return (
    <main className="px-8 md:px-14 lg:px-16 ">
      <div className="w-full grid place-items-center mb-10">
        <div className="bg-neutral-100 h-[50px] mt-6 xl:w-[60%] lg:w-[70%] w-full md:w-[90%] rounded-md shadow-sm">
          <div className="flex bg-neutral-200/50 rounded-md items-center px-4 md:px-6 gap-4 h-full">
            <AiOutlineSearch className="text-neutral-400 text-xl" />
            <input
              value={getKeyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              type={'text'}
              className="bg-neutral-100 text-sm bg-neutral-200/0 text-neutral-700 w-full focus:outline-none"
              placeholder="Cari Mata Kuliah"
            />
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold text-neutral-900 mb-8">
        Pilihan Pelatihan
      </h1>
    </main>
  );
};
