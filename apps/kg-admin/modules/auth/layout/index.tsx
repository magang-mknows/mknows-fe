import { FC, ReactElement, ReactNode, useEffect } from "react";
import Head from "next/head";
import { useErrorMessage } from "../common/hook";

type TAuthLayoutProps = {
  children: ReactNode;
  title: string;
  illustration?: ReactNode;
  desc?: string;
};

export const AuthLayout: FC<TAuthLayoutProps> = (props): ReactElement => {
  const { get, set } = useErrorMessage();
  useEffect(() => {
    set("");
  }, []);
  return (
    <section className="flex justify-center items-center w-full h-screen px-8">
      <Head>
        <title>KG-Admin - {props.title}</title>
      </Head>
      <div className="grid grid-rows-1 justify-center lg:grid-cols-2 w-auto py-[38px] bg-primary-50 rounded-lg">
        <div className="lg:flex hidden items-center w-full justify-center">
          {props.illustration}
        </div>
        <div className="flex flex-col w-full items-center justify-center lg:pr-[85px] px-[40px]">
          <h1 className="text-black font-bold text-[28px]">{props.title}</h1>
          <p className="text-base text-black font-medium mb-4 text-center">{props.desc}</p>
          {get && (
            <span className="bg-error-100 text-error-700 p-4 w-full border-2 border-error-700 rounded-lg">
              {get}
            </span>
          )}
          {props.children}
        </div>
      </div>
    </section>
  );
};
