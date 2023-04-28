import { LoginModuleKg } from '../../modules/auth/login/module';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const LoginPages: NextPage = (): ReactElement => {
  return <LoginModuleKg />;
};

export default LoginPages;
