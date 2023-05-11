import { FC, ReactElement } from 'react';
import { ClientProvider } from '../common/provider';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { ViewProfileBreadCumbs } from './const';
import { ProfileSidebar } from './sidebar';
import { ViewProfileSection } from './main';
import { ContentFooter } from '../common/footer/footer-content';
import { EditProfileSection } from './main/edit-profile';
import { useRouter } from 'next/router';

export const ProfileModule: FC = (): ReactElement => {
  const router = useRouter();
  const pathname = router.asPath;

  const eventPath = ['/profile', '/profile/edit-profile'];

  if (!eventPath.includes(pathname)) {
    router.push('/profile');
  }

  return (
    <ClientProvider>
      <section className="min-h-[120vh] bg-neutral-50/40 pb-20">
        <BreadCrumb
          items={ViewProfileBreadCumbs}
          textColor="text-version2-400"
        />
        <header className="pb-6 px-8 md:px-14 lg:px-16">
          <h1 className="text-xl font-bold text-neutral-800">Profile</h1>
        </header>
        <section className="grid grid-cols-1 gap-20 px-8 lg:grid-cols-3 md:px-14 lg:px-16">
          <ProfileSidebar />
          <section className="col-span-2">
            {pathname === '/profile' && <ViewProfileSection />}
            {pathname === '/profile/edit-profile' && <EditProfileSection />}
          </section>
        </section>
      </section>
      <ContentFooter />
    </ClientProvider>
  );
};
