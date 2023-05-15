import { ReactElement } from 'react';
import { useGuideDictionary } from './hook';
import { Card } from '@mknows-frontend-services/components/molecules';

export const Sidebar = (): ReactElement => {
  const { getGuideDictionary } = useGuideDictionary();
  return (
    <div className="px-6 md:px-8 lg:px-16 mb-10">
      <h1 className=" text-[20px] font-[700] mb-2">Kamus Populer</h1>
      <div className="grid grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-2 lg:gap-0 md:gap-4">
        {getGuideDictionary.map((dummy, i) => {
          return (
            <Card
              key={i}
              href={`/panduan/kamus-kampus-gratis/${dummy.slug}`}
              hasImage={false}
              title={dummy.title}
              titleStyle="font-bold text-[16px]"
              className="bg-[#F5F5F5] dark:bg-[#232529] rounded-lg max-w-xs my-2 min-h-max "
            >
              <p className="text-[12px] font-normal line-clamp-3 ">
                {dummy.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
