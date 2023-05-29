import { FC, Fragment, ReactElement } from "react";
import { ContentSection } from "./content";
import { SidebarSection } from "./sidebar";

export const DashboardModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <main className="py-2 bg-neutral-50 min-h-[220vh] w-full overflow-hidden">
        <div className="grid grid-cols-3 gap-x-10 px-6 md:px-8 lg:px-10">
          <SidebarSection />
          <ContentSection />
        </div>
      </main>
      {/* Footer */}
      <div
        className="
        flex 
        flex-col
        md:flex-row
        px-6
        py-4
        lg:py-2
        lg:px-10 
        md:px-8
        sm:px-10
        justify-between
        text-[12px]
        text-[#737373]
        bg-gray-200"
      >
        <div className="dark:text-gray-400 flex justify-center text-center lg:justify-start">
          2023 - www.kampusgratis.id - Hak Cipta Dilindungi.
        </div>
        <div className="flex justify-center gap gap-x-4 text-center ">
          <div className=" hover:text-blue-400 xs:pb-2">
            <a href="/terms" className="hover:text-blue-400">
              Terms of use
            </a>
          </div>
          <div className="mr-4">
            <a href="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
