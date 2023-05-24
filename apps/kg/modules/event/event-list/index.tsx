import { FC, Fragment, ReactElement } from 'react';

import ImageEventList from '../assets/event-list.svg';
import { CardList } from '../common/card-list';
import { Pagination } from '../common/pagination';
import { SearchBar } from '../common/search-bar';
import { SideBar } from '../common/side-bar';
import { useGetEvent } from './hooks';
import { StaticImageData } from 'next/image';

export const EventList: FC = (): ReactElement => {
  const { data } = useGetEvent();
  const eventListData = data?.data;

  return (
    <Fragment>
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row">
        <div className="flex justify-center lg:justify-start lg:basis-1/3">
          <SideBar active="EventList" />
        </div>
        <div className="w-full lg:basis-2/3">
          <SearchBar />
          <div className="grid w-full grid-flow-row gap-4 lg:gap-16 lg:grid-cols-2">
            {eventListData
              ?.map((item, index) => (
                <CardList
                  key={index}
                  slug={item.id}
                  title={item.name}
                  image={item.thumbnail as unknown as StaticImageData}
                  price={'GRATIS'}
                  day={item.date_start}
                  date={item.date_start}
                />
              ))
              .slice(0, 4)}
          </div>
          <Pagination />
        </div>
      </div>
    </Fragment>
  );
};
