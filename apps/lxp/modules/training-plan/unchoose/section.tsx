import { FC, ReactElement } from 'react';
import { UnChoosenIcon } from './asset';
import { Button } from '@mknows-frontend-services/components/atoms';
import { useSetRecoilState } from 'recoil';
import { seeDepartment } from '../store';

export const UnChoosenSection: FC = (): ReactElement => {
  const setSeeDeptList = useSetRecoilState(seeDepartment);

  return (
    <div className="w-full grid place-items-center py-28">
      <UnChoosenIcon />
      <section className="text-sm font-bold pt-6 pb-4">
        Oops, Kamu belum mengambil Rencana Pelatihan.
      </section>
      <Button
        type="button"
        onClick={() => {
          setSeeDeptList(true);
        }}
        className=" bg-version2-400 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-400s flex items-center justify-center gap-2 text-sm py-3 w-[200px]"
      >
        <h1>Rencana Pelatihan</h1>
      </Button>
    </div>
  );
};
