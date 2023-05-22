import { LoginModule } from '../../modules/';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { GetSessionParams, getSession } from 'next-auth/react';

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
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
