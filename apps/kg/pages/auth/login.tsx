import { LoginModule } from '../../modules/auth/login/module';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const LoginPages: NextPage = (): ReactElement => {
  return <LoginModule />;
};

export default LoginPages;
