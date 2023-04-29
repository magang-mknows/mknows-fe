import { RegisterModule } from '../../modules/';
import { NextPage } from 'next';
import { GetSessionParams, getSession } from 'next-auth/react';
import { ReactElement } from 'react';

const RegisterPages: NextPage = (): ReactElement => {
  return <RegisterModule />;
};

export default RegisterPages;

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
