import { FC, ReactElement } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { searchKeyword } from './store';
import { Card } from '@mknows-frontend-services/components/molecules';
import { useGetAllDepartments } from './hook';
import { CardLoading } from './loading';
import { FeaturesNotFound } from '../../common/not-found';

export const TrainingPlanMain: FC = (): ReactElement => {
  const [getKeyword, setKeyword] = useRecoilState(searchKeyword);

  const { data: departmentsList, isLoading } = useGetAllDepartments(getKeyword);

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
      <section className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          <CardLoading />
        ) : departmentsList?.data?.length === 0 ? (
          <FeaturesNotFound keyword={getKeyword} title="Pelatihan" />
        ) : (
          departmentsList?.data?.map((department, index) => {
            return (
              <Card
                key={index}
                href={`/rencana-pelatihan/informasi-pelatihan/${department?.id}`}
                hasImage
                src={department?.thumbnail}
                imgheight={200}
                imgwidth={300}
                imgStyle="w-full h-64 rounded-md overflow-hidden"
                className="bg-neutral-50   w-full rounded-md overflow-hidden hover:shadow-lg transition-all ease-in-out duration-150 shadow-sm"
              >
                <section>
                  <header className="w-full flex gap-2 py-4">
                    <h1 className="w-fit text-sm flex items-center justify-center px-3 py-1 rounded-md shadow-sm bg-[#E3FBDA] text-[#3EB449]">
                      {department.category}
                    </h1>
                    <h1 className="w-fit text-sm flex items-center justify-center px-3 py-1 rounded-md shadow-sm bg-[#FEDBD7] text-[#ED3768]">
                      {department.point} Poin
                    </h1>
                  </header>
                  <main>
                    <h1 className="text-[#003A63] text-lg font-bold">
                      {department.name}
                    </h1>
                  </main>
                </section>
              </Card>
            );
          })
        )}
      </section>
    </main>
  );
};
