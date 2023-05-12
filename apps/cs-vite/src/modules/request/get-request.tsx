import { ReactElement, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Button } from '@mknows-frontend-services/components/atoms';
import Card from '../../components/molecules/card';
import { IconBack } from '../../components/atoms/icons/ic-back';
import Search from '../../components/atoms/search';
import Pagination from '../../components/atoms/pagination';
import { IconWarning } from '../../components/atoms/icons/ic-warning';
import { IconErrorWarning } from '../../components/atoms/icons/ic-warning-error';

const GetRequest: FC = (): ReactElement => {
  const [isOpen, setisOpen] = useState(false);
  const handleChange = () => {
    console.log('ok');
  };
  return (
    <section>
      <div className="flex flex-row gap gap-x-6 items-center border-b w-full h-fit p-6 text-primary-400 font-bold text-base">
        <Link to={'/dashboard/request'}>
          <div className="flex gap-6">
            <div className="flex items-center">
              <IconBack />
            </div>
            <p className="hover:opacity-[50%]">Kembali</p>
          </div>
        </Link>
      </div>
      <div className="flex w-full py-12 justify-between">
        <div className="flex flex-row gap gap-x-2 px-12 items-center w-full">
          <IconWarning />
          <p className="text-xs md:text-sm font-normal text-neutral-500">
            Anda telah memilih fitur AI Character Scoring dan AI Capability
            Scoring
          </p>
        </div>
        <div className="w-[60%]">
          <Search value="" onChange={handleChange} />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="px-4">
          <Pagination />
        </div>
        <div>
          <Button
            type="button"
            onClick={() => setisOpen(true)}
            className="w-full px-14 h-10 bg-primary-400 text-white rounded-[4px] font-bold"
          >
            Proses
          </Button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setisOpen(false)}
        className="absolute lg:left-[45%] md:left-[30%] top-[40%] left-[20%]"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <Card className="hover:cursor-pointer w-full  h-fit shadow-2xl p-8 ">
              <div className="w-full flex flex-col gap gap-y-2">
                <div className="bg-error-100 rounded-full w-7 h-7 flex justify-center items-center">
                  <IconErrorWarning />
                </div>
                <p className="py-2 text-semibold text-[16px]">
                  Tidak Dapat Melanjutkan Proses Permintaan
                </p>
                <p className="flex flex-col gap-1 font-base text-xs text-neutral-400">
                  Maaf, saat ini anda tidak dapat melanjutkan proses
                  <span>
                    permintaan. Anda belum melengkapi data yang dibutuhkan.
                  </span>
                </p>
                <div className="flex flex-row w-full gap gap-4 py-4">
                  <Button
                    type="button"
                    className="w-full text-sm py-1 border border-error-base text-error-base rounded-md"
                    onClick={() => setisOpen(false)}
                  >
                    Kembali
                  </Button>
                  <Button
                    type="button"
                    className="w-full text-sm p-2 rounded-md bg-error-base text-white"
                  >
                    Lengkapi Data
                  </Button>
                </div>
              </div>
            </Card>
          </Dialog.Title>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
};

export default GetRequest;
