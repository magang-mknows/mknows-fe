import { EmailSentModule } from '../../modules';
import { NextPage } from 'next';
import { GetSessionParams, getSession } from 'next-auth/react';
import { ReactElement } from 'react';

const EmailSentPages: NextPage = (): ReactElement => {
  return <EmailSentModule />;
};

export default EmailSentPages;

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
