import { FC, ReactElement, Fragment, useState } from "react";
import Avatar from "react-avatar";
import {
  IconDashboard,
  IconUser,
  IconRequest,
  IconReport,
  IconQuota,
  IconToggle,
  IconLogout,
} from "@mknows-frontend-services/components/atoms";
import { TSidebarProp } from "./type";

export const Sidebar: FC<TSidebarProp> = ({ children }): ReactElement => {
  const DataSidebar = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <IconDashboard />,
    },
    {
      title: "User",
      path: "/dashboard",
      icon: <IconUser />,
    },
    {
      title: "Permintaan",
      path: "/dashboard",
      icon: <IconRequest />,
    },
    {
      title: "Laporan",
      path: "/dashboard",
      icon: <IconReport />,
    },
    {
      title: "Kuota",
      path: "/dashboard",
      icon: <IconQuota />,
    },
  ];
  const activeLink =
    "flex rounded-md cursor-pointer gap-2 p-2 items-center bg-primary-400 text-white";
  const normalLink =
    "flex rounded-md cursor-pointer gap-2 p-2 items-center bg-white text-[#9E9E9E] hover:bg-neutral-300 hover:text-white";
  const [open, setOpen] = useState(true);
  const toggleSidebar = (): void => {
    setOpen(!open);
  };

  return (
    <>
      <button
        type="button"
        className="z-50 fixed bottom-10 shadow-md right-10 inline-flex items-center p-2 mt-2 ml-3 bg-white text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <IconToggle />
      </button>
      <div className="flex justify-normal">
        <aside
          id="separator-sidebar"
          className={` ${
            open ? "  -translate-x-full" : " sm:translate-x-0"
          } absolute lg:relative top-0 left-0 z-50 lg:sm:translate-x-0 w-64 h-full transition-transform text-black bg-white `}
          aria-label="Sidebar"
        >
          <div className="h-screen px-3 py-4  text-black bg-white border-b">
            <div>
              <img src={"/assets/auth/logo.svg"} alt="logo" className="w-[200px] h-auto p-6" />
            </div>

            <div className="pt-4 font-medium w-full border-[#F5F5F5] ">
              <div className="flex border-b-2 rounded-md cursor-pointer gap-2 px-2 pt-6 pb-6 items-center">
                <div className=" rounded-full border-primary-base border-2 items-center flex">
                  <Avatar name="admin" className="rounded-full w-[36px] h-[36px]" size="36" />
                </div>
                <div className="font-semibold text-sm text-neutral-500">Salsa</div>
              </div>
              {DataSidebar.map((x, i) => {
                return (
                  <div key={i} className="my-4">
                    <div
                      // to={x.path}
                      className={normalLink}
                    >
                      <span className="p-1">{x.icon}</span>
                      <span>{x.title}</span>
                    </div>
                  </div>
                );
              })}

              <div className="flex h-full gap-2 p-5 rounded-md text-neutral-400 hover:bg-neutral-300 hover:text-white cursor-pointer items-end">
                <span>
                  <IconLogout />
                </span>
                <span className="flex justify-center ">Keluar</span>
              </div>
            </div>
          </div>
        </aside>
        <section>{children}</section>
      </div>
    </>
  );
};
