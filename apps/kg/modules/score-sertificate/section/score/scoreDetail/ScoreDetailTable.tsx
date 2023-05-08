import { FC, ReactElement } from 'react';

const ScoreDetailTable: FC = (): ReactElement => {
  return (
    <div className="flex flex-col w-auto ">
      <div className=" overflow-x-scroll scrollbar-hide md:scrollbar-default">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-neutral-400 dark:divide-gray-700">
              <thead className="bg-primary-500">
                <tr className="divide-x divide-neutral-300 dark:divide-gray-700">
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    Kode Matkul
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    Mata Kuliah
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    SKS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    Huruf Mutu
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    Angka Mutu
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-medium text-white text-sm"
                  >
                    Angka Mutu
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-400 dark:divide-gray-700 text-center text-primary-600 font-bold">
                <tr>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                    1
                  </td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                    NPN99
                  </td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                    Introduction to Japanese Culture
                  </td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                    2
                  </td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                    A
                  </td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                    3.70
                  </td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                    Lulus
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                    1
                  </td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                    NPN99
                  </td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                    Introduction to Japanese Culture
                  </td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                    2
                  </td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                    A
                  </td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                    3.70
                  </td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                    Lulus
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                    1
                  </td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                    NPN99
                  </td>
                  <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                    Introduction to Japanese Culture
                  </td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                    2
                  </td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                    A
                  </td>
                  <td className="px-6 py-4  border-r whitespace-nowrap text-sm ">
                    3.70
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
  );
};
