import { FC, ReactElement } from 'react';
import Card from '../../components/molecules/card';
import { Button } from '@mknows-frontend-services/components/atoms';
import { useRequestData } from './hooks';
import { Link } from 'react-router-dom';
import { IconWarning } from '../../components/atoms';

const PermintaanPage: FC = (): ReactElement => {
  const { getRequestData } = useRequestData();

  return (
    <section>
      <div className="flex flex-row gap gap-x-2 py-2 items-center w-full">
        <IconWarning />
        <p className="text-xs md:text-sm font-normal text-neutral-500">
          Anda dapat memilih satu atau lebih fitur
        </p>
      </div>
      <div className="grid lg:gap-5 md:gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 my-3 w-full">
        {getRequestData.map((item, index) => {
          return (
            <Card
              className="hover:cursor-pointer w-full xl:h-[107px] lg:h-[107px] relative shadow-md hover:shadow-xl py-8 px-4"
              key={index}
            >
              <div className="flex flex-row w-full h-full space-x-[10px]">
                <div>
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-16 hidden md:flex"
                  />
                </div>

                <div className="flex-col w-full space-y-1">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-neutral-400 font-normal text-xs">
                    Data Masuk {item.totalData}
                  </p>
                </div>
                <div className="text-center text-sm right-2 top-2 absolute rounded-[40px] w-[22px] h-[22px] bg-neutral-200">
                  {item.totalNotifikasi}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <Link to="/dashboard/get-request">
        <div className="flex justify-center w-full my-4 pt-4">
          <Button
            type="button"
            className="w-1/3 h-10 bg-primary-400 text-white rounded-[4px] font-bold"
          >
            Cek Hasil
          </Button>
        </div>
      </Link>
    </section>
  );
};

export default PermintaanPage;
