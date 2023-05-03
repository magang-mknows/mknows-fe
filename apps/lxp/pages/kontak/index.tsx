import { ContactModule } from '../../modules/contact';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const ContactPage: NextPage = (): ReactElement => {
  return <ContactModule />;
};

export default ContactPage;
