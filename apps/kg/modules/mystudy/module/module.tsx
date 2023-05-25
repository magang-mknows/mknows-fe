import { FC, ReactElement } from "react";
import Link from "next/link";

export const ModuleMyStudyModule: FC = (): ReactElement => {
  return (
    <div className="w-full justify-start lg:px-32 p-2 lg:p-10">
      <Link
        href="/studi-ku/menejemen-keuangan/modul/modul1"
        className="flex auto p-4 flex-col bg-neutral-300/30 shadow-[0_3px_22px_10px_rgba(229, 229, 229, 1)] text-start rounded-lg"
      >
        <div className="flex flex-col p-4">
          <h1 className="font-bold text-xl">
            Modul 1 <span className="text-gray-500">(Materi 1)</span>
          </h1>

          <p className="text-md text-gray-600 py-4">
            Pertemuan 1 |{" "}
            <span className="text-gray-400">
              {" "}
              Modul ini berisi tentang penjelasan secara sederhana tentang manajemen keuangan,
              session 1.
            </span>
          </p>
          <div className="flex gap-3">
            <div className=" flex gap-3 text-black px-2 py-2 my-[10px] text-[12px] rounded-[5px]  bg-[#E3FBDA]">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5656 0H1.89897C0.973966 0 0.2323 0.741667 0.2323 1.66667V13.3333C0.2323 14.25 0.9823 15 1.89897 15H13.5656C14.4823 15 15.2323 14.25 15.2323 13.3333V1.66667C15.2323 1.22464 15.0567 0.800716 14.7441 0.488155C14.4316 0.175595 14.0077 0 13.5656 0ZM6.06563 10.8333V4.16667L10.2323 7.5"
                  fill="#3EB449"
                />
              </svg>
              <p>3 video</p>
            </div>
            <div className="flex gap-3 text-black px-2 py-2 my-[10px] text-[12px] rounded-[5px]  bg-[#FEF6D0]">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9999 2.12897V7.8442C10.9999 7.88564 11.0163 7.92539 11.0456 7.95469C11.0749 7.98399 11.1147 8.00045 11.1561 8.00045H16.8714C16.8868 8.00047 16.9019 7.9959 16.9147 7.98734C16.9276 7.97879 16.9376 7.96661 16.9435 7.95236C16.9495 7.93811 16.9511 7.92242 16.9481 7.90727C16.9451 7.89213 16.9377 7.8782 16.9268 7.86725L11.1331 2.0735C11.1221 2.06262 11.1082 2.05522 11.0931 2.05225C11.0779 2.04927 11.0622 2.05085 11.048 2.05678C11.0337 2.06272 11.0215 2.07274 11.013 2.08559C11.0044 2.09844 10.9999 2.11353 10.9999 2.12897Z"
                  fill="#EE2D24"
                />
                <path
                  d="M10.0624 9.25C9.9795 9.25 9.90001 9.21708 9.84141 9.15847C9.7828 9.09987 9.74988 9.02038 9.74988 8.9375V1.75H3.96863C3.84431 1.75 3.72508 1.79939 3.63717 1.88729C3.54926 1.9752 3.49988 2.09443 3.49988 2.21875V18.7812C3.49988 18.9056 3.54926 19.0248 3.63717 19.1127C3.72508 19.2006 3.84431 19.25 3.96863 19.25H16.7811C16.9054 19.25 17.0247 19.2006 17.1126 19.1127C17.2005 19.0248 17.2499 18.9056 17.2499 18.7812V9.25H10.0624ZM14.1249 15.5H6.62488V14.25H14.1249V15.5ZM14.1249 12.375H6.62488V11.125H14.1249V12.375Z"
                  fill="#EE2D24"
                />
              </svg>

              <p>3 Dokumen</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
