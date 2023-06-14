import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = (): ReactElement => {
  return (
    <section className="flex flex-col lg:w-screen z-0 lg:h-screen bg-neutral-100 overflow-hidden bg-white">
      <div className="lg:p-8 lg:w-full w-full overflow-hidden">
        <img src="/logo.svg" alt="logo" width={120} />
      </div>
      <div className="flex flex-col h-screen w-full justify-center items-center z-50">
        <Outlet />
        <p className="text-primary-600 py-4">PT Menara Indonesia</p>
      </div>
    </section>
  );
};
