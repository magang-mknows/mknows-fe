import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { IconBack, IconWarning } from '../../../../components/atoms';
import Search from '../../../../components/atoms/search';
import Table from './table';
import { Button } from '@mknows-frontend-services/components/atoms';
import Pagination from '../../../../components/atoms/pagination';

const ChoiceFeature: FC = (): ReactElement => {
  return (
    <div className="w-auto h-full bg-white px-8 my-4 rounde-md">
      <div className="flex flex-row gap gap-x-6 items-center border-b w-full h-fit p-6 text-primary-400 font-bold text-base">
        <Link to={'/dashboard/request'}>
          <div className="flex gap-3 items-center">
            <div>
              <IconBack />
            </div>
            <div className="hover:opacity-[50%]">Kembali</div>
          </div>
        </Link>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-row gap gap-x-2 py-8 px-8 items-center w-full">
          <IconWarning />
          <p className="text-xs md:text-sm font-normal text-neutral-500">
            Anda telah memilih fitur AI Character Scoring dan AI Capability
            Scoring
          </p>
        </div>
        <div className="py-8 w-[50%] px-4">
          <Search
            value={''}
            onChange={(e: { target: { value: string } }) => console.log('ok')}
            placeholder={'Search NIK, Nama'}
          />
        </div>
      </div>
      <div className="py-4">
        <Table />
      </div>
      <Pagination />
      <div className="flex w-full justify-end">
        <Button
          type="button"
          className="w-auto px-16 h-10 bg-primary-400 text-white rounded-[4px] font-bold"
        >
          Proses
        </Button>
      </div>
    </div>
  );
};

export default ChoiceFeature;
