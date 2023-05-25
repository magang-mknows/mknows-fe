import { NextPage } from 'next';
import { LoginIllustration, LoginModule } from '../modules';
import { ReactElement } from 'react';
import { GetSessionParams, getSession } from 'next-auth/react';
import Head from 'next/head';

const LoginPages: NextPage = (): ReactElement => {
  return (
    <section className="flex justify-center items-center w-full h-screen px-8">
      <Head>
        <title>KG-Admin - Login</title>
      </Head>
      <div className="grid grid-rows-1 justify-center lg:grid-cols-2 w-auto py-[38px] bg-primary-50 rounded-lg">
        <div className="lg:flex hidden items-center w-full justify-center">
          <LoginIllustration />
        </div>
        <div className="flex flex-col w-full items-center justify-center lg:pr-[85px] px-[40px]">
          <h1 className="text-black font-bold text-[28px]">Masuk</h1>
          <p className="text-base text-black font-medium mb-4 text-center">
            Silahkan masuk menggunakan email dan kata sandi yang terdaftar
          </p>
          <LoginModule />
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default LoginPages;
