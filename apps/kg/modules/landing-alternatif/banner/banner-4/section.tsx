import { FC, ReactElement } from "react";
import Image from "next/image";
import ArtisKG from "../assets/model.png";
import { Button } from "@mknows-frontend-services/components/atoms";

export const Banner4Module: FC = (): ReactElement => {
  return (
    <main className="flex bg-white  pr-8 py-10 justify-center items-center ">
      <div className="flex right-0 absolute z-40 pb-36">
        <Image
          src={ArtisKG}
          width={412}
          height={460}
          alt={"Banner 1"}
          priority={false}
          loading="lazy"
          className="rounded-tr-lg md:block mb-6 hidden rounded-br-lg "
        />
        <div className="pl-20">
          <svg
            width="80"
            height="101"
            viewBox="0 0 80 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50.5 83.9296C68.9626 83.9296 83.9296 68.9626 83.9296 50.5C83.9296 32.0374 68.9626 17.0704 50.5 17.0704C32.0374 17.0704 17.0704 32.0374 17.0704 50.5C17.0704 68.9626 32.0374 83.9296 50.5 83.9296ZM50.5 101C78.3904 101 101 78.3904 101 50.5C101 22.6096 78.3904 0 50.5 0C22.6096 0 0 22.6096 0 50.5C0 78.3904 22.6096 101 50.5 101Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <section className="bg-primary-500 w-[1188px] h-[330px] flex flex-col items-center rounded-lg">
        <div className="absolute w-8 h-8 rounded-full bg-error-200 my-4"></div>
        <div className="flex w-full h-full justify-center items-center">
          <div className="flex flex-col justify-center gap-8 items-start pl-12  w-full">
            <div className="flex absolute pb-[152px] pl-6">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 29.9155C24.5807 29.9155 29.9155 24.5807 29.9155 18C29.9155 11.4193 24.5807 6.08451 18 6.08451C11.4193 6.08451 6.08451 11.4193 6.08451 18C6.08451 24.5807 11.4193 29.9155 18 29.9155ZM18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
                  fill="#FDDB73"
                />
              </svg>
            </div>
            <h1 className="text-white font-[800] font-bold text-[36px] text-center w-[500px]">
              Segera Daftarkan Dirimu
            </h1>
            <Button
              type="button"
              href="/"
              className="hover:bg-yellow-300 bg-yellow-500 text-white font-[700] p-3 rounded-lg w-[175px] mx-6"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
        <div className="absolute w-8 h-8 rounded-full bg-success-200 left-16 mt-60 mx-4"></div>
        <div className="flex absolute py-10 right-20">
          <svg
            width="80"
            height="101"
            viewBox="0 0 80 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50.5 83.9296C68.9626 83.9296 83.9296 68.9626 83.9296 50.5C83.9296 32.0374 68.9626 17.0704 50.5 17.0704C32.0374 17.0704 17.0704 32.0374 17.0704 50.5C17.0704 68.9626 32.0374 83.9296 50.5 83.9296ZM50.5 101C78.3904 101 101 78.3904 101 50.5C101 22.6096 78.3904 0 50.5 0C22.6096 0 0 22.6096 0 50.5C0 78.3904 22.6096 101 50.5 101Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex absolute py-20 px-8 right-20">
          <svg
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50.5 83.9296C68.9626 83.9296 83.9296 68.9626 83.9296 50.5C83.9296 32.0374 68.9626 17.0704 50.5 17.0704C32.0374 17.0704 17.0704 32.0374 17.0704 50.5C17.0704 68.9626 32.0374 83.9296 50.5 83.9296ZM50.5 101C78.3904 101 101 78.3904 101 50.5C101 22.6096 78.3904 0 50.5 0C22.6096 0 0 22.6096 0 50.5C0 78.3904 22.6096 101 50.5 101Z"
              fill="#135C85"
              fill-opacity="0.57"
            />
          </svg>
        </div>
      </section>
    </main>
  );
};
