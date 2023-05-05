import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout: FC = (): ReactElement => {
  return (
    <section className="flex lg:w-screen z-0 lg:h-screen  overflow-hidden bg-white">
      <div className="lg:p-8 lg:w-full overflow-hidden">
        <img src="/assets/auth/logo.svg" alt="logo" width={160} />
      </div>
      <div className="flex flex-col h-screen w-full justify-center items-center">
        <Outlet />
        <p className="lg:text-primary-600 text-white pt-8">
          PT Menara Indonesia
        </p>
      </div>

      <img
        src={'/assets/auth/asset3.svg'}
        alt="variasi"
        width={400}
        className="items-end absolute mt-[84vh] lg:mx-40 "
      />

      <div className="flex  w-screen justify-end items-start overflow-hidden">
        <img
          src={'/assets/auth/asset2.svg'}
          alt="variasi"
          width={250}
          className="absolute  mx-20"
        />
        <img src={'/assets/auth/asset1.svg'} alt="variasi" width={250} />
      </div>
    </section>
  );
};
