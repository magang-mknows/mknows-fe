import { FC, ReactElement } from 'react';
import { People } from './ilustration/people';

export const ErrorAssignment: FC = (): ReactElement => {
  return (
    <section>
      <People />
      <h1>Oops, Website sedang error. Tunggu sebentar yaa!!.</h1>
    </section>
  );
};
