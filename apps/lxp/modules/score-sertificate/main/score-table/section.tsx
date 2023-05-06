import { FC, ReactElement } from 'react';

export const ScoreTable: FC = (): ReactElement => {
  return (
    <div className="mb-10 lg:px-10 py-2">
      <div className="flex flex-col w-auto ">
        <div className=" overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
              <table className="min-w-full divide-y divide-neutral-400 dark:divide-gray-700">
                <thead className="bg-version2-400">
                  <tr className="divide-x divide-neutral-500 dark:divide-gray-700">
                    <th
                      scope="col"
                      className="px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                    >
                      No
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                    >
                      Mata Pelatihan
                    </th>
                    <th
                      scope="col"
                      className=" col-span-2 px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                    >
                      Poin
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                    >
                      Predikat
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                    >
                      Nilai
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center font-medium text-neutral-50 text-sm"
                    >
                      Keterangan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-400 dark:divide-gray-700 text-center text-neutral-800 font-bold">
                  <tr>
                    <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                      1
                    </td>
                    <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                      Introduction to Japanese Culture
                    </td>
                    <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                      2
                    </td>
                    <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                      A
                    </td>
                    <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                      10
                    </td>
                    <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                      Lulus
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                      2
                    </td>
                    <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                      Introduction to Japanese Culture
                    </td>
                    <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                      2
                    </td>
                    <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                      A
                    </td>
                    <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                      10
                    </td>
                    <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                      Lulus
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
