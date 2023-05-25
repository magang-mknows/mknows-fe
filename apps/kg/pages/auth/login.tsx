import { LoginModule } from '../../modules/';
import { NextPage } from 'next';
import { GetSessionParams, getSession } from 'next-auth/react';
import { ReactElement } from 'react';

const LoginPages: NextPage = (): ReactElement => {
  return <LoginModule />;
};

export default LoginPages;

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
