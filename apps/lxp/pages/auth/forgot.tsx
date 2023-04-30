import { NextPage } from 'next';
import { GetSessionParams, getSession } from 'next-auth/react';
import { ReactElement } from 'react';

const ForgotPages: NextPage = (): ReactElement => {
  return <span>Forgot Password Page</span>;
};

export default ForgotPages;

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
