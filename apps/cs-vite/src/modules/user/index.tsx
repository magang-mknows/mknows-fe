import { FC, ReactElement } from 'react';
import Table from './table';
import { Link } from 'react-router-dom';
import { useUserQuery } from './hooks';
import { DateInput } from '../../components/molecules/input/date-input';
import Search from '../../components/atoms/search';
import Pagination from '../../components/atoms/pagination';

const UserModules: FC = (): ReactElement => {
  const { setUserQuery, getUserQuery } = useUserQuery();

  return (
    <div className="bg-white w-full h-full my-8">
      <div className="flex flex-col lg:flex-row lg:gap-y-2 gap-y-8 justify-between lg:p-8 p-2 pt-12">
        <DateInput />

        <div className="flex md:flex-row flex-row-reverse gap-2">
          <Search
            value={getUserQuery}
            onChange={(e: { target: { value: string } }) =>
              setUserQuery(e.target.value)
            }
          />
          <Link to={'/dashboard/user/add-data'}>
            <button className="border bg-white text-primary-500 font-semibold md:w-[200px] w-[140px] border-primary-400 rounded-md p-2">
              + Tambah Data
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="lg:p-8 p-2">
          <Table />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default UserModules;
