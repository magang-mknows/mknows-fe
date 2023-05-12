'use client';
import type { NextPage } from 'next';
import type { ReactElement } from 'react';
import { Button } from '@mknows-frontend-services/components/atoms';

const RootPage: NextPage = (): ReactElement => {
  return (
    <main className="flex gap-x-6 px-16 justify-center h-screen items-center w-full">
      <section className="flex items-start border-2 border-neutral-400 rounded-lg h-1/2 w-1/2 p-6">
        <div className="flex w-full justify-between">
          <h1 className="text-black text-4xl font-[700]">Login Test</h1>
          <Button type="button">Login</Button>
        </div>
      </section>
      <section className="flex items-start border-2 border-neutral-400 rounded-lg h-1/2 w-1/2 p-6">
        <div className="flex w-full justify-between">
          <h1 className="text-black text-4xl font-[700]">Form Test</h1>
          <Button type="button">Login</Button>
        </div>
      </section>
    </main>
  );
};

export default RootPage;
