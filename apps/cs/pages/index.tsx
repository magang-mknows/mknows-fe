import { FC, Fragment, ReactElement } from 'react';
import { LoginModule } from '../modules/auth/login';
import Head from 'next/head';

const Login: FC = (): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>Credit Scoring</title>
      </Head>

      <LoginModule />
    </Fragment>
  );
};

export default Login;
