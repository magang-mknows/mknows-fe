import React from 'react';
import { useGetTakenDepartments } from './hook';
import { CardLoading } from '../main/loading';
import { Card } from '@mknows-frontend-services/components/molecules';

export const TakenDepartment = () => {
  const { data, isLoading } = useGetTakenDepartments();

  const takenDepartment = data?.data.Department;

  return (
    <main className="px-8 md:px-14 lg:px-16 pb-20 pt-6">
      <h1 className="text-xl font-bold text-neutral-900 mb-8">
        Department Pilhan Anda
      </h1>

      <section className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          <CardLoading />
        ) : (
          <Card
            href={`/rencana-pelatihan/informasi-pelatihan/${takenDepartment?.id}`}
            hasImage
            src={takenDepartment?.thumbnail}
            imgheight={200}
            imgwidth={300}
            imgStyle="w-full h-64 rounded-md overflow-hidden"
            className="bg-neutral-50   w-full rounded-md overflow-hidden hover:shadow-lg transition-all ease-in-out duration-150 shadow-sm"
          >
            <section>
              <header className="w-full flex gap-2 py-4">
                <h1 className="w-fit text-sm flex items-center justify-center px-3 py-1 rounded-md shadow-sm bg-[#E3FBDA] text-[#3EB449]">
                  {takenDepartment?.category}
                </h1>
                <h1 className="w-fit text-sm flex items-center justify-center px-3 py-1 rounded-md shadow-sm bg-[#FEDBD7] text-[#ED3768]">
                  {takenDepartment?.point} Poin
                </h1>
              </header>
              <main>
                <h1 className="text-[#003A63] text-lg font-bold">
                  {takenDepartment?.name}
                </h1>
              </main>
            </section>
          </Card>
        )}
      </section>
    </main>
  );
};
